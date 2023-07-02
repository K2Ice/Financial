import styled from "styled-components"

export const StyledButton = styled.button`
  font-family: "Merriweather";
  font-weight: 400;
  border-radius: 5px;
  background: ${({ theme }) => theme.btnBg};
  color: ${({ theme }) => theme.secondary};
  transition: 0.3s;
  box-shadow: 7px 7px 19px 0px rgba(66, 68, 90, 0.37);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  :hover {
    opacity: 0.9;
  }
`
