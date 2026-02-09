import { Box, Typography, Stack, Rating } from '@mui/material';

import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import AssessmentIcon from '@mui/icons-material/Assessment';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';

const features = [
    {
        title: 'Smart Operations',
        description: 'Automate attendance, requests, approvals, and daily routines to reduce manual work and save time.',
        icon: <SettingsSuggestIcon sx={{ fontSize: 32, color: '#0241D7' }} />,
    },
    {
        title: 'Analytics & Reports',
        description: 'Track academic and financial performance with clear dashboards and ready-to-export reports.',
        icon: <AssessmentIcon sx={{ fontSize: 32, color: '#0241D7' }} />,
    },
    {
        title: 'Parent Engagement',
        description: 'Keep parents updated on attendance, fees, grades, and announcements—web and mobile.',
        icon: <FamilyRestroomIcon sx={{ fontSize: 32, color: '#0241D7' }} />,
    },
];
const Rates= [
    {
        id:1,
        rate:4.5,
        label :'Schools & Administrators'
    },
    {
        id:2,
        rate:4.8,
        label :'Teachers & Staff'
    },
]

const GrowthSection = () => {
    return (
      <Box sx={{ 
            bgcolor: 'var(--color-secondary)', 
            width: '100%', 
            display: 'flex', 
            justifyContent: 'center',
            py: { xs: 8, lg: 12 }, 
          
        }}>
            <Box sx={{ 
                color: 'white', 
                display: 'flex', 
                flexDirection: { xs: 'column', lg: 'row' }, 
                width: '100%', 
                maxWidth: '1300px', 
                px: { xs: 3, lg: 3 }, 
                justifyContent: 'space-between',
                alignItems: { xs: 'center', lg: 'flex-start' }, 
                gap: { xs: 8, lg: 0 }

            }}>

                {/* Left Side: Content & Ratings */}
                <Box sx={{ 
                    flex: 1, 
                    textAlign: { xs: 'center', lg: 'left' }, 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: { xs: 'center', lg: 'flex-start' },
                    maxWidth: { xs: '100%', lg: '630px' } 
                }}>
                    <Typography variant="h3" sx={{ 
                        fontWeight: 700, 
                        mb: 3, 
                        fontSize: { xs: '30px', md: '40px', lg: '40px' }, 
                        lineHeight: 1.2 
                    }}>
                        Make quick school growth
                    </Typography>
                    
                    <Typography sx={{ 
                        mb: 6, 
                        opacity: 0.8, 
                        fontSize: '18px', 
                        lineHeight: 1.6,
                        maxWidth: '630px'
                    }}>
                        AlRowadEdu helps schools streamline operations and improve performance with real-time dashboards, automated workflows, and faster communication across the entire school community.
                    </Typography>

                    <Box sx={{ 
                        width: '100%', 
                        display: 'flex', 
                        justifyContent: { xs: 'center', lg: 'flex-start' }, 
                        maxWidth: '460px', 
                        gap:{xs:3,lg:3},
                        flexDirection: { xs: 'column', sm: 'row' },
                    }}>
                        {Rates.map((item)=>
                        
                       
                        <Stack spacing={1} alignItems={{ xs: 'center', lg: 'flex-start' }}>
                            <Rating value={item.rate} precision={0.5} readOnly sx={{ color: '#FFB400' }} />
                            <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '22px' }}>{item.rate} / 5 rating</Typography>
                            <Typography variant="body2" sx={{ opacity: 0.8, fontSize: '18px' }}>{item.label}</Typography>
                        </Stack>

                         )}
                        
                       
                    </Box>
                </Box>

                {/* Right Side: Features List */}
                <Box sx={{ 
                    width: { xs: '100%', lg: '530px' },
                }}>
                    <Stack spacing={5} sx={{ px: { xs: 0, lg: 0 } }}>
                        {features.map((feature, index) => (
                            <Stack 
                                key={index} 
                                direction="row" 
                                spacing={3} 
                                alignItems="flex-start"
                                sx={{ textAlign: 'left' }} 
                            >
                                <Box sx={{
                                    minWidth: 64,
                                    width: 64,
                                    height: 64,
                                    bgcolor: 'white',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                                }}>
                                    {feature.icon}
                                </Box>

                                <Box>
                                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5, color: 'white' }}>
                                        {feature.title}
                                    </Typography>
                                    <Typography sx={{ opacity: 0.8, lineHeight: 1.5, color: 'white', fontSize: '0.95rem' }}>
                                        {feature.description}
                                    </Typography>
                                </Box>
                            </Stack>
                        ))}
                    </Stack>
                </Box>

            </Box>
        </Box>
    );
};

export default GrowthSection;