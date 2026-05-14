import { createTheme } from '@mui/material/styles';

/**
 * MUI theme that mirrors the original site's CSS custom properties.
 *
 * The site is intentionally minimal — pure black/white, system font stack,
 * no colour accent — so this theme is deliberately stripped back.
 */
const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: '#000000',
      secondary: '#888888',
    },
    divider: '#e8e8e8',
  },

  typography: {
    // Mirror the original: -apple-system stack for the authentic Apple-era feel
    fontFamily: [
      '-apple-system',
      "'Helvetica Neue'",
      'Helvetica',
      'Arial',
      'sans-serif',
    ].join(','),
    fontWeightRegular: 400,

    // Bio header paragraphs
    h1: {
      fontSize: '22px',
      fontWeight: 400,
      lineHeight: 1.4,
      letterSpacing: '-0.02em',
    },

    // Caption text below grid items
    caption: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: 1.4,
      letterSpacing: 0,
    },

    // Lightbox caption & close button
    body2: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: 1.4,
    },

    // Close / mute labels
    overline: {
      fontSize: '13px',
      fontWeight: 400,
      letterSpacing: 0,
      textTransform: 'none',
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*, *::before, *::after': {
          boxSizing: 'border-box',
        },
        html: {
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        },
        body: {
          background: '#ffffff',
          margin: 0,
          padding: 0,
        },
        // Prevent native save / drag behaviours
        img: {
          WebkitUserDrag: 'none',
          userSelect: 'none',
          pointerEvents: 'none',
        },
      },
    },
  },
});

export default theme;
