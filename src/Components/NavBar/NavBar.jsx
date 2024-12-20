import React from "react";
import { Box } from "@mui/material";
import { CgProfile } from "react-icons/cg";

function NavBar() {
  return (
    <Box
      sx={{
        borderBottom: "1px solid #ACACAC80",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "50px", pl: "5px" }}>
        <img
          src="/awedeet_logo.jpg"
          width="100%"
          style={{ borderRadius: "50px" }}
        />
      </Box>

      <Box sx={{ pr: "5px" }}>
        <CgProfile size={30} />
      </Box>
    </Box>
  );
}

export default NavBar;
