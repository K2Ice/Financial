import styled from "styled-components"
import { breakpoints, maxWidthContainer } from "../_shared/styles/theme"

export const StyledSection = styled.section`
  max-width: ${maxWidthContainer};
  margin: 120px auto;

  @media ${breakpoints.xl} {
    padding: 70px 0;
    margin: 0 16px;
  }

  @media ${breakpoints.sm} {
    padding: 50px 0;
  }
`

export const StyledBoxHeading = styled.div`
  max-width: 1005px;
  margin: 0 auto 120px;

  @media ${breakpoints.md} {
    max-width: 80%;
  }
  @media ${breakpoints.xs} {
    margin: 0 auto 80px;
  }
`

export const StyledHeading = styled.h3`
  font-family: "Lato";
  font-size: 40px;
  font-weight: 700;
  line-height: 60px;
  text-align: center;
  color: ${({ theme }) => theme.blue};

  @media ${breakpoints.md} {
    font-size: 35px;
  }

  @media ${breakpoints.sm} {
    font-size: 30px;
  }

  @media ${breakpoints.xs} {
    font-size: 25px;
    line-height: 40px;
  }
`

export const StyledRowUp = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 100px;

  @media ${breakpoints.sm} {
    flex-direction: column;
    gap: 70px;
    width: 80%;
    margin: 0 auto 70px;
  }

  @media ${breakpoints.xs} {
    flex-direction: column;
    gap: 70px;
    width: 90%;
    margin: 0 auto;
  }
`

export const StyledRowDown = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
  justify-content: space-between;

  @media ${breakpoints.sm} {
    grid-template-columns: 1fr;
  }

  @media ${breakpoints.xs} {
    gap: 0;
  }
`

export const StyledColTextUp = styled.div`
  align-self: flex-start;

  @media ${breakpoints.sm} {
    align-self: unset;
  }
`
export const StyledColPhotoUp = styled.div`
  width: 50%;

  @media ${breakpoints.sm} {
    width: 100%;
  }
`

export const StyledHeadingListUp = styled.h4`
  font-family: "Lato";
  font-size: 32px;
  font-weight: 700;
  line-height: 48px;
  margin-bottom: 40px;

  @media ${breakpoints.sm} {
    text-align: center;
  }
`

export const StyledListRaport = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 25px;
`

export const StyledLiRaport = styled.li`
  font-family: "Merriweather";
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  display: flex;
  gap: 20px;

  @media ${breakpoints.sm} {
    font-size: 18px;
  }
`

export const StyledNumberLi = styled.span`
  font-family: "Merriweather";
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  align-self: flex-start;
  position: relative;

  @media ${breakpoints.sm} {
    font-size: 18px;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: -2px;
    background-color: ${({ theme }) => theme.blue};
    height: 2px;
    width: 21px;
    rotate: -15deg;
  }
`

export const StyledBoxImgUp = styled.div`
  height: 520px;
  border-radius: 10px;
  overflow: hidden;

  @media ${breakpoints.sm} {
    height: auto;
  }
`

export const StyledBoxTextPhotoUp = styled.div`
  padding: 35px 20px;

  @media ${breakpoints.sm} {
    padding: 20px 0;
  }
`

export const StyledTextPhotoUp = styled.p`
  font-family: "Merriweather";
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: center;

  @media ${breakpoints.sm} {
    font-size: 20px;
  }

  @media ${breakpoints.xs} {
    font-size: 18px;
  }
`
