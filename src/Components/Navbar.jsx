import React, { useState } from 'react'
import { Box, Container, Button, Typography, Divider } from '@mui/material'
import './Styles.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { HashLink as Link } from 'react-router-hash-link'
import { BrowserRouter } from 'react-router-dom';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleClick = () => {
        setNav(!nav);
    }

    return (
        <Box sx={{ height: "80px" }} display="flex" alignItems="center" >
            <Container >

                {/* Laptop Navbar */}
                <Box className='PC'>
                    <Box>
                        <Typography variant="h6" fontWeight={600} className="name">MY_Portfolio</Typography>
                    </Box>
                    <BrowserRouter >
                        <Box display='flex' alignContent='center'>
                            <ul className='LaptopuList'>
                                <li><Link to="#/" style={{ color: "#ffffff" }}> Home </Link></li>
                                <li><Link to="#about" style={{ color: "#ffffff" }}> About </Link></li>
                                <li><Link to="#experience" style={{ color: "#ffffff" }}> Experience </Link></li>
                                <li><Link to="#service" style={{ color: "#ffffff" }}> Service </Link></li>
                                <li><Link to="#projects" style={{ color: "#ffffff" }}> Projects </Link></li>
                            </ul>
                            <Link to='#ContactMe'>
                                <Button color='myColor' sx={{ ml: 4, px: 3 }}>Contect Me</Button>
                            </Link>
                        </Box>
                    </BrowserRouter>
                </Box>
                <Divider sx={{ mt: 2 }} color="#9698A9" className='divider' />

                {/* Mobile Navbar */}
                <Box className='mobile'>
                    <Box>
                        <Typography variant="h6" fontWeight={600} className="name">MY_Portfolio</Typography>
                    </Box>
                    <Box>
                        {
                            nav ?
                                <CloseIcon style={{ color: "#ffffff" }} onClick={handleClick} /> :
                                <MenuIcon style={{ color: "#ffffff" }} onClick={handleClick} />
                        }
                    </Box>
                    <BrowserRouter >
                        <Box className={nav ? 'mobileNav' : 'd'} >
                            <ul className='uList'>
                                <li><Link to="#/" style={{ color: "#000000" }} onClick={handleClick}> Home </Link></li>
                                <li><Link to="#about" style={{ color: "#000000" }} onClick={handleClick}> About </Link></li>
                                <li><Link to="#experience" style={{ color: "#000000" }} onClick={handleClick}> Experience </Link></li>
                                <li><Link to="#service" style={{ color: "#000000" }} onClick={handleClick}> Service </Link></li>
                                <li><Link to="#projects" style={{ color: "#000000" }} onClick={handleClick}> Projects </Link></li>
                            </ul>
                            <Link to='#ContactMe'>
                                <Button color='myColor' sx={{ mr: 2 }} onClick={handleClick}>Contect Me</Button>
                            </Link>
                        </Box>
                    </BrowserRouter>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar