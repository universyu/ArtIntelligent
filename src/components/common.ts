"use client";
import { styled, Button } from "@mui/material";
export const NormalLi = styled("li")({
  listStyleType: "none",
  "& a": {
    textDecoration: "none",
  },
});

export const ColorfulButton = styled(Button)({
  padding: "10px 20px",
  background: "linear-gradient(16deg, #a1f8f0, #9261e5)",
  border: "none",
  borderRadius: "20px",
  fontSize: "16px",
  lineHeight: "24px",
  color: "black",
  textAlign: "center",
  textTransform: "none",
});
