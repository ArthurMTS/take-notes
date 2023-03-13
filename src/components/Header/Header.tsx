import React from "react";

import { Div, HeaderBox, HeaderTitle } from "./Header.styles";
import { History } from "@/components/History";
import FeatherIcon from "@/assets/icons/feather.svg";

export const Header: React.FC = () => (
  <HeaderBox>
    <Div>
      <img src={FeatherIcon} alt="Feather Icon" />
      <HeaderTitle to="/">Take Notes</HeaderTitle>
    </Div>
    <History />
  </HeaderBox>
);
