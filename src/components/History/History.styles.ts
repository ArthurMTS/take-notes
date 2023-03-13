import { Button } from "@mui/material";
import { styled } from "@mui/system";

export const HistoryButton = styled("img")({
  width: 35,
  backgroundColor: "#FFF",
  borderRadius: "50%",
  padding: 5,
  cursor: "pointer",
  transition: "all .2s",
  "&:hover": {
    transform: "scale(1.1)",
  },
});

export const EmptyMessage = styled("p")({
  fontFamily: "sans-serif",
  fontSize: 18,
  color: "#E7E7E7",
  marginTop: 25,
});

export const HistoryBox = styled("ul")({
  backgroundColor: "#222",
  width: "20vw",
  height: "100%",
  padding: 15,
  overflowY: "scroll",
  position: "relative",
  "&:first-child": {
    paddingTop: 40,
  },
  paddingBottom: 40,
});

export const HistoryItem = styled("li")({
  listStyle: "none",
  fontSize: 16,
  fontFamily: "sans-serif",
  marginBottom: 10,
  color: "#E7E7E7",
});

export const HistoryClose = styled("img")({
  position: "fixed",
  right: 10,
  top: 10,
  cursor: "pointer",
  transition: "all .2s",
  "&:hover": {
    transform: "scale(1.1)",
  },
});

export const HistoryClean = styled(Button)({
  borderColor: "#e51d33",
  color: "#e51d33",
  "&:hover": {
    borderColor: "#e51d33",
    color: "#E7E7E7",
    backgroundColor: "#e51d33",
  },
  position: "fixed",
  bottom: 0,
  right: 0,
  width: "20%",
  backgroundColor: "#222",
  zIndex: 10,
});
