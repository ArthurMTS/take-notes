import { TextField } from "@mui/material";
import { styled } from "@mui/system";

export const ChangeInput = styled(TextField)({
  width: "100%",
  "& input": {
    color: "#FFF !important",
    padding: 6,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#374ebf",
    },
    "&:hover fieldset": {
      borderColor: "#374ebf",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#374ebf",
    },
  },
});
