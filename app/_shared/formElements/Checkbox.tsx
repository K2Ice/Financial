import { ChangeEvent, FC, FocusEvent } from "react"

import { StyledInput, StyledLabel, StyledTextError } from "./Checkbox.css"

interface CheckboxProps {
  id?: string
  name?: string
  text: string
  checked?: boolean
  error?: string | boolean | undefined
  isMandatory?: boolean
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void
}

const Checkbox: FC<CheckboxProps> = ({
  id,
  name,
  text,
  checked,
  error,
  isMandatory,
  onChange,
  onBlur,
}) => {
  return (
    <>
      <StyledLabel htmlFor={id}>
        {isMandatory ? (
          <StyledInput id={id} type="checkbox" checked={true} readOnly={true} />
        ) : (
          <StyledInput
            id={id}
            type="checkbox"
            name={name}
            checked={checked}
            onChange={onChange}
            onBlur={onBlur}
          />
        )}
        {text}
        {error && <StyledTextError>{error}</StyledTextError>}
      </StyledLabel>
    </>
  )
}

export default Checkbox
