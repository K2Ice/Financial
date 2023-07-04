import { FC } from "react"

import OrderForm from "./OrderForm"

import { StyledSection, StyledSubtitle } from "./OrderSection.css"

const OrderSection: FC = () => {
  return (
    <StyledSection id="orderSection">
      <StyledSubtitle>Order Raport</StyledSubtitle>
      <OrderForm />
    </StyledSection>
  )
}

export default OrderSection
