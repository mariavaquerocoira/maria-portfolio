import Document, { Html, Head, Main, NextScript } from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import createCache from '@emotion/cache';

/**
 * Custom Document – enables server-side rendering of MUI / Emotion styles.
 *
 * Without this, there would be a flash of unstyled content (FOUC) on the
 * initial page load because Emotion normally injects styles client-side.
 *
 * Pattern follows the official MUI + Next.js pages-router example:
 * https://github.com/mui/material-ui/tree/master/examples/material-ui-nextjs-pages-router
 */
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* MUI injects its SSR emotion styles here via getInitialProps */}
          {this.props.emotionStyleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

/**
 * getInitialProps is called on the server for every request.
 * We render the page once, collect the Emotion style sheets,
 * and pass them as props so they are embedded in the initial HTML.
 */
MyDocument.getInitialProps = async (ctx) => {
  const cache = createCache({ key: 'css', prepend: true });
  const { extractCriticalToChunks } = createEmotionServer(cache);

  // Inject the cache into the render context so _app can pick it up
  const originalRenderPage = ctx.renderPage;
  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) =>
        function EnhancedApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);
  const emotionStyles = extractCriticalToChunks(initialProps.html);

  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      key={style.key}
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return { ...initialProps, emotionStyleTags };
};
