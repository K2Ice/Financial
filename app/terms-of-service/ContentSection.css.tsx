import styled from "styled-components"

export const StyledSection = styled.section`
  margin: 120px 30px;
`

export const StyledTitle = styled.h2`
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.blue};
  font-family: "Merriweather";
`

export const StyledSubtitle = styled.h3`
  font-size: 22px;
  margin: 10px 0;
  font-style: italic;
  margin-left: 5px;
  font-family: "Merriweather";
`

export const StyledParagraph = styled.p`
  line-height: 1.4;
  margin-left: 10px;
  font-family: "Merriweather";
`
