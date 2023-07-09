import React, { FC } from "react"

import {
  StyledFooter,
  StyledContainer,
  StyledCol,
  StyledLink,
  StyledTextBlue,
  StyledTextCopyrights,
} from "./Footer.css"

const Footer: FC = () => {
  return (
    <StyledFooter>
      <StyledContainer>
        <StyledCol>
          <StyledTextBlue>Financia</StyledTextBlue>
          <StyledTextBlue>VAT No. 1234567890</StyledTextBlue>
          <StyledTextBlue>Sunset Street 42</StyledTextBlue>
          <StyledTextBlue>44320 New York</StyledTextBlue>
        </StyledCol>
        <StyledCol>
          <StyledLink href="mailto:contact@financialservice.com">
            contact@financialservice.com
          </StyledLink>
          <StyledLink href="tel:+999000999">tel. 999000999</StyledLink>
        </StyledCol>
        <StyledCol>
          <StyledLink href="/terms-of-service">Terms of service</StyledLink>
          <StyledLink href="/privacypolicy">Privacy policy</StyledLink>
          <StyledLink href="/complaint">Make a Complaint</StyledLink>
        </StyledCol>
      </StyledContainer>
      <StyledTextCopyrights>
        Author: <a href="https://github.com/K2Ice">Konrad Korzeniewski</a>
      </StyledTextCopyrights>
    </StyledFooter>
  )
}

export default Footer
