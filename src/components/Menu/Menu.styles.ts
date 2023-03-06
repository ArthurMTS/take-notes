import { styled, Box, Typography } from "@mui/material";

export const MenuBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#222",
  width: "20vw",
  height: "calc(100vh - 55px)",
  position: "absolute",
  left: 0,
  top: 55,
  "@media (max-width: 340px)": {
    fontSize: 8,
  },
});

export const MenuTitle = styled(Typography)({
  fontSize: 18,
  fontWeight: 700,
  color: "#FFF",
  margin: "10px 0 10px 10px",
  "@media (max-width: 440px)": {
    "&": {
      fontSize: 14,
    },
  },
  "@media (max-width: 400px)": {
    "&": {
      fontSize: 12,
    },
  },
});

export const MenuList = styled("ul")({
  margin: "0 10px 10px 20px",
  maxHeight: 346,
  overflowY: "scroll",
  "@media (max-width: 560px)": {
    "&": {
      fontSize: 12,
      marginLeft: 10,
    },
  },
});
