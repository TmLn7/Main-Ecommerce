import { ArrowDropDownOutlined } from '@material-ui/icons';
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Container = styled.ul`
    display: flex;
    height: 5vh;
    width: 100%;
    text-align: center;
    justify-content: center;
    padding: 0px 20px;
    list-style: none;
    `
    
    const List = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    margin: 5px;
    color: #fff;
    `;
    
    // const Svg = styled.svg`
    //     opacity: 0;
    //     width: 12px;
    // `
const AllProducts = styled.a`
    cursor: pointer;
    transition: all 0.5s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 5px;
    &:hover{
        border-radius: 5px;
        background-color: #e9c710;
        color: #fff;
    }
`

const Hoses = styled.a`
    cursor: pointer;
    transition: all 0.5s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 5px;
    &:hover{
        border-radius: 5px;
        background-color: #e9c710;
        color: #fff;
    }
`;

const LayFlat = styled.a`
    cursor: pointer;
    transition: all 0.5s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 5px;
    &:hover{
        border-radius: 5px;
        background-color: #e9c710;
        color: #fff;
    }
`

const Suction = styled.a`
    cursor: pointer;
    transition: all 0.5s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 5px;
    &:hover{
        border-radius: 5px;
        background-color: #e9c710;
        color: #fff;
    }
`

const Gun = styled.a`
    cursor: pointer;
    transition: all 0.5s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 5px;
    &:hover{
        border-radius: 5px;
        background-color: #e9c710;
        color: #fff;
    }
`
const AirHose = styled.a`
    cursor: pointer;
    transition: all 0.5s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 5px;
    &:hover{
        border-radius: 5px;
        background-color: #e9c710;
        color: #fff;
    }
`

const AirCoupler = styled.a`
    cursor: pointer;
    transition: all 0.5s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 5px;
    &:hover{
        border-radius: 5px;
        background-color: #e9c710;
        color: #fff;
    }
`
// const Couplers = styled.a`
//     cursor: pointer;
//     transition: all 0.5 ease;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     text-align: center;
//     padding: 5px;
//     &:hover{
//         border: 0.5 solid #e9c710;
//         border-radius: 5px;
//         background-color: #e9c710;
//         color: #fff;
//         transform: scale(1.1)
//     }
// `;

// const Clamps = styled.a`
//     cursor: pointer;
//     transition: all 0.5 ease;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     text-align: center;
//     padding: 5px;
//     &:hover{
//         border: 0.5 solid #e9c710;
//         border-radius: 5px;
//         background-color: #e9c710;
//         color: #fff;
//         transform: scale(1.1)
//     }
// `

// const Sprinkler = styled.a`
//     cursor: pointer;
//     transition: all 0.5 ease;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     text-align: center;
//     padding: 5px;
//     &:hover{
//         border: 0.5 solid #e9c710;
//         border-radius: 5px;
//         background-color: #e9c710;
//         color: #fff;
//         transform: scale(1.1)
//     }
// `


const list = () => {
  return (
    <Container>
        <List>
            <Link style={{textDecoration: 'none', color: 'black'}} to="/products">
            <AllProducts>Бүтээгдэхүүнүүд<ArrowDropDownOutlined/></AllProducts>
            </Link>
        </List>
        <List>
            <Link style={{textDecoration: 'none', color: 'black'}} to="/products/Garden">
                <Hoses>Усалгааны шланг<ArrowDropDownOutlined/></Hoses>
            </Link>
        </List>
        <List>
            <Link style={{textDecoration: 'none', color: 'black'}} to="/products/Gun">
                <Gun>Усалгааны хошуу<ArrowDropDownOutlined/></Gun>
            </Link>
        </List>
        <List>
            <Link style={{textDecoration: 'none', color: 'black'}} to="/products/Suction">
                <Suction>Соролтын шланг<ArrowDropDownOutlined/></Suction>
            </Link>
        </List>
        <List>
            <Link style={{textDecoration: 'none', color: 'black'}} to="/products/Layflat">
                <LayFlat>Галын шланг<ArrowDropDownOutlined/></LayFlat>
            </Link>
        </List>
        <List>
            <Link style={{textDecoration: 'none', color: 'black'}} to="/products/Airhose">
                <AirHose>Хийн шланг<ArrowDropDownOutlined/></AirHose>
            </Link>
        </List>
        <List>
            <Link style={{textDecoration: 'none', color: 'black'}} to="/products/Aircoupler">
                <AirCoupler>Хийн холбогч<ArrowDropDownOutlined/></AirCoupler>
            </Link>
        </List>

    </Container>
       
  )
}

export default list