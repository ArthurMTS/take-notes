import { styled, Box, Typography } from "@mui/material";

export const FooterBox = styled(Box)({
  backgroundColor: "#222",
  padding: "15px 0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  bottom: 0,
  width: "100%",
  "@media (max-width: 340px)": {
    padding: "10px 0 20px"
  },
});

export const FooterDescription = styled(Typography)({
  fontSize: 12,
  color: "#E7E7E7",
  "@media (max-width: 340px)": {
    fontSize: 8,
  },
});

export const FooterLink = styled("a")({
  color: "#E7E7E7",
  textDecoration: "none",
  transition: "all .2s",
  "&:hover": {
    color: "#374ebf"
  },
});
