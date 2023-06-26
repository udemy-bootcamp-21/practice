import React from "react";
import { Box, CircularProgress } from "@mui/material";

const Spinner = () => {
  return (
    <Box sx={{ mt: "5rem", textAlign: "center" }}>
      <CircularProgress size={200} />
    </Box>
  );
};

export default Spinner;
