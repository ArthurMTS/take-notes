import React from "react";
import { useDispatch } from "react-redux";

import {
  Div,
  ItemContent,
  ItemDeleteButton,
  ItemIcon,
  ItemQuantity,
  ItemTitle,
  ItemWrapper,
} from "./MenuItem.styles";
import TrashIcon from "@/assets/icons/trash.svg";
import { removeProject } from "@/store/projectSlicer";

interface MenuItemProps {
  id: number;
  active: boolean;
  icon: string;
  title: string;
  quantity: number;
  canBeDeleted: boolean;
  onClick: () => void;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  id,
  active,
  title,
  icon,
  quantity,
  canBeDeleted,
  onClick,
}) => {
  const dispatch = useDispatch();

  const onDeleteButtonClick = () => {
    if (confirm("Tem certeza que deseja apagar o projeto?"))
      dispatch(removeProject(id));
  };

  return (
    <ItemWrapper>
      <ItemContent className={active ? "active" : ""} onClick={onClick}>
        <Div>
          <ItemIcon src={icon} />
          <ItemTitle>{title}</ItemTitle>
        </Div>
        <ItemQuantity>{quantity}</ItemQuantity>
      </ItemContent>
      {canBeDeleted ?
        <ItemDeleteButton
          src={TrashIcon}
          onClick={onDeleteButtonClick}
        />
        : ""
      }
    </ItemWrapper>
  );
};
