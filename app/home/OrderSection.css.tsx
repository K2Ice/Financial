import styled from "styled-components"
import { breakpoints } from "../_shared/styles/theme"

export const StyledSection = styled.section`
  max-width: 1150px;
  margin: 120px auto;

  @media ${breakpoints.md} {
    margin: 70px 16px;
  }

  @media ${breakpoints.sm} {
    margin: 50px 16px;
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
