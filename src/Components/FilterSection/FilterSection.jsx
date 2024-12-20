import React, { useContext, useState } from "react";
import {
  Box,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  Typography,
} from "@mui/material";
import ProductContext from "../../ContextApi/ProductContext";

function FilterSection({ categories }) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [scoreRange, setScoreRange] = useState([0, 5000]);

  const {
    handleCategoryChange,
    sortOption,
    handleSortChange,
    handleScoreRangeChange,
  } = useContext(ProductContext);

  const handleCategoriChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    handleCategoryChange(category);
  };

  const handleRangeChange = (event, newRange) => {
    setScoreRange(newRange);
    handleScoreRangeChange(newRange);
  };

  return (
    <Box
      sx={{ borderRight: { md: "1px solid #ACACAC80" }, p: 2, height: "100%",
     }}
    >
      {/* Category Filter */}
      <FormControl fullWidth sx={{ mb: 5 }}>
        <InputLabel>Category</InputLabel>
        <Select
          value={selectedCategory}
          onChange={handleCategoriChange}
          label="Category"
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          {categories?.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Divider />

      {/* Engagement Score Filter */}
      <Box sx={{ mb: 5, mt: 5 }}>
        <Typography gutterBottom>Engagement Score Range</Typography>
        <Slider
          value={scoreRange}
          onChange={handleRangeChange}
          valueLabelDisplay="auto"
          min={0}
          max={5000}
          sx={{ width: "90%", ml: 1 }}
        />
      </Box>

      <Divider />

      <FormControl fullWidth sx={{ mb: 2, mt: 5 }}>
        <InputLabel>Sort By</InputLabel>
        <Select
          value={sortOption}
          onChange={(e) => handleSortChange(e.target.value)}
        >
          <MenuItem value="">None</MenuItem>
          <MenuItem value="engagement-asc">
            Engagement Score (Ascending)
          </MenuItem>
          <MenuItem value="engagement-desc">
            Engagement Score (Descending)
          </MenuItem>
          <MenuItem value="reach-asc">Reach (Ascending)</MenuItem>
          <MenuItem value="reach-desc">Reach (Descending)</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default FilterSection;
