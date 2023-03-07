import { Typography } from "@mui/material";
import { styled } from "@mui/system";

export const ItemWrapper = styled("li")({
  listStyle: "none",
  cursor: "pointer",
  "&:last": {
    marginBottom: 10,
  },
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 5,
  "@media (max-width: 340px)": {
    gap: 2,
  },
});

export const ItemContent = styled("div")({
  width: "100%",
  padding: 5,
  marginBottom: 5,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  transition: "all .2s",
  borderRadius: 10,
  "&:hover": {
    backgroundColor: "#374ebf",
  },
  "&.active": {
    backgroundColor: "#374ebf",
  },
  "@media (max-width: 340px)": {
    padding: 3,
  },
});

export const Div = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 10,
});

export const ItemIcon = styled("img")({
  "@media (max-width: 775px)": {
    "&": {
      display: "none",
    },
  },
});

export const ItemTitle = styled(Typography)({
  fontSize: 18,
  color: "#E7E7E7",
  "@media (max-width: 915px)": {
    "&": {
      fontSize: 14,
    },
  },
  "@media (max-width: 440px)": {
    "&": {
      fontSize: 12,
    },
  },
  "@media (max-width: 400px)": {
    "&": {
      fontSize: 10,
    },
  },
  "@media (max-width: 340px)": {
    "&": {
      fontSize: 8,
    },
  },
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
  "@media (max-width: 570px)": {
    "&": {
      display: "none",
    },
  },
});

export const ItemDeleteButton = styled("img")({
  "&:hover": {
    animation: "shake 0.5s",
    animationIterationCount: "infinite",
  },
 "@keyframes shake": {
    "0%": { transform: "translate(1px, 1px) rotate(0deg)", },
    "10%": { transform: "translate(-1px, -2px) rotate(-1deg)", },
    "20%": { transform: "translate(-3px, 0px) rotate(1deg)", },
    "30%": { transform: "translate(3px, 2px) rotate(0deg)", },
    "40%": { transform: "translate(1px, -1px) rotate(1deg)", },
    "50%": { transform: "translate(-1px, 2px) rotate(-1deg)", },
    "60%": { transform: "translate(-3px, 1px) rotate(0deg)", },
    "70%": { transform: "translate(3px, 1px) rotate(-1deg)", },
    "80%": { transform: "translate(-1px, -1px) rotate(1deg)", },
    "90%": { transform: "translate(1px, 2px) rotate(0deg)", },
    "100%": { transform: "translate(1px, -2px) rotate(-1deg)", },
  },
  "@media (max-width: 340px)": {
    width: 15,
    height: 15,
    paddingBottom: 2,
  },
});
