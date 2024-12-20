import React, { useContext } from "react";
// import { ProductData } from "../MockData/_productData";
import { Box, Button, Card, Typography } from "@mui/material";
import ProductContext from "../../ContextApi/ProductContext";

function ProductCards({ handleOpen, selectedItem }) {
  const { filteredData } = useContext(ProductContext);
  const FilteredData = filteredData?.filter((item) => item.id === selectedItem);
  const DataToRender = FilteredData?.length > 0 ? FilteredData : filteredData;
  return (
    <>
      {filteredData?.length > 0 ? (
        DataToRender?.map((item, index) => (
          <Card
            sx={{
              width: !selectedItem ? "300px" : "100%",
              height: "300px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              position: "relative",
              border: "2px solid transparent",
              borderImage: "linear-gradient(45deg, #ff6ec4, #7873f5) 1",
              overflow: "hidden",
              "&:hover": {
                scale: !selectedItem && "0.9",
                transition: "all 0.3s ease-in-out",
                borderImage: "linear-gradient(90deg, #000, #fff) 1",
              },
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                color: "blue",
                position: "absolute",
                top: "15px",
                left: "15px",
              }}
            >
              {item.name}
            </Typography>
            <Typography>
              Engagement score : {item.likes + item.shares + item.comments}
            </Typography>
            <Typography>
              Reach:{" "}
              {(item.followers * (item.likes + item.shares + item.comments)) /
                100}
            </Typography>
            <Typography>Category: {item.category}</Typography>
            <Typography>Location: {item.location}</Typography>

            {/* only shows when the modal opens */}
            {selectedItem && (
              <>
                <Typography>Followers: {item.followers}</Typography>
                <Typography>Likes: {item.likes}</Typography>
                <Typography>Shares: {item.shares}</Typography>
              </>
            )}

            {/* only shows on the dashboard */}

            {!selectedItem && (
              <Button
                variant="contained"
                sx={{
                  p: "10px 40px",
                  borderRadius: "20px",
                  bgcolor: "linear-gradient(45deg, #ff6ec4, #7873f5) 1",
                  "&:hover": {
                    bgcolor: "rgba(0, 0, 0, 1)",
                  },
                }}
                onClick={() => handleOpen(item?.id)}
              >
                View
              </Button>
            )}
          </Card>
        ))
      ) : (
        <Box
          sx={{
            width: { xs: "100%", md: "80%", lg: "50%" },
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img src="/empty.avif" alt="empty content" width="100%" />
        </Box>
      )}
    </>
  );
}

export default ProductCards;
