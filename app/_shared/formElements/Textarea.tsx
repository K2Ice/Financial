import { FC, ChangeEvent, FocusEvent } from "react"

import {
  StyledBox,
  StyledBoxLabel,
  StyledLabel,
  StyledTextError,
  StyledTextarea,
} from "./Textarea.css"

interface TextareaProps {
  id: string
  name: string
  error: string | boolean | undefined
  label: string
  placeholder?: string
  value: string
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  onBlur: (e: FocusEvent<HTMLTextAreaElement>) => void
  marginBottom?: number
}

const Textarea: FC<TextareaProps> = ({
  id,
  name,
  error,
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  marginBottom = 0,
}) => {
  return (
    <StyledBox style={{ marginBottom: marginBottom + "px" }}>
      <StyledBoxLabel>
        <StyledLabel htmlFor={id}>{label}</StyledLabel>
        <StyledTextError>{error}</StyledTextError>
      </StyledBoxLabel>
      <StyledTextarea
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      ></StyledTextarea>
    </StyledBox>
  )
}

export default Textarea
