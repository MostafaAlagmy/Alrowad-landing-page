import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Link,
  IconButton,
  Divider,
  Stack
} from '@mui/material';
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn
} from '@mui/icons-material';

const Footer = () => {
  const primaryColor = "var(--color-primary, #1D2130)";
  const surfaceColor = "var(--color-surface, rgba(255, 255, 255, 0.05))";
  const textColor = "rgba(255, 255, 255, 0.7)";

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: primaryColor,
        color: 'white',
        pt: { xs: 6, md: 10 }, 
        pb: 4,
        fontFamily: '"Roboto", sans-serif',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          
          <Grid size={{ xs: 6, sm: 6, md: 2 }}>
            <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 2 }}>
              Quick Links
            </Typography>
            <Stack spacing={1.5}>
              {['About Us', 'Why Choose us', 'Pricing', 'Testimonial'].map((text) => (
                <Link 
                  key={text} 
                  href="#" 
                  underline="none" 
                  sx={{ color: textColor, fontSize: '0.85rem', '&:hover': { color: 'white' } }}
                >
                  {text}
                </Link>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 6, sm: 6, md: 2 }}>
            <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 2 }}>
              Resources
            </Typography>
            <Stack spacing={1.5}>
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Security'].map((text, index) => (
                <Link 
                  key={index} 
                  href="#" 
                  underline="none" 
                  sx={{ color: textColor, fontSize: '0.85rem', '&:hover': { color: 'white' } }}
                >
                  {text}
                </Link>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 2 }}>
              Product
            </Typography>
            <Stack spacing={1.5}>
              {['Remote Collaboration', 'Task Management', 'Time Tracking', 'Integrations'].map((text, index) => (
                <Link 
                  key={index} 
                  href="#" 
                  underline="none" 
                  sx={{ color: textColor, fontSize: '0.85rem', '&:hover': { color: 'white' } }}
                >
                  {text}
                </Link>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Typography variant="h5" fontWeight="900" sx={{ mb: 4, letterSpacing: '1px' }}>
              LOGOO
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, fontWeight: 500 }}>
              Subscribe to our Newsletter
            </Typography>
            <Box sx={{ 
                display: 'flex', 
                alignItems:'center',
                mt: 1, 
                bgcolor: surfaceColor, 
                borderRadius: '8px', 
                p: 0.6,
                border: '1px solid rgba(255,255,255,0.1)'
            }}>
              <TextField
                variant="standard"
                placeholder="Enter your Email"
                InputProps={{ disableUnderline: true }}
                sx={{
                  flexGrow: 1,
                  px: 2,
                  input: { color: 'white', fontSize: '0.9rem' },
                  '& .MuiInputBase-input::placeholder': { color: 'rgba(255,255,255,0.3)', opacity: 1 }
                }}
              />
              <Button 
                variant="contained" 
                sx={{ 
                  bgcolor: 'white', 
                  color: 'black', 
                  textTransform: 'none',
                  px: 3,
                  py: 1,
                  borderRadius: '6px',
                  fontWeight: 'bold',
                  boxShadow: 'none',
                  '&:hover': { bgcolor: '#f0f0f0', boxShadow: 'none' }
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>

        {/* الجزء السفلي: الحقوق والأيقونات */}
        <Box sx={{ mt: { xs: 6, md: 10 }, display: 'flex', alignItems: 'center', gap: 2  }}>
            <Divider sx={{ flexGrow: 1, borderColor: 'rgba(255,255,255,0.1)' }} />
            
            <Stack direction={{ xs: 'row', sm: 'row' }} spacing={2} alignItems="center">
                <Typography variant="caption" sx={{ color: textColor, whiteSpace: 'nowrap' }}>
                    © Copyright Al Rowad 2026
                </Typography>
                <Stack direction="row" spacing={1}>
                    <IconButton size="small" sx={{ color: 'white', p: 0.5 }}><Facebook fontSize="inherit" /></IconButton>
                    <IconButton size="small" sx={{ color: 'white', p: 0.5 }}><Twitter fontSize="inherit" /></IconButton>
                    <IconButton size="small" sx={{ color: 'white', p: 0.5 }}><Instagram fontSize="inherit" /></IconButton>
                    <IconButton size="small" sx={{ color: 'white', p: 0.5 }}><LinkedIn fontSize="inherit" /></IconButton>
                </Stack>
            </Stack>

            <Divider sx={{ flexGrow: 1, borderColor: 'rgba(255,255,255,0.1)' }} />
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;