import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Box, Card, Stack, Typography, Container } from '@mui/material';
import './Styles.css'
import { ExperienceDate } from '../Data/DummyData.js'

const Experience = () => {
    return (
        <Box color="#ffffff" sx={{ mt: { xs: 10, md: 10 } }} id="experience">
            <Container>
                <Box className="sectionTitle">
                    <Typography variant="h4" className='title name' fontWeight={600}>Experience</Typography>
                </Box>
                <Box mt={6}>
                    <Timeline position="alternate">
                        {
                            ExperienceDate.map((data) => {
                                return (
                                    <TimelineItem>
                                        <TimelineSeparator >
                                            <TimelineDot color='secondary' variant='outlined' />
                                            <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent>
                                            <Stack direction='column'>
                                                <Typography variant="h5" fontWeight={600} sx={{fontSize:{xs:'17px'}}}>{data.title}</Typography>
                                                <Typography variant="body2" >{data.duration}</Typography>
                                                <Typography variant="body1" mt={2} sx={{fontSize:{xs:'13px'}}}>{data.desc}</Typography>
                                            </Stack>
                                        </TimelineContent>
                                    </TimelineItem>
                                )
                            })
                        }
                    </Timeline>
                </Box>
            </Container>
        </Box>
    )
}

export default Experience