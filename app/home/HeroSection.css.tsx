import styled from "styled-components"
import { breakpoints } from "../_shared/styles/theme"

export const StyledSection = styled.section`
  margin-top: 100px;
  position: relative;
  height: calc(100vh - 100px);
`

export const StyledBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`

export const StyledBoxContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;

  @media ${breakpoints.xs} {
    margin: 0 8px;
  }
`

export const StyledHeading = styled.h1`
  margin: 0 30px;
  color: ${({ theme }) => theme.secondary};
  font-family: "Lato", sans-serif;
  font-size: 54px;
  font-weight: 800;
  line-height: 65px;
  text-align: center;

  @media ${breakpoints.xs} {
    font-size: 44px;
  }

  @media ${breakpoints.xxs} {
    line-height: 40px;
  }
`

export const StyledBoxText = styled.div`
  max-width: 900px;
  margin: 0 30px;

  @media ${breakpoints.xs} {
    width: 70%;
  }

  @media ${breakpoints.xxs} {
    width: 100%;
  }
`

export const StyledText = styled.p`
  font-family: "Merriweather", sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.secondary};
  line-height: 36px;
  text-align: center;

  @media ${breakpoints.xs} {
    font-size: 18px;
  }
`
