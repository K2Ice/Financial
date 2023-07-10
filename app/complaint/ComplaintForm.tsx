"use client"

import { FC, useState } from "react"

import { Formik } from "formik"
import * as Yup from "yup"

import Button from "../_shared/formElements/Button"
import InputText from "../_shared/formElements/InputText"

import {
  StyledBoxButton,
  StyledRow,
  StyledContainer,
  StyledBox,
  StyledInfoText,
} from "./ComplaintForm.css"
import Textarea from "../_shared/formElements/Textarea"

const validationSchema = () =>
  Yup.object().shape({
    email: Yup.string().required("Email is required.").email("Wrong email."),
    order_id: Yup.string().required("Order id is required."),
    description: Yup.string().required("Description is required."),
  })

const ComplaintForm: FC = () => {
  const [message, setMessage] = useState<string>("")

  const submitForm = (values: typeof initialValues, actions: any) => {
    setMessage("Your complaint has been sent.")
    actions.resetForm({ values: { email: "", order_id: "", description: "" } })
  }

  const initialValues = {
    email: "",
    order_id: "",
    description: "",
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
          <form onSubmit={handleSubmit} noValidate>
            <StyledContainer>
              <StyledRow>
                <InputText
                  id="email"
                  name="email"
                  placeholder="john.smith@gmail.com"
                  label="Email:"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.email && touched.email && errors.email}
                />
                <InputText
                  id="order_id"
                  name="order_id"
                  placeholder="2312_i2ea"
                  label="Order Id:"
                  value={values.order_id}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.order_id && touched.order_id && errors.order_id}
                />
              </StyledRow>
              <Textarea
                id="description"
                name="description"
                placeholder="I complain about.."
                label="Description:"
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
                error={
                  errors.description &&
                  touched.description &&
                  errors.description
                }
                marginBottom={30}
              />
            </StyledContainer>
            <StyledBoxButton>
              <Button onSubmit={submitForm} width={350}>
                Send a complaint
              </Button>
            </StyledBoxButton>

            <StyledBox>
              <StyledInfoText>{message}</StyledInfoText>
            </StyledBox>
          </form>
        )
      }}
    </Formik>
  )
}

export default ComplaintForm
