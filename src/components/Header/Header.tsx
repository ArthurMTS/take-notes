import React from "react";

import { HeaderBox, HeaderTitle } from "./Header.styles";
import FeatherIcon from "@/assets/icons/feather.svg";

export const Header: React.FC = () => (
  <HeaderBox>
    <img src={FeatherIcon} alt="Feather Icon" />
    <HeaderTitle to="/">Take Notes</HeaderTitle>
  </HeaderBox>
);
