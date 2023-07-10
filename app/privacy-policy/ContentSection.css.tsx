import styled from "styled-components"
import { breakpoints } from "../_shared/styles/theme"

export const StyledSection = styled.section`
  margin: 120px 30px;
`

export const StyledTitle = styled.h2`
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.blue};
  font-family: "Merriweather";

  @media ${breakpoints.sm} {
    font-size: 30px;
  }
`
export const StyledSubtitle = styled.h3`
  font-size: 18px;
  margin: 10px 0;
  font-family: "Merriweather";
`

export const StyledParagraph = styled.p`
  line-height: 1.4;
  margin-left: 10px;
  font-family: "Merriweather";
  margin-bottom: 15px;
`
export const StyledTextBold = styled.span`
  font-weight: 600;
`
