import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { FC, useEffect, useState } from "react"

import {
  StyledBoxContact,
  StyledBoxLogo,
  StyledHeader,
  StyledNav,
} from "./Header.css"
import MailIcon from "../icons/MailIcon"
import PhoneIcon from "../icons/PhoneIcon"
import Button from "../formElements/Button"

const Header: FC = () => {
  const router = useRouter()
  const [windowWidth, setWindowWidth] = useState<number>(0)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)

    setWindowWidth(window.innerWidth)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <>
      <StyledHeader>
        <StyledNav>
          <StyledBoxLogo>
            <Link href="/">
              <Image
                src="/img/logo.jpg"
                alt="Financia Logo"
                width={100}
                height={80}
              />
            </Link>
          </StyledBoxLogo>
          <StyledBoxContact>
            <Button
              width={windowWidth > 650 ? 273 : 52}
              height={52}
              fontSize={16}
              onClick={() => router.push("mailto:contact@financia.com")}
            >
              <MailIcon />
              {windowWidth > 650 && "contact@financia.com"}
            </Button>
            <Button
              width={windowWidth > 650 ? 185 : 52}
              height={52}
              fontSize={16}
              onClick={() => router.push("tel:+999000999")}
            >
              <PhoneIcon />
              {windowWidth > 650 && "999000999"}
            </Button>
          </StyledBoxContact>
        </StyledNav>
      </StyledHeader>
    </>
  )
}

export default Header
