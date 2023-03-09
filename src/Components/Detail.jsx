import React from 'react'
import {
    Box, Container, Divider, Grid, Typography
} from '@mui/material'
import { DetailData } from '../Data/DummyData'

const Detail = () => {
    return (
        <Box sx={{mt:{xs:4,md:2}}}>
            <Container>
                <Divider
                    variant="fullWidth"
                    orientation="horizontal"
                    color="#ffffff"
                />
                <Box my={2}>
                    <Grid container spacing={4}>
                        {
                            DetailData.map((data) => {
                                return (
                                    <Grid item xs={12} sm={4} md={4} textAlign='center'>
                                        <Box color='#ffffff'>
                                            <Typography variant="h6" fontWeight={600}>{data.name}</Typography>
                                            <Typography variant="h6">{data.desc}</Typography>
                                        </Box>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Box>
                <Divider
                    variant="fullWidth"
                    orientation="horizontal"
                    color="#ffffff"
                />
            </Container>
        </Box>
    )
}

export default Detail