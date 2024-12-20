import { Box, Button, Card, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import DetailsModal from "./DetailsModal";
import ProductCards from "./ProductCards";

function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);


  const handleOpen = (item) => {
    setModalOpen(true);
    setSelectedItem(item);
  };

  const handleClose = () => {
    setModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <Grid
      container
      gap={3}
      sx={{
        p: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: { xs: "center", md: "flex-start" },
      }}
    >
      {/* Product cards component import */}
      <ProductCards handleOpen={handleOpen}/>

      {/* Popup Modal component import */}
      <DetailsModal
        handleClose={handleClose}
        modalOpen={modalOpen}
        selectedItem={selectedItem}
      />
    </Grid>
  );
}

export default Dashboard;
