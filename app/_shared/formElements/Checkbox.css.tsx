import styled from "styled-components"

export const StyledLabel = styled.label`
  position: relative;
  font-family: "Merriweather";
  font-size: 16px;
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 10px;
`

export const StyledInput = styled.input`
  position: relative;
  width: 15px;
  height: 15px;
  min-width: 15px;
  min-height: 15px;
  border-radius: 3px;
  appearance: none;
  border: 1px solid rgba(60, 60, 67, 0.18);

  &:checked {
    background: ${({ theme }) => theme.btnBg};
    border: none;
  }

  &::before {
    position: absolute;
    top: 7px;
    left: 4px;
    rotate: -50deg;
    content: "";
    width: 9px;
    height: 1.5px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.secondary};
  }

  &::after {
    position: absolute;
    top: 8.5px;
    left: 3.5px;
    rotate: 45deg;
    content: "";
    width: 4px;
    height: 1.5px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.secondary};
  }
`

export const StyledTextError = styled.p`
  position: absolute;
  bottom: -20px;
  font-family: "Lato";
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.error};
`
