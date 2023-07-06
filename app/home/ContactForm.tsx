"use client"

import { useRouter } from "next/navigation"
import { FC } from "react"

import { Formik } from "formik"
import * as Yup from "yup"

import Button from "../_shared/formElements/Button"

import {
  StyledForm,
  StyledBox,
  StyledInput,
  StyledTextError,
} from "./ContactForm.css"

const isPhoneNumber = (value: string) => {
  const phoneNumberRegex =
    /^(?:\+\d{1,3}\s?)?(?:\(\d{1,3}\)\s?)?\d{9,}(?:\s?-?\d{1,4})?$/
  return phoneNumberRegex.test(value)
}

const isEmail = (value: string) => {
  const emailRegex = /^\S+@\S+\.\S+$/
  return emailRegex.test(value)
}

const validationSchema = Yup.object().shape({
  contact: Yup.string()
    .test("contact-validation", "Wrong contact", (value) => {
      return isPhoneNumber(value!) || isEmail(value!)
    })
    .required("Contact is required."),
})

const ContactForm: FC = () => {
  const router = useRouter()

  const submitForm = async (values: typeof initialValues) => {
    console.log(values)
  }

  const initialValues = {
    contact: "",
  }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={submitForm}
    >
      {(formik) => {
        const {
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          handleBlur,
        } = formik

        return (
          <>
            <StyledForm onSubmit={handleSubmit} noValidate>
              <StyledBox>
                <StyledInput
                  id="contact"
                  type="text"
                  placeholder="Email or phone"
                  name="contact"
                  value={values.contact}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <Button width={214} height={52} fontSize={16}>
                  ORDER A CONTACT
                </Button>
              </StyledBox>
              <StyledTextError>
                {errors.contact && touched.contact && errors.contact}
              </StyledTextError>
            </StyledForm>
          </>
        )
      }}
    </Formik>
  )
}

export default ContactForm
