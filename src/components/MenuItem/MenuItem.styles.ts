import { Typography } from "@mui/material";
import { styled } from "@mui/system";

export const ItemWrapper = styled("li")({
  listStyle: "none",
  padding: 5,
  cursor: "pointer",
  "&:last": {
    marginBottom: 10,
  },
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  transition: "all .2s",
  "&:hover": {
    backgroundColor: "#374ebf",
  },
  "&.active": {
    backgroundColor: "#374ebf",
  },
});

export const Div = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: 10,
});

export const ItemIcon = styled("img")({

});

export const ItemTitle = styled(Typography)({
  fontSize: 18,
  color: "#E7E7E7",
});

export const ItemQuantity = styled(Typography)({
  width: 25,
  height: 25,
  color: "#FFF",
  backgroundColor: "#374ebf",
  padding: 2,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const ItemDeleteButton = styled("img")({

});
