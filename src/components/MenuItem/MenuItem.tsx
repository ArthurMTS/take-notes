import React from "react";

import {
  Div,
  ItemDeleteButton,
  ItemIcon,
  ItemQuantity,
  ItemTitle,
  ItemWrapper,
} from "./MenuItem.styles";
import TrashIcon from "@/assets/icons/trash.svg";

interface MenuItemProps {
  active: boolean;
  icon: string;
  title: string;
  quantity: number;
  canBeDeleted: boolean;
  onClick: () => void;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  active,
  title,
  icon,
  quantity,
  canBeDeleted,
  onClick,
}) => {
  return (
    <ItemWrapper className={active ? "active" : ""} onClick={onClick}>
      <Div>
        <ItemIcon src={icon} />
        <ItemTitle>{title}</ItemTitle>
      </Div>
      <Div>
        <ItemQuantity>{quantity}</ItemQuantity>
        {canBeDeleted ? <ItemDeleteButton src={TrashIcon} /> : ""}
      </Div>
    </ItemWrapper>
  );
};
