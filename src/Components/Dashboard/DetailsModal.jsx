import { Box, Modal } from "@mui/material";
import React from "react";
import ProductCards from "./ProductCards";

function DetailsModal({ modalOpen, handleClose, selectedItem }) {
  return (
    <Modal open={modalOpen} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "transparent",
          boxShadow: 24,
          p: 4,
          borderRadius: "10px",
        }}
      >
        <ProductCards selectedItem={selectedItem}/>
      </Box>
    </Modal>
  );
}

export default DetailsModal;
