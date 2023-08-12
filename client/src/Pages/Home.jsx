import React from 'react'
import Navbar from '../Components/Navbar'
import styled from 'styled-components'
import Footer from "../Components/Footer"
import Slider from '../Components/Slider'
import Products from '../Components/Products'
import Categories from '../Components/Categories'
// import Banner from '../Components/Banner'
import Brands from '../Components/Brands'

const Container = styled.div`
    width: 100%;
`;

const Home = () => {
  return (
      
    <div>
        <Container>
            <Navbar/>
            <Slider/>
            {/* <Banner/> */}
            <Categories/>
            <Brands/>
            <Products/>
            <Footer/>
        </Container>
        
    </div>
  )
}

export default Home