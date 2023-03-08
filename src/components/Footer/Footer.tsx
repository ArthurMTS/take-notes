import React from "react";
import { FooterBox, FooterDescription, FooterLink } from "./Footer.styles";

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <FooterBox>
      <FooterDescription>
        {year} &copy; -&nbsp;
        <FooterLink href="https://github.com/ArthurMTS" target="_blank">
          ArthurMTS
        </FooterLink>
      </FooterDescription>
    </FooterBox>
  );
};
