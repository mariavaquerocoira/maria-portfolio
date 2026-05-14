import { useRef, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Builds the background-mode Vimeo embed URL for the masonry grid.
 * Autoplay, looped, muted, no controls.
 */
function vimeoGridUrl(vimeoId) {
  return (
    `https://player.vimeo.com/video/${vimeoId}` +
    '?background=1&autoplay=1&loop=1&muted=1' +
    '&title=0&byline=0&portrait=0&controls=0&transparent=0&dnt=1'
  );
}

/**
 * Derives a poster image URL from a Cloudinary mp4 URL.
 * Replaces the video upload transform with an image one and swaps the extension.
 */
function mp4PosterUrl(src) {
  return src
    .replace('/video/upload/q_auto,w_1280/', '/video/upload/so_auto,q_auto,w_800/')
    .replace(/\.(mp4|mov)$/, '.jpg');
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

/** Renders an <img> with a fade-in-on-load animation. */
function GridImage({ src, alt, ratio }) {
  return (
    <Box
      className="media-wrap"
      sx={{
        overflow: 'hidden',
        width: '100%',
        aspectRatio: ratio,
        position: 'relative',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
        '&::after': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.04)',
          opacity: 0,
          transition: 'opacity 0.2s ease',
          pointerEvents: 'none',
        },
        '.grid-item:hover &::after': {
          opacity: 1,
        },
      }}
    >
      <Box
        component="img"
        src={src}
        alt={alt}
        sx={{
          width: '100%',
          height: 'auto',
          display: 'block',
          opacity: 0,
          transition: 'opacity 0.3s ease',
          // Loaded state is toggled by the onLoad handler below
          '&.loaded': { opacity: 1 },
        }}
        onLoad={(e) => e.currentTarget.classList.add('loaded')}
      />
    </Box>
  );
}

/** Renders an mp4 <video> that lazy-loads and autoplays when in view. */
function GridVideo({ src, ratio }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Lazy-load: set src on first intersection
            if (!video.src && video.dataset.src) {
              video.src = video.dataset.src;
            }
            video.play().catch(() => {
              // Autoplay was blocked – silently ignore
            });
          } else {
            video.pause();
          }
        });
      },
      { rootMargin: '200px' },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <Box
      className="media-wrap"
      sx={{
        overflow: 'hidden',
        width: '100%',
        aspectRatio: ratio,
        position: 'relative',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
        '&::after': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.04)',
          opacity: 0,
          transition: 'opacity 0.2s ease',
          pointerEvents: 'none',
        },
        '.grid-item:hover &::after': {
          opacity: 1,
        },
      }}
    >
      <Box
        ref={videoRef}
        component="video"
        data-src={src}
        poster={mp4PosterUrl(src)}
        preload="none"
        muted
        loop
        playsInline
        sx={{
          width: '100%',
          height: 'auto',
          display: 'block',
          pointerEvents: 'none',
        }}
      />
    </Box>
  );
}

/** Renders a background-mode Vimeo embed for the grid. */
function GridVimeo({ vimeoId, ratio }) {
  return (
    <Box
      className="media-wrap"
      sx={{
        overflow: 'hidden',
        width: '100%',
        aspectRatio: ratio,
        position: 'relative',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
        '&::after': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: 'rgba(0,0,0,0.04)',
          opacity: 0,
          transition: 'opacity 0.2s ease',
          pointerEvents: 'none',
        },
        '.grid-item:hover &::after': {
          opacity: 1,
        },
      }}
    >
      {/* Stretched iframe – scaled to 110 % so edges never show */}
      <Box
        component="iframe"
        src={vimeoGridUrl(vimeoId)}
        allow="autoplay; fullscreen"
        allowFullScreen
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '110%',
          height: '110%',
          transform: 'translate(-50%, -50%)',
          border: 'none',
          pointerEvents: 'none',
        }}
      />
    </Box>
  );
}

// ---------------------------------------------------------------------------
// Main export
// ---------------------------------------------------------------------------

/**
 * GridItem
 *
 * A single masonry card. Renders the correct media type and the caption
 * below it. Calls `onOpen(index)` when clicked.
 */
export default function GridItem({ project, index, onOpen }) {
  const { type, src, vimeoId, label, ratio } = project;

  function renderMedia() {
    if (type === 'vimeo') {
      return <GridVimeo vimeoId={vimeoId} ratio={ratio} />;
    }
    if (type === 'mp4') {
      return <GridVideo src={src} ratio={ratio} />;
    }
    // 'image' and 'gif' are both rendered as <img>
    return <GridImage src={src} alt={label} ratio={ratio} />;
  }

  return (
    <Box
      className="grid-item"
      onClick={() => onOpen(index)}
      sx={{
        breakInside: 'avoid',
        display: 'block',
        cursor: 'pointer',
        mb: 0,
        position: 'relative',
      }}
    >
      {renderMedia()}

      {/* Caption */}
      <Box sx={{ pt: '8px', pb: '20px' }}>
        <Typography
          variant="caption"
          component="p"
          sx={{ color: 'text.primary' }}
        >
          ↳ {label}
        </Typography>
      </Box>
    </Box>
  );
}
