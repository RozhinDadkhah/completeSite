// This is Services component
import Fade from 'react-reveal/Fade';
import styled from "styled-components";
import SvgBlock from "../../components/SvgBlock";
import TextBlock from "../../components/TextBlock";

const Services = () => {
  return <ServicesSection id="services">
    <Background>
      <Title>What We do</Title>
      <Line />
      <Triangle />
    </Background>

    <Content>
      <Fade left>
        <TextBlock
          topic="Design"
          title="We build award winning Designs"
          subText="We help clients to build great design to attract more customers"
        >
        </TextBlock>
      </Fade>
      
      <Fade right>
        <SvgBlock svg="Design.svg" />
      </Fade>
    </Content>

  </ServicesSection>;
};

export default Services;


const ServicesSection = styled.div`
  width: 100vw;
  color: white;
  background-color: var(--black);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 20rem;
`
const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 85vh;
  z-index: 10;
  background-size: auto 100vh;
  background-repeat: no-repeat;
`

const Title = styled.h1`
 color: var(--white);
  display: inline-block;
  font-size: 2rem;
  margin-top: 4rem;
  margin-top: 1rem;
  position: relative;
  
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    /* or 100px */
    border-bottom: 2px solid var(--pink);
  }
`
const Line = styled.span`
  border-left: 4px solid var(--background);
  height: 15rem;
  margin-top: 2rem;
  border-radius: 20px 20px 0 0;
`
const Triangle = styled.span`
  width: 0;
  height: 0;
  border-left: 1.2rem solid transparent;
  border-right: 1.2rem solid transparent;
  border-top: 2rem solid var(--background);
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10rem 10rem;
  position: relative;

  @media only Screen and (max-width: 64em) {
    margin: 10rem calc(4rem + 5vw);
  }

  @media only Screen and (max-width: 48em) {
    display: block;
    &:last-child {
      margin-bottom: 2rem;
    }
  }

  @media only Screen and (max-width: 40em) {
    margin: 10rem calc(2rem + 3vw);
    &:last-child {
      margin-bottom: 1rem;
    }
  }
`
