import { FC, useEffect } from "react";
import { StyledBackdrop, StyledPopup } from "./Popup.css";

interface PopupProps {
  children: React.ReactNode | React.ReactNode[];
  position?: "top" | "center" | "bottom";
}

const Popup: FC<PopupProps> = ({ children, position }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  return (
    <StyledBackdrop position={position}>
      <StyledPopup>{children}</StyledPopup>
    </StyledBackdrop>
  );
};

export default Popup;
