import styled from "styled-components"
import { themeGet } from "styled-system"

export const IntroWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.4);
`

export const IntroContentWrapper = styled.div`
  width: 740px;
  max-width: 100%;
  margin: 0 auto;

  text-align: center;
  position: relative;
`

export const IntroImage = styled.div`
  width: 270px;
  height: 270px;
  padding: 30px;
  border-radius: 50%;
  margin: 0 auto;
  border: 1px solid ${themeGet("colors.lightBorderColor", "#ededed")};
  margin-bottom: 30px;
  @media (max-width: 990px) {
    width: 220px;
    height: 220px;
    padding: 25px;
    margin-bottom: 25px;
  }
  @media (max-width: 990px) {
    width: 180px;
    height: 180px;
    padding: 20px;
    margin-bottom: 20px;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 50%;
  }
`

export const IntroTitle = styled.h1`
  font-size: 30px;
  font-weight: 700;
  font-family: ${themeGet("fontFamily.0", "'Fira Sans',sans-serif")};
  color: white;
  text-align: center;
  margin-bottom: 30px;
  @media (max-width: 990px) {
    font-size: 26px;
    margin-bottom: 15px;
    margin-bottom: 30px;
  }
  @media (max-width: 575px) {
    font-size: 22px;
    margin-bottom: 20px;
  }
`

export const Desciption = styled.p`
  color: black;
  font-size: ${themeGet("fontSizes.3", "15")}px;
  line-height: ${themeGet("lineHeights.text", "2")};
  text-align: center;
  margin-bottom: 50px;
  @media (max-width: 767px) {
    margin-bottom: 30px;
  }
`

export const BgText = styled.div`
  font-size: 400px;
  font-weight: 700;
  line-height: 1;
  color: black;
  opacity: 0.02;
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  text-align: center;
  pointer-events: none;
  transform: translateY(-50%);
  @media (max-width: 1500px) {
    font-size: 350px;
  }
  @media (max-width: 1199px) {
    font-size: 270px;
  }
  @media (max-width: 990px) {
    font-size: 200px;
  }
  @media (max-width: 767px) {
    display: none;
  }
`
