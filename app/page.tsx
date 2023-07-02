"use client"

import { NextPage } from "next"
import HeroSection from "./home/HeroSection"
import ReportSection from "./home/ReportSection"

const HomePage: NextPage = () => {
  return (
    <>
      <HeroSection />
      <ReportSection />
    </>
  )
}
export default HomePage
