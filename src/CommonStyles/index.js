import styled from "styled-components";
import { Link as RLink } from "react-router-dom";
export const Link = styled(RLink)``;
export const Wrapper = styled.div`
  max-width: 500px;
  height: 100%;
  transform: skewX(20deg);
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 48px;
  padding-right: 16px;
`;
export const Unskew = styled.div`transform: skewX(-20deg);`;
export const Title = styled.h1`
  font-size: 24px;
  line-height: 1.16;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  font-weight: 500;
`;
export const P = styled.p`
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.902);
  line-height: 1.5;
`;
