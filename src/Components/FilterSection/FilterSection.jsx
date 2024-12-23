import React, { useContext, useEffect, useState } from "react";
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

  // custom debounce hook
  function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    }, [value, delay]);

    return debouncedValue;
  }

  const debouncedRange = useDebounce(scoreRange, 300);
  
  useEffect(() => {
    handleScoreRangeChange(debouncedRange);
  }, [debouncedRange]);

  const handleRangeChange = (event, newRange) => {
    setScoreRange(newRange);
  };

  return (
    <Box
      sx={{ borderRight: { md: "1px solid #ACACAC80" }, p: 2, height: "100%" }}
    >
      {/* Category Filter */}
      <Typography gutterBottom>Filter by category</Typography>
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

      {/* Sort by reach and engagement */}

      <Typography gutterBottom sx={{ mb: 2, mt: 5 }}>
        Sort by reach and engagement
      </Typography>
      <FormControl fullWidth>
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
