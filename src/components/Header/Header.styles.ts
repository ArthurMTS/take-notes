import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

export const HeaderBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  padding: "15px 50px",
  backgroundColor: "#222",
  gap: 10,
});

export const HeaderTitle = styled(Typography)({
  fontSize: 26,
  color: "rgb(226 232 240)",
  fontWeight: 700,
});
