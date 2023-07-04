"use client"

import { useRouter } from "next/navigation"
import { FC, useState } from "react"

import { Formik } from "formik"
import * as Yup from "yup"

import Checkbox from "../_shared/formElements/Checkbox"
import Button from "../_shared/formElements/Button"
import InputText from "../_shared/formElements/InputText"

import {
  StyledBoxButton,
  StyledBoxCheckboxes,
  StyledBoxFormData,
  StyledBoxInputsData,
  StyledRowButtons,
  StyledContainerForm,
  StyledTextPrice,
  StyledTextEmail,
  StyledTextBolder,
  StyledSubtitleSmall,
} from "./OrderForm.css"
import Popup from "../_shared/popups/Popup"
import OrderPopupInvoice from "../_shared/popups/OrderPopupInvoice"

const validationSchema = () =>
  Yup.object().shape({
    email: Yup.string()
      .required("Email is required.")
      .email("Email has wrong format."),
    vatNo: Yup.string().required("Vat No. is required."),
    consent_to_process_personal_data: Yup.boolean()
      .oneOf([true], "Agreement is required.")
      .required("Agreement is required."),
    marketing_agreement: Yup.boolean()
      .oneOf([true], "Agreement is required.")
      .required("Agreement is required."),
    company_background: Yup.boolean(),
    company_market_value: Yup.boolean(),
    liabilities: Yup.boolean(),
    risk_ratio: Yup.boolean(),
    alternatives: Yup.boolean(),
    possible_innovations: Yup.boolean(),
    market_life_expectancy: Yup.boolean(),
    checkAll: Yup.boolean(),
  })

const OrderForm: FC = () => {
  const router = useRouter()

  const [isOpenPopupConfirmEmail, setIsOpenPopupConfirmEmail] =
    useState<boolean>(false)
  const [isOpenPopupInvoice, setIsOpenPopupInvoice] = useState<boolean>(false)
  const [invoice, setInvoice] = useState<any>(null)
  const [isInvoiceAdded, setIsInvoiceAdded] = useState<boolean>(false)
  const [price, setPrice] = useState<number>(122)

  const confirmEmail = async (values: typeof initialValues) => {
    const dataToSend = {
      ...values,
      price: price,
      invoice: isInvoiceAdded ? invoice : null,
    }

    console.log("dataToSend: ", dataToSend)
  }

  const submitForm = async () => {
    setIsOpenPopupConfirmEmail(true)
  }

  const initialValues = {
    email: "",
    vatNo: "",
    consent_to_process_personal_data: false,
    marketing_agreement: false,

    company_background: true,
    company_market_value: true,
    liabilities: true,
    risk_ratio: true,

    alternatives: false,
    possible_innovations: false,
    market_life_expectancy: false,

    checkAll: false,
  }

  return (
    <>
      {isOpenPopupInvoice && (
        <OrderPopupInvoice
          setIsOpenPopupInvoice={setIsOpenPopupInvoice}
          setIsInvoiceAdded={setIsInvoiceAdded}
          invoice={invoice}
          setInvoice={setInvoice}
        />
      )}

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
            setValues,
          } = formik

          const checkAllCheckboxes = (
            event: React.ChangeEvent<HTMLInputElement>
          ) => {
            const { checked } = event.target

            setValues((prevValues) => ({
              ...prevValues,
              company_background: checked,
              company_market_value: checked,
              liabilities: checked,
              risk_ratio: checked,
              alternatives: checked,
              possible_innovations: checked,
              market_life_expectancy: checked,
              checkAll: checked,
            }))
          }

          const handleCheckboxChange = (
            e: React.ChangeEvent<HTMLInputElement>,
            price: number
          ) => {
            setPrice((prev) => (e.target.checked ? prev + price : prev - price))

            setValues((prevValues) => ({
              ...prevValues,
              checkAll: false,
            }))

            handleChange(e)
          }

          return (
            <form onSubmit={handleSubmit} noValidate>
              {isOpenPopupConfirmEmail && (
                <Popup>
                  <StyledSubtitleSmall>
                    Czy adres email jest poprawny?
                  </StyledSubtitleSmall>
                  <StyledTextEmail>{values.email}</StyledTextEmail>
                  <StyledRowButtons>
                    <Button
                      onClick={() => setIsOpenPopupConfirmEmail(false)}
                      width={180}
                      height={52}
                      grayScale={true}
                    >
                      Wróć
                    </Button>
                    <Button
                      onClick={() => confirmEmail(values)}
                      width={180}
                      height={52}
                    >
                      Potwierdzam
                    </Button>
                  </StyledRowButtons>
                </Popup>
              )}

              <StyledContainerForm>
                <div>
                  <StyledSubtitleSmall>
                    What information do you need?
                  </StyledSubtitleSmall>
                  <StyledBoxCheckboxes>
                    <Checkbox
                      id="checkAll"
                      name="checkAll"
                      text="Check all"
                      checked={values.checkAll}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setPrice(e.target.checked ? 165 : 122)
                        checkAllCheckboxes(e)
                      }}
                    />
                    <Checkbox
                      id="company_background"
                      name="company_background"
                      text="Company's background"
                      checked={values.company_background}
                      isMandatory={true}
                    />
                    <Checkbox
                      id="company_market_value"
                      name="company_market_value"
                      text="Company's market value"
                      checked={values.company_market_value}
                      isMandatory={true}
                    />
                    <Checkbox
                      id="liabilities"
                      name="liabilities"
                      text="Liabilities"
                      checked={values.liabilities}
                      isMandatory={true}
                    />
                    <Checkbox
                      id="risk_ratio"
                      name="risk_ratio"
                      text="Risk ratio"
                      checked={values.risk_ratio}
                      isMandatory={true}
                    />
                    <Checkbox
                      id="alternatives"
                      name="alternatives"
                      text="Alternatives"
                      checked={values.alternatives}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleCheckboxChange(e, 11)
                      }
                    />
                    <Checkbox
                      id="possible_innovations"
                      name="possible_innovations"
                      text="Possible innovations"
                      checked={values.possible_innovations}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleCheckboxChange(e, 11)
                      }
                    />

                    <Checkbox
                      id="market_life_expectancy"
                      name="market_life_expectancy"
                      text="Market life expectancy"
                      checked={values.market_life_expectancy}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleCheckboxChange(e, 11)
                      }
                    />
                  </StyledBoxCheckboxes>

                  <StyledTextPrice>
                    Total: <StyledTextBolder>$ {price}</StyledTextBolder> (vat
                    included)
                  </StyledTextPrice>
                </div>
                <StyledBoxFormData>
                  <StyledBoxInputsData>
                    <InputText
                      id="email"
                      name="email"
                      error={errors.email && touched.email && errors.email}
                      label="Email:"
                      placeholder="john.smith@gmail.com"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <InputText
                      id="vatNo"
                      name="vatNo"
                      label="Company to check VAT No."
                      placeholder="1234567890"
                      value={values.vatNo}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.vatNo && touched.vatNo && errors.vatNo}
                    />
                  </StyledBoxInputsData>
                  <StyledBoxCheckboxes>
                    <Checkbox
                      id="consent_to_process_personal_data"
                      name="consent_to_process_personal_data"
                      text="I agree to process personal data"
                      checked={values.consent_to_process_personal_data}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.consent_to_process_personal_data &&
                        errors.consent_to_process_personal_data
                      }
                    />
                    <Checkbox
                      id="marketing_agreement"
                      name="marketing_agreement"
                      text="I agree to the processing of my data for marketing purposes"
                      checked={values.marketing_agreement}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.marketing_agreement &&
                        errors.marketing_agreement
                      }
                    />
                    <Checkbox
                      id="invoice"
                      name="invoice"
                      text="I want an invoice"
                      checked={isInvoiceAdded}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setIsOpenPopupInvoice(true)
                          setIsInvoiceAdded(true)
                        } else {
                          setIsInvoiceAdded(false)
                        }
                      }}
                    />
                  </StyledBoxCheckboxes>
                </StyledBoxFormData>
              </StyledContainerForm>
              <StyledBoxButton>
                <Button onSubmit={submitForm} width={350}>
                  Order report
                </Button>
              </StyledBoxButton>
            </form>
          )
        }}
      </Formik>
    </>
  )
}

export default OrderForm
