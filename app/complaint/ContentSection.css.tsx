import styled from "styled-components"
import { breakpoints, maxWidthContainer } from "../_shared/styles/theme"

export const StyledContainer = styled.div`
  max-width: ${maxWidthContainer};
  margin: 120px auto;

  @media ${breakpoints.xl} {
    margin: 120px 70px;
  }
  @media ${breakpoints.md} {
    margin: 120px auto;
    width: 80%;
  }
`
export const StyledHeading = styled.h3`
  font-size: 42px;
  font-weight: 700;
  color: ${({ theme }) => theme.blue};
  font-family: "Merriweather";
  text-align: center;
  margin-bottom: 30px;

  @media ${breakpoints.sm} {
    font-size: 32px;
  }
`
