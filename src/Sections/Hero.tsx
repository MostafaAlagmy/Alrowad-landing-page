import { Box, Typography, Button, Container, Stack } from '@mui/material';



const HeroSection = () => {
    return (
        <Box
            sx={{
                width: '100%',

                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                background: 'white',

            }}
        >

            <Container sx={{ position: 'relative', zIndex: 1, overflow: 'hidden', pt: '50px' }} maxWidth="md">
                <Box
                    sx={{
                        position: 'absolute',
                        top: '85%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '400px',
                        height: '200px',
                        background: `radial-gradient(circle, 
      rgba(0, 149, 255, 0.7) 0%,  
      rgba(0, 21, 255, 0.6) 40%,  
      rgba(24, 78, 218, 0.4) 60%, 
      rgba(24, 78, 218, 0) 0%  
    )`,
                        filter: 'blur(120px)',
                        zIndex: 0,
                        pointerEvents: 'none',
                        opacity: 0.9, 
                    }}
                />

                <Stack spacing={4}>
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
                            margin: '0 auto',
                            lineHeight: 1.6,
                        }}
                    >
                        Dashboards and workflows built for principals and admins, with instant
                        notifications for parents and staff across web and mobile.
                    </Typography>

                    {/* الأزرار */}
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

                    {/* 2. إضافة صورة الـ Dashboard */}
                    <Box
                        sx={{
                            mt: 6,
                            width: '120%', 
                            alignSelf: 'center',
                            borderRadius: '20px 20px 0 0',
                            border: '6px solid rgba(255, 255, 255, 0.5)',
                            boxShadow: '0 -10px 40px rgba(0,0,0,0.05)',
                            overflow: 'hidden',
                            position: 'relative',
                            zIndex: 2
                        }}
                    >

                    </Box>
                </Stack>
            </Container>

           

        </Box>
    );
};

export default HeroSection;