import styled from "styled-components"

export const StyledForm = styled.form`
  max-width: 590px;
  margin: 0 auto;
  position: relative;
`

export const StyledBox = styled.div`
  display: flex;
  gap: 20px;
  border: 2px solid ${({ theme }) => theme.blue};
  border-radius: 10px;
  padding: 10px 20px;
  margin-bottom: 10px;
`

export const StyledBoxMessage = styled.div`
  display: flex;
  justify-content: center;
`

export const StyledInput = styled.input`
  min-width: 140px;
  font-family: "Lato";
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.blue};
  flex-grow: 1;
  border: none;

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-family: "Lato";
    font-size: 18px;
    font-weight: 400;
    line-height: 14px;
    color: rgba(0, 0, 0, 0.45);
  }
`
export const StyledTextError = styled.p`
  font-family: "Lato";
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.error};
  position: absolute;
  bottom: -25px;
`

export const StyledTextSuccess = styled.p`
  font-family: "Lato";
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.success};
`
