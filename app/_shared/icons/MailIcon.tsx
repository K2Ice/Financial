import { FC } from "react";

const MailIcon: FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={16} fill="none">
    <path
      fill="#fff"
      d="M1 1V0a1 1 0 0 0-1 1h1Zm18 0h1a1 1 0 0 0-1-1v1ZM1 2h18V0H1v2Zm17-1v12h2V1h-2Zm-1 13H3v2h14v-2ZM2 13V1H0v12h2Zm1 1a1 1 0 0 1-1-1H0a3 3 0 0 0 3 3v-2Zm15-1a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2Z"
    />
    <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 9 9 9-9" />
  </svg>
);
export default MailIcon;
