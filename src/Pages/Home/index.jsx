import { Stack } from '@mui/system'
import React from 'react'
import {
  Navbar, Header, Detail, About, Footer, Services, Contact, Project, Experience
} from '../../Components'

const index = () => {
  return (
    <Stack direction='column' sx={{gap:{xs:0,md:'150px'}}}>
      <Navbar />
      <Header />
      <Detail />
      <About />
      <Experience />
      <Services />
      <Project />
      <Contact />
      <Footer />
    </Stack>
  )
}

export default index