import styled from "styled-components"
import { breakpoints } from "../_shared/styles/theme"

export const StyledSection = styled.section`
  max-width: 1160px;
  margin: 0 auto;
  margin: 120px auto;

  @media ${breakpoints.xl} {
    padding: 50px 0;
  }
  @media ${breakpoints.md} {
    margin: 0 20px;
  }
`

export const StyledBoxTextProfessionals = styled.div`
  margin-bottom: 30px;
`

export const StyledTextProfessionals = styled.h5`
  font-family: "Merriweather";
  font-size: 44px;
  font-weight: 700;
  line-height: 36px;
  text-align: center;
  color: rgba(51, 51, 51, 0.8);
`
export const StyledBoxTextInterested = styled.div`
  margin-bottom: 60px;
`

export const StyledTextInterested = styled.p`
  font-family: "Merriweather";
  font-size: 36px;
  font-weight: 700;
  line-height: 60px;
  text-align: center;
  color: ${({ theme }) => theme.blue};

  @media ${breakpoints.md} {
    font-size: 28px;
  }

  @media ${breakpoints.sm} {
    font-size: 25px;
  }

  @media ${breakpoints.xs} {
    font-size: 20px;
    line-height: 40px;
  }
`
