import React from "react";
import { Box, Tooltip } from "@mui/material";
import { CgProfile } from "react-icons/cg";

function NavBar() {
  return (
    <Box
      sx={{
        borderBottom: "1px solid #ACACAC80",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        pl:2, pr:2, pt:1, pb:1
      }}
    >
      <Box sx={{ width: "50px", pl: "5px" }}>
        <img
          src="/awedeet_logo.jpg"
          alt="Logo"
          width="100%"
          style={{ borderRadius: "50px" }}
        />
      </Box>

      <Box sx={{ pr: "5px", cursor:'pointer' }}>
        <Tooltip title="Profile Section Coming Soon..." arrow>
          <CgProfile size={30} />
        </Tooltip>
      </Box>
    </Box>
  );
}

export default NavBar;
