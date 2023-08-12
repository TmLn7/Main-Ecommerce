import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
// import Map from "./Map";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
  font-weight: 600;
`;

const SocialContainer = styled.div`
  display: flex;
  @media only screen and (max-width: 400px){
    display:none
  }
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

// const Center = styled.div`
//   flex: 1;
//   padding: 20px;
//   ${mobile({ display: "none" })}
// `;

const Title = styled.h3`
  margin-bottom: 30px;
`;

// const List = styled.ul`
//   margin: 0;
//   padding: 0;
//   list-style: none;
//   display: flex;
//   flex-wrap: wrap;
// `;

// const ListItem = styled.li`
//   width: 50%;
//   margin-bottom: 10px;
//   cursor: pointer;
// `;

const Right = styled.div`
  flex: 1;
  padding: 20px;

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

// const Map = `<div class="mapouter">
// <div class="gmap_canvas">
//   <iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Барилгачин, WWMH+J5H, Улаанбаатар&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
//   </iframe><a href="https://mcpenation.com/">https://mcpenation.com</a>
//   </div><style>.mapouter{position:relative;text-align:right;width:100%;height:400px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:400px;}.gmap_iframe {height:400px!important;}</style>
// </div>`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo></Logo>
        <Desc>
          Солонгос болон Хятад сайн чанарын төрөл бүрийн шланг худалдаалж байна. 
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      {/* <Center>
        <Title>GAZRIIN ZURAG</Title>
        <Map/>
      </Center> */}
      <Right>
        <Title>Холбоо барих</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> 100 айл 
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +976 95751121
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> temka.cosmo@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
