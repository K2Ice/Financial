import styled from "styled-components"

export const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
`

export const StyledBoxLabel = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`

export const StyledLabel = styled.label`
  font-family: "Merriweather";
  font-size: 16px;
  font-weight: 400;
`

export const StyledInput = styled.input`
  font-family: "Lato";
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.blue};
  padding: 18px;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.blue};

  &::placeholder {
    font-family: "Lato";
    font-size: 18px;
    font-weight: 400;
    line-height: 14px;
    color: rgba(0, 0, 0, 0.45);
  }

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px white inset;
    -webkit-text-fill-color: ${({ theme }) => theme.blue};
    background-color: transparent !important;
  }
`
export const StyledTextError = styled.p`
  font-family: "Lato";
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.error};
`
