import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MuiLink from '@mui/material/Link';

/**
 * BioHeader
 *
 * Renders the introductory paragraph(s) and contact link that appear above
 * the portfolio grid. Matches the original `#bio-header` layout exactly:
 *
 *   – padding: 40px top, 48px bottom, 8px horizontal
 *   – max-width: left half of the page (mirrors `calc((100% - 40px) / 2 + 8px)`)
 *   – font: 22 px / 1.4 / −0.02 em tracking
 *
 * Props:
 *   bio  – { paragraphs: string[], email: string }
 */
export default function BioHeader({ bio }) {
  return (
    <Box
      component="header"
      sx={{
        pt: '40px',
        pb: '48px',
        px: '8px',
        maxWidth: 'calc((100% - 40px) / 2 + 8px)',

        '@media (max-width: 1024px)': {
          maxWidth: '100%',
        },
      }}
    >
      {bio.paragraphs.map((text, i) => (
        <Typography
          key={i}
          variant="h1"
          component="p"
          sx={{
            mb: '0.8em',
            '&:last-child': { mb: 0 },
          }}
        >
          {text}
        </Typography>
      ))}

      {/* Contact line */}
      <Typography
        variant="h1"
        component="p"
        sx={{ mt: '0.8em' }}
      >
        She can be contacted at{' '}
        <MuiLink
          href={`mailto:${bio.email}`}
          underline="none"
          sx={{
            color: 'text.primary',
            '&:hover': { color: 'text.secondary' },
          }}
        >
          {bio.email}
        </MuiLink>
      </Typography>
    </Box>
  );
}
