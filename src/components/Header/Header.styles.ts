import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

export const HeaderBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  padding: "15px 50px",
  backgroundColor: "#222",
  gap: 10,
  "@media (max-width: 340px)": {
    "& img": {
      width: 25,
    },
  },
});

export const HeaderTitle = styled(Link)({
  fontFamily: "sans-serif",
  fontSize: 26,
  color: "rgb(226 232 240)",
  fontWeight: 700,
  cursor: "pointer",
  transition: "all .2s",
  textDecoration: "none",
  "&:hover": {
    color: "#374ebf",
  },
  "@media (max-width: 340px)": {
    fontSize: 18,
  },
});
