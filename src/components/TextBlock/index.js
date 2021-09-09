// This is TextBlock component, To render text with same format

import styled from "styled-components";

const TextBlock = ({ topic, title, subText, children }) => {
  return <LeftBlock>
    <Topic>
      <Circle /> <span>{topic}</span>
    </Topic>
    <Title>{title}</Title>
    <SubText>{subText}</SubText>
    {children}
  </LeftBlock>
};

export default TextBlock;


const LeftBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  line-height: 1.5;
  color: var(--white);
  position: relative;

  @media only Screen and (max-width: 48em) {
    width: 100%;
    align-items: center;
    text-align: center;
  }
`

const Topic = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--nav);
  color: var(--white);
  font-weight: 700;
  font-size: calc(0.4rem + 0.4vw);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  
  @media only Screen and (max-width: 48em) {
    font-size: calc(0.4rem + 0.8vw);
}
`

const Title = styled.h1`
  font-size: calc(1rem + 1vw);
  line-height: 1.2;
  padding: 0.8rem 0;

  @media only Screen and (max-width: 48em) {
    font-size: calc(1rem + 1.5vw);
  }
`

const SubText = styled.h5`
  font-size: calc(0.5rem + 0.5vw);
  color: var(--nav2);
  @media only Screen and (max-width: 48em) {
    font-size: calc(0.5rem + 1vw);
  }
`


const Circle = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: var(--purple);
  margin-right: 0.5rem;
`