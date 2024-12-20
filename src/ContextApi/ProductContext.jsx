import { createContext, useCallback, useMemo, useState } from "react";
import { ProductData } from "../Components/MockData/_productData";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [filteredData, setFilteredData] = useState(ProductData);
  const [sortOption, setSortOption] = useState("");
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen((prev) => !prev);
  };

  const handleCategoryChange = (category) => {
    setFilteredData(
      category
        ? ProductData.filter((item) => item.category === category)
        : ProductData
    );
  };

  const handleScoreRangeChange = ([min, max]) => {
    setFilteredData(
      ProductData.filter(
        (item) =>
          item.likes + item.shares + item.comments >= min &&
          item.likes + item.shares + item.comments <= max
      )
    );

  };

  // Sorting Handler
  const handleSortChange = useCallback(
    (option) => {
      setSortOption(option);

      const sortedData = [...filteredData];
      if (option === "engagement-asc") {
        sortedData.sort(
          (a, b) =>
            a.likes + a.shares + a.comments - (b.likes + b.shares + b.comments)
        );
      } else if (option === "engagement-desc") {
        sortedData.sort(
          (a, b) =>
            b.likes + b.shares + b.comments - (a.likes + a.shares + a.comments)
        );
      } else if (option === "reach-asc") {
        sortedData.sort(
          (a, b) =>
            (a.followers * (a.likes + a.shares + a.comments)) / 100 -
            (b.followers * (b.likes + b.shares + b.comments)) / 100
        );
      } else if (option === "reach-desc") {
        sortedData.sort(
          (a, b) =>
            (b.followers * (b.likes + b.shares + b.comments)) / 100 -
            (a.followers * (a.likes + a.shares + a.comments)) / 100
        );
      } else if (option === "None") {
        sortedData.sort((a, b) => a - b);
      }
      setFilteredData(sortedData);
    },
    [filteredData]
  );

  const value = useMemo(
    () => ({
      filteredData,
      sortOption,
      open,
      toggleDrawer,
      handleCategoryChange,
      handleScoreRangeChange,
      handleSortChange,
    }),
    [filteredData, handleSortChange, open, sortOption]
  );

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export default ProductContext;
