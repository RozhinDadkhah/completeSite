// This is SvgBlock component, It will render svgs like in the services section.

import styled from "styled-components";



const SvgBlock = ({ svg }) => {

  const SvgIcon = require(`../../assets/${svg}`).default;

  return <RightBlock>
    <img src={SvgIcon} alt='Services' />
  </RightBlock>;
};

export default SvgBlock;


const RightBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;

  img {
    width: 100%;
    height: 40%;
  }

  @media only Screen and (max-width: 48em) {
    display: none;
  }
`