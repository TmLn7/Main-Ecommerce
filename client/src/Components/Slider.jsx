import {Link} from "react-router-dom";
import styled from "styled-components";
import { sliderItems } from "../data";

const Container = styled.div`
  width: 100%;
  height: 85vh;
  display: flex;
  position: relative;
  overflow: hidden;
  @media only screen and (max-width: 400px){
    display:none
  }
`;

// const Arrow = styled.div`
//   width: 50px;
//   height: 50px;
//   background-color: transparent;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: ${(props) => props.direction === "left" && "10px"};
//   right: ${(props) => props.direction === "right" && "10px"};
//   margin: auto;
//   cursor: pointer;
//   opacity: 0.5;
//   z-index: 2;
//   transition: all 0.5s ease;
//   &:hover{
//     background-color: grey;
//   }
// `;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`;

const Image = styled.img`
  height: 90%;
  width: 90%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  border-radius: 5px;
  &:hover{
    background-color: #cce6ff;
    color: black;
  }
`;
const Text = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  color: 
`

const Slider = () => {
  // const [slideIndex, setSlideIndex] = useState(0);
  // const handleClick = (direction) => {
  //   if (direction === "left") {
  //     setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
  //   } else {
  //     setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
  //   }
  // };

  return (
    <>
      <Text>Танд санал болгох</Text>
    <Container>
      {/* <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow> */}
      <Wrapper >
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Link to = {`/products/${item.cat}`}>
                <Button>Дэлгэрэнгүй</Button>
              </Link>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      {/* <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow> */}
    </Container>
    </>
  );
};

export default Slider;
