import Box from '@mui/material/Box';
import GridItem from './GridItem';

/**
 * MasonryGrid
 *
 * Renders all portfolio items in a CSS `column-count` masonry layout.
 * Column counts mirror the original site's media queries exactly:
 *
 *   ≥ 1025 px  →  4 columns
 *   700–1024 px →  3 columns
 *   421–699 px  →  2 columns
 *   ≤ 420 px    →  1 column
 *
 * Props:
 *   projects  – sorted array of project objects
 *   onOpen(index) – called when a card is clicked; opens the lightbox
 */
export default function MasonryGrid({ projects, onOpen }) {
  return (
    <Box
      component="section"
      aria-label="Portfolio grid"
      sx={{
        columnCount: 4,
        columnGap: '8px',
        px: '8px',

        // Responsive column counts
        '@media (max-width: 1024px)': {
          columnCount: 3,
        },
        '@media (max-width: 700px)': {
          columnCount: 2,
        },
        '@media (max-width: 420px)': {
          columnCount: 1,
        },
      }}
    >
      {projects.map((project, index) => (
        <GridItem
          key={`${project.type}-${project.src ?? project.vimeoId}-${index}`}
          project={project}
          index={index}
          onOpen={onOpen}
        />
      ))}
    </Box>
  );
}
