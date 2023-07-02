import styled from "styled-components"
import { breakpoints, maxWidthContainer } from "../_shared/styles/theme"

export const StyledSection = styled.section`
  max-width: ${maxWidthContainer};
  margin: 120px auto;

  @media ${breakpoints.xl} {
    margin: 70px 16px;
  }

  @media ${breakpoints.sm} {
    margin: 90px 16px 50px 16px;
  }
`

export const StyledSubtitle = styled.h3`
  font-family: "Lato";
  font-size: 48px;
  font-weight: 700;
  color: ${({ theme }) => theme.blue};
  text-align: center;
  margin-bottom: 70px;
`
export const StyledBoxInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;

  @media ${breakpoints.sm} {
    grid-template-columns: 1fr;
  }
`

export const StyledColText = styled.div`
  display: grid;
  gap: 90px 0;

  @media ${breakpoints.md} {
    gap: 0;
  }

  @media ${breakpoints.sm} {
    gap: 40px 0;
    order: 1;
  }
`

export const StyledBoxParameters = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 70px 30px;
  align-self: start;

  &:last-child {
    grid-column: span 2;
  }

  @media ${breakpoints.md} {
    margin-bottom: 30px;
  }

  @media ${breakpoints.xs} {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`

export const StyledBoxParameter = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;

  @media ${breakpoints.md} {
    gap: 15px;
  }

  @media ${breakpoints.xs} {
    gap: 10px;
  }
`

export const StyledBoxImgParameter = styled.div`
  width: 82px;
  min-width: 82px;
  height: 82px;

  @media ${breakpoints.md} {
    scale: 0.9;
  }

  @media ${breakpoints.xs} {
    scale: 0.85;
  }
`

export const StyledTextParameter = styled.p`
  font-family: "Merriweather";
  font-size: 24px;
  font-weight: 400;

  @media ${breakpoints.md} {
    font-size: 20px;
  }
`

export const StyledBoxImg = styled.div`
  height: 100%;
  border-radius: 10px;
  overflow: hidden;

  @media ${breakpoints.sm} {
    height: 350px;
    max-width: unset;
  }

  @media ${breakpoints.xs} {
    height: 250px;
    max-width: unset;
  }
`

export const StyledBoxButton = styled.div`
  @media ${breakpoints.sm} {
    display: flex;
    justify-content: center;
  }
`
