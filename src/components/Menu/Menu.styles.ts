import { styled, Box, Typography } from "@mui/material";

export const MenuBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#222",
  width: "20vw",
  height: "calc(100vh - 118px)",
  position: "absolute",
  left: 0,
  top: 70,
});

export const MenuTitle = styled(Typography)({
  fontSize: 18,
  fontWeight: 700,
  color: "#FFF",
  margin: "10px 10px 0",
});

export const MenuList = styled("ul")({
  margin: "0 10px 10px 20px",
});
