import { useState, useEffect, useCallback } from 'react';
import Head from 'next/head';
import Box from '@mui/material/Box';

import BioHeader from '../components/BioHeader';
import MasonryGrid from '../components/MasonryGrid';
import Lightbox from '../components/Lightbox';
import bio from '../data/bio';
import projects, { sortForMasonry } from '../data/projects';

// Pre-sort once at module level (equivalent to the original IIFE)
const sortedProjects = sortForMasonry(projects, 4);

/**
 * Home page
 *
 * Composes the three main sections:
 *   1. BioHeader   – introductory text
 *   2. MasonryGrid – portfolio work
 *   3. Lightbox    – full-screen media viewer (portal, rendered above grid)
 *
 * The grid is blurred while the lightbox is open, matching the original
 * `#page.blurred { filter: blur(18px) }` behaviour.
 */
export default function Home() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const openLightbox  = useCallback((index) => setLightboxIndex(index), []);
  const closeLightbox = useCallback(() => setLightboxIndex(-1), []);

  const isLightboxOpen = lightboxIndex >= 0;

  // ──────────────────────────────────────────────────────────────────────────
  // Prevent right-click / drag / common save shortcuts
  // ──────────────────────────────────────────────────────────────────────────
  useEffect(() => {
    const preventContextMenu = (e) => e.preventDefault();
    const preventDragStart   = (e) => e.preventDefault();
    const preventSaveShortcut = (e) => {
      if ((e.ctrlKey || e.metaKey) && ['s', 'S', 'u', 'U'].includes(e.key)) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', preventContextMenu);
    document.addEventListener('dragstart',   preventDragStart);
    document.addEventListener('keydown',     preventSaveShortcut);

    return () => {
      document.removeEventListener('contextmenu', preventContextMenu);
      document.removeEventListener('dragstart',   preventDragStart);
      document.removeEventListener('keydown',     preventSaveShortcut);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Maria Vaquero Coira</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Portfolio of Maria Vaquero Coira — designer and art director."
        />
      </Head>

      {/*
        Page wrapper – blurs when the lightbox is open.
        The transition matches the original `transition: filter 0.45s ease`.
      */}
      <Box
        component="main"
        sx={{
          filter: isLightboxOpen ? 'blur(18px)' : 'none',
          transition: 'filter 0.45s ease',
        }}
      >
        <BioHeader bio={bio} />
        <MasonryGrid projects={sortedProjects} onOpen={openLightbox} />
      </Box>

      {/* Lightbox is rendered outside the blurred wrapper */}
      <Lightbox
        projects={sortedProjects}
        activeIndex={lightboxIndex}
        onClose={closeLightbox}
      />
    </>
  );
}
