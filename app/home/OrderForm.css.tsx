import styled from "styled-components"
import { breakpoints } from "../_shared/styles/theme"

export const StyledContainerForm = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 85px;

  @media ${breakpoints.xs} {
    flex-direction: column;
    align-items: start;
    gap: 50px;
    margin-bottom: 30px;
  }
`

export const StyledBoxCheckboxes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: flex-start;
  margin-bottom: 30px;
`

export const StyledTextPrice = styled.p`
  font-family: "Lato";
  font-size: 24px;
  font-weight: 400;

  @media ${breakpoints.xxs} {
    font-size: 22px;
  }
`

export const StyledTextBolder = styled.span`
  font-size: 28px;
  font-weight: 700;
`

export const StyledBoxFormData = styled.div`
  width: 415px;

  @media ${breakpoints.xs} {
    width: 100%;
  }
`

export const StyledRowButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`

export const StyledTextEmail = styled.p`
  font-family: "Lato";
  font-size: 22px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 60px;
`

export const StyledBoxInputsData = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  gap: 20px;
`

export const StyledBoxButton = styled.div`
  display: flex;
  justify-content: center;
`
export const StyledSubtitleSmall = styled.h3`
  font-family: "Lato";
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 60px;

  @media ${breakpoints.xxs} {
    font-size: 22px;
    margin-bottom: 30px;
  }
`
export const StyledTextPopupData = styled.p`
  text-align: center;
  margin-bottom: 40px;
`
export const StyledTextKey = styled.span`
  font-size: 24px;
  font-weight: 400;
  font-family: "Lato";
`
export const StyledTextValue = styled.span`
  font-size: 32px;
  font-weight: 700;
  font-family: "Lato";
`
