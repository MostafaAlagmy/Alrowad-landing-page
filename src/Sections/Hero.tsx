import { Box, Typography, Button, Container, Stack, keyframes } from '@mui/material';


const HeroSection = () => {

const floatX = keyframes`
    0% { transform: translate(-50%, -50%) translateX(-40px); }
    25% { transform: translate(-50%, -50%) translateX(0px); }
    50% { transform: translate(-50%, -50%) translateX(80px); }
    75% { transform: translate(-50%, -50%) translateX(0px); }
    100% { transform: translate(-50%, -50%) translateX(-40px); }
  `;

 
 

 

    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth:'900px',
              m:'auto',
                textAlign: 'center',
                position: 'relative',
                background: 'white',
                py: '50px',
                overflow: 'hidden', 
            }}
        >

          

            <Box
        sx={{
          position: 'absolute',
          width: '800px',
          height: '600px',
          top: '125%',
          left: '47%',
          borderRadius: '50%',
          background: `radial-gradient(circle, 
            rgba(0, 149, 255, 0.55) 0%,  
            rgba(0, 21, 255, 0.35) 35%, 
            rgba(0, 187, 255, 0.15) 60%, 
            rgba(24, 78, 218, 0) 85%     
          )`,
          filter: 'blur(21px)',
          zIndex: 0,
          pointerEvents: 'none',
          animation: `${floatX} 6s ease-in-out infinite`,
        }}
      />


            <Container sx={{ position: 'relative', zIndex: 2, pt: '50px' }} maxWidth="md">

                <Stack spacing={4} alignItems={'center'} >

                    <Typography
                        variant="h2"
                        sx={{
                            fontWeight: 700,
                            color: 'var(--color-primary)',
                            fontSize: { xs: '32px', md: '50px' },
                            lineHeight: 1.2,
                            letterSpacing: '-1px'
                        }}
                    >
                        Run Your School With Full Control <br />
                        and Real-Time Reporting
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            color: 'var(--color-muted-foreground)',
                            fontSize: { xs: '16px', md: '19px' },
                            maxWidth: '700px',
                            width: '100%',
                            lineHeight: 1.6,
                        }}
                    >
                        Dashboards and workflows built for principals and admins, with instant
                        notifications for parents and staff across web and mobile.
                    </Typography>

                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
                        <Button
                            variant="contained"
                            sx={{
                                bgcolor: 'var(--color-secondary)',
                                px: 5, py: 1.8,
                                borderRadius: '12px',
                                textTransform: 'none',
                                fontWeight: 'bold',
                                '&:hover': { bgcolor: 'var(--color-primary)' }
                            }}
                        >
                            Book a demo
                        </Button>

                        <Button
                            variant="outlined"
                            sx={{
                                color: 'var(--color-secondary)',
                                borderColor: 'rgba(2, 65, 215, 0.2)',
                                bgcolor: 'rgba(211, 230, 255, 0.3)',
                                px: 5, py: 1.8,
                                borderRadius: '12px',
                                textTransform: 'none',
                                fontWeight: 'bold',
                                '&:hover': { bgcolor: 'rgba(211, 230, 255, 0.6)' }
                            }}
                        >
                            Explore ERP
                        </Button>
                    </Stack>

                </Stack>
            </Container>
        </Box>
    );
};

export default HeroSection;