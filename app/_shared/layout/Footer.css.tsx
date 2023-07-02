import Link from "next/link"
import styled from "styled-components"
import { breakpoints } from "../styles/theme"

export const StyledFooter = styled.footer`
  margin-top: 32px;
`

export const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  margin-top: 50px;
  margin-bottom: 40px;

  @media ${breakpoints.xs} {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`

export const StyledCol = styled.div`
  display: flex;
  flex-direction: column;
`

export const StyledLink = styled(Link)`
  font-family: "Merriweather";
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.blue};
  margin-bottom: 16px;
`

export const StyledTextBlue = styled.h4`
  font-family: "Merriweather";
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  color: ${({ theme }) => theme.blue};
  margin-bottom: 16px;
`

export const StyledTextCopyrights = styled.h5`
  font-family: "Merriweather";
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  line-height: 24px;
  color: ${({ theme }) => theme.grey100};
  margin-bottom: 6px;
`
