import { Box, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
let schoolImages = [
    {
        src: '/images/school5.png',
        id: 5
    },
    {
        src: '/images/school2.png',
        id: 2
    },
    {
        src: '/images/school3.png',
        id: 3
    },
    {
        src: '/images/school4.png',
        id: 4
    },


]
const swapperImages = [
    { src: '/images/Frame 73.jpg', id: 1 },
    { src: '/images/Frame 73.jpg', id: 2 },
    { src: '/images/Frame 73.jpg', id: 3 },
];
const About = () => {
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
                pb: 8

            }}
        >
            <div className=' w-full flex justify-center'>
                <div className='w-full max-w-225 overflow-hidden rounded-xl'>
                    <Swiper
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                spaceBetween: 20,
                            },
                            1024: {
                                spaceBetween: 30,
                            },
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {swapperImages.map((item) =>


                            <SwiperSlide>
                                <img key={item.id} src={item.src} className='w-full h-auto object-contain' />
                            </SwiperSlide>
                        )}

                    </Swiper>
                </div>
            </div>

            <div className='flex gap-11.25 mt-6 flex-col items-center w-full justify-center '>
                <Typography sx={{ fontSize: '18px', color: 'var(--color-muted-foreground)' }}>
                    Already  loved and trusted by product team
                </Typography>

                <div className='grid lg:grid-cols-5 grid-cols-2 items justify-items-center  justify-center  gap-17.75 '>

                    {schoolImages.map((item) =>
                        <img key={item.id} src={item.src} width={94} />
                    )}
                    <div className='flex flex-col gap-2.25 w-33.25 justify-center items-center'>
                        <img src={'/images/scholl11.png'} width={'fit'} />
                        <img src={'/images/school12.png'} width={'fit'} />
                    </div>
                </div>



            </div>
        </Box>
    )
}

export default About