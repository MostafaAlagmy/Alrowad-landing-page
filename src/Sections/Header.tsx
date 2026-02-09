import  { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  AppBar, Toolbar, Typography, Button, IconButton, 
  Drawer, List, ListItem, ListItemText, Box, 
  useMediaQuery, useTheme, Container 
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

let elements = [
  { label: 'Home', id: 1 },
  { label: 'Product', id: 2 },
  { label: 'Pricing', id: 3 },
  { label: 'Blog', id: 4 },
  { label: 'About', id: 5 },
  { label: 'Contact', id: 6 },
];

const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const navLinkStyles = (itemLabel: string) => ({
    textDecoration: 'none',
    fontSize: '15px',
    fontWeight: 500,
    color: location.hash === `#${itemLabel}` ? 'var(--color-secondary)' : 'var(--color-primary)',
    position: 'relative' as const,
    transition: 'all 0.3s ease',
    '&:hover': {
      color: 'var(--color-secondary)',
      opacity: 0.8,
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      width: location.hash === `#${itemLabel}` ? '100%' : '0%',
      height: '2px',
      bottom: '-4px',
      left: '0',
      backgroundColor: 'var(--color-secondary)',
      transition: 'width 0.3s ease',
    },
    '&:hover::after': {
      width: '100%',
    }
  });

  const drawer = (
    <Box sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h6" sx={{ fontWeight: 900, color: 'var(--color-secondary)' }}>LOGOO</Typography>
        <IconButton onClick={handleDrawerToggle}><CloseIcon /></IconButton>
      </Box>
      <List sx={{ flexGrow: 1 }}>
        {elements.map((item) => (
          <ListItem 
            key={item.id} 
            component={Link} 
            to={`#${item.label}`} 
            onClick={handleDrawerToggle}
            sx={{ 
              borderRadius: '8px',
              mb: 1,
              color: location.hash === `#${item.label}` ? 'var(--color-secondary)' : 'var(--color-primary)',
              '&:hover': { bgcolor: 'rgba(2, 65, 215, 0.08)' } 
            }}
          >
            <ListItemText primary={item.label} primaryTypographyProps={{ fontWeight: 600 }} />
          </ListItem>
        ))}
      </List>
      <Button 
        variant="contained" 
        fullWidth 
        sx={{ bgcolor: 'var(--color-secondary)', py: 1.5, borderRadius: '10px', textTransform: 'none' }}
      >
        Book a demo
      </Button>
    </Box>
  );

  return (
    <AppBar position="sticky" elevation={0} sx={{ bgcolor: 'white', borderBottom: '1px solid #f0f0f0' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ height: { xs: '70px', md: '90px' }, justifyContent: 'space-between' }}>
          
          <Typography 
            variant="h5" 
            component={Link}
            to="/"
            sx={{ fontWeight: 900, color: 'var(--color-secondary)', textDecoration: 'none', letterSpacing: '-0.5px' }}
          >
            LOGOO
          </Typography>

          {!isMobile ? (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              <Box component="nav" sx={{ display: 'flex', gap: 4 }}>
                {elements.map((item) => (
                  <Box key={item.id} component={Link} to={`#${item.label}`} sx={navLinkStyles(item.label)}>
                    {item.label}
                  </Box>
                ))}
              </Box>
              
              <Button 
                variant="contained" 
                sx={{ 
                  bgcolor: 'var(--color-secondary)', 
                  color: 'white',
                  px: 4, 
                  py: 1.2, 
                  borderRadius: '10px',
                  textTransform: 'none',
                  fontWeight: 700,
                  fontSize: '15px',
                  boxShadow: '0 4px 14px 0 rgba(2, 65, 215, 0.39)',
                  transition: 'all 0.3s ease',
                  '&:hover': { 
                    bgcolor: 'var(--color-primary)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 20px rgba(0,0,0,0.15)'
                  }
                }}
              >
                Book a demo
              </Button>
            </Box>
          ) : (
            <IconButton onClick={handleDrawerToggle} sx={{ color: 'var(--color-primary)' }}>
              <MenuIcon fontSize="large" />
            </IconButton>
          )}
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{ sx: { width: '80%', maxWidth: '350px' } }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Header;