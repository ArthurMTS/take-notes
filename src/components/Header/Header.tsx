import React from "react";

import FeatherIcon from "@/assets/icons/feather.svg";
import { HeaderBox, HeaderTitle } from "./Header.styles";

export const Header: React.FC = () => {
  return (
    <HeaderBox>
      <img src={FeatherIcon} alt="Feather Icon" />
      <HeaderTitle to="/">
        Take Notes
      </HeaderTitle>
    </HeaderBox>
  );
};
