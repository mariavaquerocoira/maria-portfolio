import { useMemo } from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

import theme from '../styles/theme';

/**
 * Creates a client-side Emotion cache.
 * Extracted into its own function so it can be memoised per render.
 */
function createEmotionCache() {
  return createCache({ key: 'css', prepend: true });
}

/**
 * _app – root Next.js application wrapper.
 *
 * Provides:
 *   1. Emotion cache for MUI's CSS-in-JS
 *   2. MUI ThemeProvider with our custom theme
 *   3. CssBaseline for normalised cross-browser defaults
 */
export default function App({ Component, pageProps, emotionCache }) {
  // Fall back to a fresh client-side cache if SSR didn't inject one
  const cache = useMemo(
    () => emotionCache ?? createEmotionCache(),
    [emotionCache],
  );

  return (
    <CacheProvider value={cache}>
      <Head>
        {/* Viewport already added by Next.js; nothing extra needed here */}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
