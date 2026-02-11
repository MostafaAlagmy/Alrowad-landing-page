import { Box, Container, Grid, Typography, Avatar, Stack, Rating, IconButton, Button } from '@mui/material';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Work = () => {
    const secondaryColor = "var(--color-secondary, #0241D7)";
    const colorSlate = "var(--color-slate-light)";
    const primaryColor = "var( --color-primary)";

    const testimonials = [
        {
            id: 1,
            text: "With Ehya, we're able to easily track our performance in full detail. It's become an essential tool for us to grow and engage with our audience.",
            name: "Jaquon Hart",
            role: "Digital Marketing Executive, Hypebeast",
            avatar: "/images/Photo.png",
            rating: 5
        },
        {
            id: 2,
            text: "The integration process was seamless. Our team can now collaborate more effectively across different departments without any friction.",
            name: "Sarah Jenkins",
            role: "School Administrator",
            avatar: "/images/Photo.png",
            rating: 5
        }
    ];

    return (
        <>
            <Box sx={{
                width: '100%',
                minHeight: { xs: 'auto', md: '100vh' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                py: { xs: 6, md: 0 },
                bgcolor: '#F9FBFF',
                overflow: 'hidden'
            }}>
                <Container maxWidth="lg">
                    <Grid container spacing={{ xs: 4, lg: 2 }} alignItems="center">

                        {/* الجانب الأيسر*/}
                        <Grid size={{ xs: 12, lg: 6 }}>
                            <Stack spacing={2} sx={{
                                textAlign: { xs: 'center', lg: 'left' },
                                alignItems: { xs: 'center', lg: 'start' },
                                px: { xs: 2, lg: 0 }
                            }}>
                                <Typography variant='h3' sx={{
                                    fontWeight: 700,
                                    fontSize: { xs: '26px', sm: '32px', lg: '38px' },
                                    color: secondaryColor,
                                    lineHeight: 1.2
                                }}>
                                    Trusted by schools to run daily operations with confidence.
                                </Typography>
                                <Typography variant='body1' sx={{
                                    fontSize: { xs: '14px', lg: '16px' },
                                    color: colorSlate,
                                    opacity: 0.8
                                }}>
                                    Academics, finance, HR, and communication—fully connected.
                                </Typography>
                            </Stack>
                        </Grid>

                        {/* الجانب الأيمن */}
                        <Grid size={{ xs: 12, lg: 6 }}>
                            <Box sx={{
                                position: 'relative',
                                width: '100%',
                                '& .swiper-pagination': {
                                    bottom: '0px !important',
                                    '& .swiper-pagination-bullet': {
                                        bgcolor: '#CBD5E1',
                                        opacity: 0.5,
                                        width: '8px',
                                        height: '8px',
                                        transition: '0.3s'
                                    },
                                    '& .swiper-pagination-bullet-active': {
                                        bgcolor: secondaryColor,
                                        opacity: 1,
                                        width: '24px',
                                        borderRadius: '4px'
                                    }
                                }
                            }}>
                                <Swiper
                                    modules={[Navigation, Pagination]}
                                    slidesPerView={1}
                                    spaceBetween={30}
                                    loop={true}
                                    pagination={{ clickable: true }}
                                    navigation={{
                                        nextEl: '.next-btn',
                                        prevEl: '.prev-btn',
                                    }}
                                    style={{ padding: '20px 20px 50px 20px' }}
                                >
                                    {testimonials.map((item) => (
                                        <SwiperSlide key={item.id}>
                                            <Box sx={{
                                                bgcolor: 'white',
                                                p: { xs: 3, md: 5 },
                                                borderRadius: '20px',
                                                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                textAlign: 'center',
                                                maxWidth: '550px',
                                                mx: 'auto'
                                            }}>
                                                <Box
                                                    component="img"
                                                    src='/images/qoute.png'
                                                    sx={{ width: { xs: 30, md: 40 }, mb: 2 }}
                                                />

                                                <Rating value={item.rating} readOnly size="small" sx={{ color: '#FFB400', mb: 2 }} />

                                                <Typography sx={{
                                                    color: '#4B5563',
                                                    lineHeight: 1.7,
                                                    fontStyle: 'italic',
                                                    fontSize: { xs: '14px', md: '17px' },
                                                    mb: 3
                                                }}>
                                                    "{item.text}"
                                                </Typography>

                                                <Stack direction="row" spacing={2} alignItems="center">
                                                    <Avatar src={item.avatar} sx={{ width: 50, height: 50, border: '2px solid #fff', boxShadow: 2 }} />
                                                    <Box sx={{ textAlign: 'left' }}>
                                                        <Typography variant="subtitle2" fontWeight="800" color={secondaryColor}>{item.name}</Typography>
                                                        <Typography variant="caption" color="text.secondary">{item.role}</Typography>
                                                    </Box>
                                                </Stack>
                                            </Box>
                                        </SwiperSlide>
                                    ))}

                                    <IconButton className="prev-btn" sx={{
                                        position: 'absolute',
                                        left: '0px',
                                        top: '45%',
                                        zIndex: 10,
                                        bgcolor: 'white',
                                        color: secondaryColor,
                                        boxShadow: 2,
                                        display: { xs: 'none', lg: 'flex' },
                                        '&:hover': { bgcolor: secondaryColor, color: 'white' }
                                    }}>
                                        <ArrowBackIosNew fontSize="small" />
                                    </IconButton>

                                    <IconButton className="next-btn" sx={{
                                        position: 'absolute',
                                        right: '0px',
                                        top: '45%',
                                        zIndex: 10,
                                        bgcolor: 'white',
                                        color: secondaryColor,
                                        boxShadow: 2,
                                        display: { xs: 'none', lg: 'flex' },
                                        '&:hover': { bgcolor: secondaryColor, color: 'white' }
                                    }}>
                                        <ArrowForwardIos fontSize="small" />
                                    </IconButton>
                                </Swiper>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box sx={{
                position: 'relative',

                alignItems: 'center', width: '100%',overflow:'hidden', display: 'flex', gap: '32px', py: '80px', flexDirection: 'column', justifyContent: 'center'
            }}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '120%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '1977px',
                        maxWidth: '100%',
                        height: '1154px',
                       
                        backgroundImage: `url('/images/Blur Gradient.svg')`,  
                        backgroundSize: 'cover',  
                        backgroundPosition: 'center',  
                        zIndex: 0,
                        pointerEvents: 'none',
                        opacity: 0.9,
                    }}
                />
                <Typography sx={{ fontWeight: 700, fontSize: { xs: '40px', lg: '56px' }, lineHeight: '110%', textAlign: 'center', color: primaryColor }}>
                    Ready to run your school smarter?
                </Typography>
                <Typography sx={{ fontWeight: 400, fontSize: '16px', lineHeight: '150%', textAlign: 'center' }}>
                    Choose the right plan for your school—single campus or multi-branch.
                </Typography>
                <Button
                    variant="contained"
                    sx={{
                        mx: 'auto',
                        bgcolor: 'var(--color-secondary)',
                        px: 5, py: 1.8,
                        borderRadius: '12px',
                        textTransform: 'none',
                        fontWeight: 'bold',
                        '&:hover': { bgcolor: 'var(--color-primary)' },
                        width: 'fit-content'
                    }}
                >
                    View Pricing                        </Button>

            </Box>
        </>
    );
};

export default Work;