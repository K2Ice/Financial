import styled from "styled-components"
import { breakpoints, maxWidthContainer } from "../_shared/styles/theme"

export const StyledSection = styled.section`
  max-width: ${maxWidthContainer};
  margin: 120px auto;

  @media ${breakpoints.xl} {
    margin: 70px 16px;
  }

  @media ${breakpoints.sm} {
    margin: 50px 16px;
  }
`

export const StyledBoxStages = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  margin-bottom: 50px;
  position: relative;

  @media ${breakpoints.xl} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${breakpoints.xs} {
    grid-template-columns: 80%;
    justify-content: center;
  }
`

export const StyledBoxStage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 55px;
  padding: 40px 10px 10px 10px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  position: relative;
  background-color: ${({ theme }) => theme.secondary};
  box-shadow: 0px 0px 12px 0px rgba(66, 68, 90, 0.37);
`

export const StyledBoxStageContent = styled.div`
  position: relative;
  z-index: 10;
`

export const StyledBoxImg = styled.div`
  border-radius: 5px;
  height: 150px;
  overflow: hidden;
`

export const StyledBoxImgReportIcon = styled.div`
  border-radius: 5px;
  height: 150px;
  translate: 20px 0;
  scale: 0.8;
`

export const StyledBoxArrowIcon = styled.div`
  position: absolute;

  &:nth-child(1) {
    top: 60px;
    left: 165px;
  }
  &:nth-child(2) {
    top: 170px;
    left: 580px;
    transform: scaleY(-1);
  }
  &:nth-child(3) {
    top: 90px;
    left: 995px;
    transform: scaleY(-1);
  }
  @media ${breakpoints.xl} {
    display: none;
  }
`

export const StyledBoxTextStage = styled.div`
  padding: 10px;
`

export const StyledTextStage = styled.p`
  font-family: "Lato";
  font-size: 20px;
  font-weight: 700;
  text-align: center;

  @media ${breakpoints.xxs} {
    font-size: 16px;
  }
`

export const StyledBoxButton = styled.div`
  display: flex;
  justify-content: center;
`
