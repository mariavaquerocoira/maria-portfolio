import { useEffect, useRef, useState, useCallback } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const FADE_DURATION_MS = 350;    // overlay fade
const MEDIA_FADE_MS   = 150;     // media cross-fade when navigating
const CAPTION_DELAY_MS = 200;    // caption appears slightly after media

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Builds the Vimeo embed URL for the lightbox (with controls hidden,
 * autoplay on, and sound enabled so the mute button works).
 */
function vimeoLightboxUrl(vimeoId) {
  return (
    `https://player.vimeo.com/video/${vimeoId}` +
    '?autoplay=1&loop=1&title=0&byline=0&portrait=0&controls=0&transparent=0&dnt=1'
  );
}

/**
 * Computes the centered, aspect-correct bounding box for the lightbox media.
 * Returns { top, left, width, height } in pixels.
 */
function getTargetRect(ratio) {
  const [rw, rh] = ratio.split('/').map(Number);
  const aspect = rw / rh;

  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const maxW = vw * 0.78;
  const maxH = vh * 0.82;

  let tw = maxW;
  let th = maxW / aspect;
  if (th > maxH) {
    th = maxH;
    tw = maxH * aspect;
  }

  return {
    top:    (vh - th) / 2,
    left:   (vw - tw) / 2,
    width:  tw,
    height: th,
  };
}

// ---------------------------------------------------------------------------
// Arrow button SVGs
// ---------------------------------------------------------------------------

function IconPrev() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M10 2.5L4.5 8L10 13.5"
        stroke="#aaa"
        strokeWidth="0.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconNext() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M6 2.5L11.5 8L6 13.5"
        stroke="#aaa"
        strokeWidth="0.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconSound() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <polygon
        points="2,5 6,5 10,2 10,14 6,11 2,11"
        stroke="#aaa"
        strokeWidth="0.9"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M12 5.5c.8.8 1.3 1.9 1.3 3.1s-.5 2.3-1.3 3.1"
        stroke="#aaa"
        strokeWidth="0.9"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function IconMuted() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <polygon
        points="2,5 6,5 10,2 10,14 6,11 2,11"
        stroke="#aaa"
        strokeWidth="0.9"
        strokeLinejoin="round"
        fill="none"
      />
      <line x1="12" y1="5.5"  x2="15" y2="11"  stroke="#aaa" strokeWidth="0.9" strokeLinecap="round" />
      <line x1="15" y1="5.5"  x2="12" y2="11"  stroke="#aaa" strokeWidth="0.9" strokeLinecap="round" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Media renderer inside the lightbox panel
// ---------------------------------------------------------------------------

/**
 * LightboxMedia
 *
 * Renders the correct element (img / video / iframe) for the current project.
 * The `muted` state is lifted up to the Lightbox component so that the mute
 * button can toggle it independently of navigation.
 */
function LightboxMedia({ project, isMuted }) {
  const { type, src, vimeoId, label } = project;

  const sharedSx = { width: '100%', height: '100%', display: 'block', border: 'none' };

  if (type === 'vimeo') {
    return (
      <Box
        component="iframe"
        src={vimeoLightboxUrl(vimeoId)}
        allow="autoplay; fullscreen"
        allowFullScreen
        sx={sharedSx}
      />
    );
  }

  if (type === 'mp4') {
    return (
      <Box
        component="video"
        src={src}
        autoPlay
        loop
        playsInline
        muted={isMuted}
        sx={{ ...sharedSx, background: '#000', objectFit: 'cover' }}
      />
    );
  }

  // image / gif
  return (
    <Box
      component="img"
      src={src}
      alt={label}
      sx={{ ...sharedSx, objectFit: 'cover' }}
    />
  );
}

// ---------------------------------------------------------------------------
// Main export
// ---------------------------------------------------------------------------

/**
 * Lightbox
 *
 * Props:
 *   projects      – full sorted array of project objects
 *   activeIndex   – index of the currently-open item, or -1 when closed
 *   onClose()     – called when the user closes the lightbox
 */
export default function Lightbox({ projects, activeIndex, onClose }) {
  const isOpen = activeIndex >= 0;

  // Index shown after the cross-fade animation settles
  const [displayIndex, setDisplayIndex] = useState(activeIndex);
  const [mediaVisible, setMediaVisible]   = useState(false);
  const [captionVisible, setCaptionVisible] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // Track bounding rect for the media panel
  const [rect, setRect] = useState(null);

  // Recalculate rect whenever the displayed project or window size changes
  const updateRect = useCallback(() => {
    if (displayIndex < 0 || displayIndex >= projects.length) return;
    setRect(getTargetRect(projects[displayIndex].ratio));
  }, [displayIndex, projects]);

  // ---------------------------------------------------------------------------
  // Lifecycle: opening
  // ---------------------------------------------------------------------------
  useEffect(() => {
    if (activeIndex >= 0) {
      setDisplayIndex(activeIndex);
      setIsMuted(false);
      setMediaVisible(false);
      setCaptionVisible(false);

      // Wait one frame then fade everything in
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          setMediaVisible(true);
          setTimeout(() => setCaptionVisible(true), CAPTION_DELAY_MS);
        }),
      );
    }
  }, [activeIndex]);

  // Recompute rect when the displayed project changes
  useEffect(() => {
    if (displayIndex >= 0) updateRect();
  }, [displayIndex, updateRect]);

  // Recompute on resize
  useEffect(() => {
    window.addEventListener('resize', updateRect);
    return () => window.removeEventListener('resize', updateRect);
  }, [updateRect]);

  // ---------------------------------------------------------------------------
  // Navigation
  // ---------------------------------------------------------------------------
  const navigateTo = useCallback(
    (newIndex) => {
      if (!isOpen) return;
      const wrapped = ((newIndex % projects.length) + projects.length) % projects.length;

      // Fade out → swap → fade in
      setCaptionVisible(false);
      setMediaVisible(false);

      setTimeout(() => {
        setDisplayIndex(wrapped);
        setIsMuted(false);
        setMediaVisible(true);
        setTimeout(() => setCaptionVisible(true), CAPTION_DELAY_MS);
      }, MEDIA_FADE_MS + 10);
    },
    [isOpen, projects.length],
  );

  // ---------------------------------------------------------------------------
  // Keyboard
  // ---------------------------------------------------------------------------
  useEffect(() => {
    const handler = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape')      onClose();
      if (e.key === 'ArrowLeft')   navigateTo(displayIndex - 1);
      if (e.key === 'ArrowRight')  navigateTo(displayIndex + 1);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, displayIndex, navigateTo, onClose]);

  // ---------------------------------------------------------------------------
  // Derived state
  // ---------------------------------------------------------------------------
  const project = projects[displayIndex] ?? null;
  const hasSound = project?.sound === true || project?.type === 'vimeo';

  // ---------------------------------------------------------------------------
  // Render
  // ---------------------------------------------------------------------------
  return (
    /* Backdrop – glass blur */
    <Box
      role="dialog"
      aria-modal="true"
      aria-label="Project lightbox"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      sx={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        pointerEvents: isOpen ? 'all' : 'none',
        opacity: isOpen ? 1 : 0,
        transition: `opacity ${FADE_DURATION_MS}ms ease`,
        background: 'rgba(255,255,255,0.55)',
        backdropFilter: 'blur(22px) saturate(1.4)',
        WebkitBackdropFilter: 'blur(22px) saturate(1.4)',
      }}
    >
      {/* Media panel */}
      {rect && project && (
        <Box
          sx={{
            position: 'absolute',
            top:    rect.top,
            left:   rect.left,
            width:  rect.width,
            height: rect.height,
            overflow: 'hidden',
            opacity: mediaVisible ? 1 : 0,
            transition: `opacity ${MEDIA_FADE_MS}ms ease`,
            background: '#000',
            borderRadius: '8px',
          }}
        >
          <LightboxMedia project={project} isMuted={isMuted} />
        </Box>
      )}

      {/* Previous button */}
      <Box
        component="button"
        aria-label="Previous"
        onClick={(e) => { e.stopPropagation(); navigateTo(displayIndex - 1); }}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '20px',
          transform: 'translateY(-50%)',
          width: 40,
          height: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 10,
          background: 'none',
          border: 'none',
          padding: 0,
          '&:hover svg path': { stroke: '#333' },
          'svg path': { transition: 'stroke 0.2s ease' },
        }}
      >
        <IconPrev />
      </Box>

      {/* Next button */}
      <Box
        component="button"
        aria-label="Next"
        onClick={(e) => { e.stopPropagation(); navigateTo(displayIndex + 1); }}
        sx={{
          position: 'absolute',
          top: '50%',
          right: '20px',
          transform: 'translateY(-50%)',
          width: 40,
          height: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 10,
          background: 'none',
          border: 'none',
          padding: 0,
          '&:hover svg path': { stroke: '#333' },
          'svg path': { transition: 'stroke 0.2s ease' },
        }}
      >
        <IconNext />
      </Box>

      {/* Caption */}
      <Typography
        variant="body2"
        component="p"
        aria-live="polite"
        sx={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          color: '#000',
          opacity: captionVisible ? 1 : 0,
          transition: `opacity 0.25s ease ${CAPTION_DELAY_MS}ms`,
        }}
      >
        {project ? `↳ ${project.label}` : ''}
      </Typography>

      {/* Close label */}
      <Typography
        component="button"
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        sx={{
          position: 'absolute',
          top: '22px',
          right: '22px',
          fontFamily: 'inherit',
          fontSize: '13px',
          fontWeight: 400,
          color: '#666',
          cursor: 'pointer',
          letterSpacing: 0,
          opacity: captionVisible ? 1 : 0,
          transition: 'opacity 0.25s ease 0.15s, color 0.15s ease',
          background: 'none',
          border: 'none',
          padding: 0,
          '&:hover': { color: '#000' },
        }}
      >
        Close
      </Typography>

      {/* Mute button – only shown for items with intentional audio */}
      {hasSound && (
        <Box
          component="button"
          aria-label={isMuted ? 'Unmute' : 'Mute'}
          onClick={(e) => { e.stopPropagation(); setIsMuted((prev) => !prev); }}
          sx={{
            position: 'absolute',
            bottom: '32px',
            right: '40px',
            width: 28,
            height: 28,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
            background: 'none',
            border: 'none',
            padding: 0,
            opacity: captionVisible ? 1 : 0,
            transition: 'opacity 0.25s ease 0.15s',
            '&:hover svg path, &:hover svg line, &:hover svg polygon': { stroke: '#333' },
          }}
        >
          {isMuted ? <IconMuted /> : <IconSound />}
        </Box>
      )}
    </Box>
  );
}
