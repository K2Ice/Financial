import { FC, ChangeEvent, FocusEvent } from "react"

import {
  StyledBox,
  StyledBoxLabel,
  StyledLabel,
  StyledInput,
  StyledTextError,
} from "./InputText.css"
interface InputTextProps {
  id: string
  name: string
  error: string | boolean | undefined
  label: string
  placeholder: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onBlur: (e: FocusEvent<HTMLInputElement>) => void
}

const InputText: FC<InputTextProps> = ({
  id,
  name,
  error,
  label,
  placeholder,
  value,
  onChange,
  onBlur,
}) => {
  return (
    <StyledBox>
      <StyledBoxLabel>
        <StyledLabel htmlFor={id}>{label}</StyledLabel>
        <StyledTextError>{error}</StyledTextError>
      </StyledBoxLabel>
      <StyledInput
        id={id}
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </StyledBox>
  )
}

export default InputText
