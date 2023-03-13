import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import { ItemDeleteButton } from "../MenuItem/MenuItem.styles";

export const TaskBox = styled("div")({
  backgroundColor: "#E7E7E7",
  width: 250,
  padding: 10,
  borderRadius: 10,
  boxShadow: "5px 5px 5px #222",
  cursor: "pointer",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  "@media (max-width: 340px)": {
    width: 200,
  },
});

export const TaskTitle = styled(Typography)({
  fontSize: 20,
  textTransform: "capitalize",
});

export const TaskState = styled(Typography)({
  fontSize: 12,
  color: "#374ebf",
  textTransform: "capitalize",
});

export const TaskTagsBox = styled("ul")({
  display: "flex",
  overflowX: "scroll",
  width: 200,
  gap: 5,
});

export const Tag = styled("li")({
  fontSize: 12,
  listStyle: "none",
  cursor: "pointer",
  fontStyle: "italic",
  backgroundColor: "#374ebf",
  color: "#F7F7F7",
  padding: "0 5px",
  borderRadius: 50,
  width: "fit-content",
  textTransform: "capitalize",
});

export const TaskDateBox = styled("div")({
  marginTop: 10,
  display: "flex",
  justifyContent: "center",
  gap: 10,
});

export const TaskDate = styled("div")({
  fontSize: 14,
  display: "flex",
  alignItems: "center",
  gap: 5,
  "& div": {
    display: "flex",
    flexDirection: "column",
    "& p": {
      fontSize: 12,
      fontWeight: 600,
      color: "#374ebf",
    }
  },
});

export const TaskDeleteButton = styled(ItemDeleteButton)({
  position: "absolute",
  right: 10,
  top: 10,
});
