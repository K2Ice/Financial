import styled from "styled-components"
import { breakpoints, maxWidthContainer } from "../_shared/styles/theme"

export const StyledSection = styled.section`
  max-width: ${maxWidthContainer};
  margin: 120px auto;

  @media ${breakpoints.md} {
    padding: 70px 0;
    margin: 0 16px;
  }
  @media ${breakpoints.sm} {
    padding: 50px 0;
  }
`

export const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px 20px;

  @media ${breakpoints.sm} {
    grid-template-columns: repeat(2, 40%);
    justify-content: center;
  }

  @media ${breakpoints.xs} {
    grid-template-columns: minmax(300px, 70%);
    justify-content: center;
  }
`

export const StyledCard = styled.div`
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  padding: 10px;
  box-shadow: 0px 0px 12px 0px rgba(66, 68, 90, 0.37);
`

export const StyledBoxImg = styled.div`
  height: 200px;
  margin-bottom: 10px;
  border-radius: 10px;
  overflow: hidden;

  @media ${breakpoints.xl} {
    height: 200px;
  }
`

export const StyledBoxText = styled.div`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledText = styled.p`
  font-family: "Lato";
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.grey100};

  @media ${breakpoints.xxs} {
    font-size: 16px;
  }
`

export const StyledSubtitle = styled.h2`
  font-family: "Lato";
  font-size: 48px;
  font-weight: 700;
  color: ${({ theme }) => theme.blue};
  text-align: center;
  margin-bottom: 70px;

  @media ${breakpoints.sm} {
    margin-bottom: 40px;
  }

  @media ${breakpoints.xxs} {
    font-size: 32px;
    margin-bottom: 40px;
  }
`
