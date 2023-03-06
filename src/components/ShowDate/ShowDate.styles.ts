import { styled } from "@mui/system";

export const TaskDateBox = styled("div")({
  margin: "10px auto 0 auto",
  display: "flex",
  justifyContent: "center",
  gap: 10,
  "& img": {
    cursor: "pointer",
  },
});

export const TaskDate = styled("div")({
  minWidth: 120,
  fontSize: 14,
  display: "flex",
  alignItems: "center",
  gap: 5,
  cursor: "pointer",
  "& div": {
    display: "flex",
    flexDirection: "column",
    "& p": {
      fontSize: 12,
      fontWeight: 600,
      color: "#374ebf",
    },
  },
});
