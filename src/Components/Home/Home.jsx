import {
  Box,
  Drawer,
  Grid,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useContext } from "react";
import { FaFilter } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";
import ProductContext from "../../ContextApi/ProductContext";
import { ProductData } from "../MockData/_productData";
import FilterSection from "../FilterSection/FilterSection";
import Dashboard from "../Dashboard/Dashboard";
import NavBar from "../NavBar/NavBar";

function Home() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.between("xs", "md"));

  const { toggleDrawer, open } = useContext(ProductContext);

  return (
    <Box>
      <NavBar />

      <Grid container spacing={2}>
        <Grid item sm={3} md={3} lg={3}>
          {!isSmallScreen && (
            <FilterSection
              categories={[
                ...new Set(ProductData.map((item) => item.category)),
              ]}
            />
          )}

          {isSmallScreen && (
            <Box
              sx={{
                pl: 4.5,
                pt: 2,
              }}
            >
              <IconButton color="primary" onClick={toggleDrawer}>
                <FaFilter />
              </IconButton>
            </Box>
          )}

          {isSmallScreen ? (
            <Drawer
              anchor="center"
              open={open}
              onClose={toggleDrawer}
              sx={{
                "& .MuiDrawer-paper": { width: "100%" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ width: "50px", pl: "5px" }}>
                  <img
                    src="/awedeet_logo.jpg"
                    width="100%"
                    style={{ borderRadius: "50px" }}
                  />
                </Box>

                {/* Close Button */}
                <Box sx={{ p: 2, display: "flex", justifyContent: "flex-end" }}>
                  <IconButton onClick={toggleDrawer}>
                    <IoCloseCircleOutline />
                  </IconButton>
                </Box>
              </Box>
              {/* Sidebar Content */}
              <FilterSection
                categories={[
                  ...new Set(ProductData.map((item) => item.category)),
                ]}
              />
            </Drawer>
          ) : null}
        </Grid>

        {/* DashBoard Component called */}

        <Grid item xs={12} sm={12} md={9} lg={9}>
          <Dashboard />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
