import { FC, useEffect, useState } from "react"
import { StyledButton } from "./Button.css"

interface ButtonProps {
  children: React.ReactNode | React.ReactNode[]
  width: number
  onClick?: () => void
  onSubmit?: any
  grayScale?: boolean
  height?: number
  fontSize?: number
}

const Button: FC<ButtonProps> = ({
  children,
  width,
  onClick,
  onSubmit,
  grayScale,
  height = 70,
  fontSize = 20,
}) => {
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

  const styles = {
    width: windowWidth < 480 && width > 400 ? "100%" : width + "px",
    height: height + "px",
    fontSize: fontSize + "px",
    filter: grayScale ? "grayscale(90%)" : "grayscale(0%)",
  }

  return onClick ? (
    <StyledButton type="button" style={styles} onClick={onClick}>
      {children}
    </StyledButton>
  ) : (
    <StyledButton type="submit" onSubmit={onSubmit} style={styles}>
      {children}
    </StyledButton>
  )
}

export default Button
