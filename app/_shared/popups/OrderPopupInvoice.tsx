"use client"

import { useRouter } from "next/navigation"
import { FC } from "react"

import { Formik } from "formik"
import * as Yup from "yup"

import {
  StyledRow,
  StyledRowButtons,
  StyledContainer,
  StyledSubtitleSmall,
} from "./OrderPopupInvoice.css"
import Popup from "./Popup"
import InputText from "../formElements/InputText"
import Button from "../formElements/Button"

const validationSchema = () =>
  Yup.object().shape({
    company: Yup.string().required("Company name is required."),
    vat: Yup.string()
      .matches(/^\d{10}$/, "VAT No. must have 10 digits.")
      .required("VAT No. is required."),
    postcode: Yup.string().required("Postcode is required."),
    city: Yup.string().required("City is required."),
    address: Yup.string().required("Address is required."),
  })

interface OrderPopupInvoiceProps {
  setIsOpenPopupInvoice: any
  setIsInvoiceAdded: any
  invoice: {
    company: string
    vat: string
    postcode: string
    city: string
    address: string
  }
  setInvoice: any
}

const OrderPopupInvoice: FC<OrderPopupInvoiceProps> = ({
  setIsOpenPopupInvoice,
  setIsInvoiceAdded,
  invoice,
  setInvoice,
}) => {
  const router = useRouter()

  const submitForm = async (values: any) => {
    setInvoice(values)
    setIsOpenPopupInvoice(false)
  }

  const initialValues = {
    company: Boolean(invoice) ? invoice.company : "",
    vat: Boolean(invoice) ? invoice.vat : "",
    postcode: Boolean(invoice) ? invoice.postcode : "",
    city: Boolean(invoice) ? invoice.city : "",
    address: Boolean(invoice) ? invoice.address : "",
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
            <Popup>
              <StyledSubtitleSmall>
                Give your company&apos;s data
              </StyledSubtitleSmall>
              <StyledContainer>
                <StyledRow>
                  <InputText
                    id="company"
                    name="company"
                    label="Company's name:"
                    placeholder="Financia"
                    value={values.company}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.company && touched.company && errors.company}
                  />
                  <InputText
                    id="vat"
                    name="vat"
                    label="VAT:"
                    placeholder="1234567890"
                    value={values.vat}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.vat && touched.vat && errors.vat}
                  />
                </StyledRow>
                <StyledRow>
                  <InputText
                    id="postcode"
                    name="postcode"
                    label="Postcode:"
                    placeholder="44320"
                    value={values.postcode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={
                      errors.postcode && touched.postcode && errors.postcode
                    }
                  />
                  <InputText
                    id="city"
                    name="city"
                    label="City:"
                    placeholder="New York"
                    value={values.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.city && touched.city && errors.city}
                  />
                </StyledRow>
                <StyledRow>
                  <InputText
                    id="Address"
                    name="address"
                    label="Address:"
                    placeholder="Sunset Street 42"
                    value={values.address}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.address && touched.address && errors.address}
                  />
                </StyledRow>
              </StyledContainer>

              <StyledRowButtons>
                <Button
                  onClick={() => {
                    setIsOpenPopupInvoice(false)
                    setIsInvoiceAdded(false)
                  }}
                  width={180}
                  height={52}
                  grayScale={true}
                >
                  Back
                </Button>
                <Button width={260} height={52}>
                  Save
                </Button>
              </StyledRowButtons>
            </Popup>
          </form>
        )
      }}
    </Formik>
  )
}

export default OrderPopupInvoice
