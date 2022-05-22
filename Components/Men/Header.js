import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Check from "@mui/icons-material/Check";
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Divider from "@mui/material/Divider";
import Menu from "@mui/material/Menu";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import ToggleButton from "@mui/material/ToggleButton";
import React from "react";
import { useState } from "react";

function Header({ total, SortBy, SetSelect, toggles }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [filt, setfilt] = useState("Best Selling");
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (ev) => {
    setfilt(ev);
    setAnchorEl(null);
  };

  return (
    <Box>
      <Breadcrumbs aria-label="breadcrumb">
        <Typography underline="hover" color="inherit" href="/">
          Home
        </Typography>
        <Typography
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Products
        </Typography>
        <Typography color="text.primary">Men&apos;s</Typography>
      </Breadcrumbs>
      <Box
        mb={3}
        mt={2}
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontFamily: "Times New Roman, sans-serif",
            fontWeight: "bold",
            color: "#000",
            lineHeight: 1.3,
          }}
        >
          Men&rsquo;s
        </Typography>
        <Box>
          <Typography variant="body1">Men&apos;s Apparel</Typography>
          <Typography variant="body1">{total} ⎯ Results</Typography>
        </Box>
      </Box>
      <Divider
        sx={{
          position: "absolute",
          left: 0,
          width: "100%",
        }}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        {toggles && (
          <>
            <Stack py={2} direction={{ xs: "column-reverse", md: "row" }}>
              <Stack
                direction="row"
                spacing={{ sm: 0, md: 3 }}
                maxWidth={{
                  xs: "max-content",
                  sm: "400px",
                  md: "max-content",
                }}
                sx={{
                  flexWrap: "wrap",
                }}
              >
                <Box display="flex" alignItems="center" mr={2}>
                  <Typography
                    variant="body1"
                    component="label"
                    htmlFor="short-sleeves-tees"
                    sx={{
                      mr: 1,
                      cursor: "pointer",
                    }}
                  >
                    Short Sleeves Tees
                  </Typography>
                  <ToggleButton
                    sx={{
                      p: "4px",
                      borderRadius: "7px",
                      backgroundColor: "transparent",
                    }}
                    id="short-sleeves-tees"
                    value="check_short"
                    selected={toggles.shortSleeve}
                    onChange={() => SetSelect("Short Sleeve")}
                  >
                    <Check
                      sx={{
                        width: "0.7em",
                        height: "0.7em",
                        fontSize: "14px",
                      }}
                    />
                  </ToggleButton>
                </Box>
                <Box display="flex" alignItems="center" mr={2}>
                  <Typography
                    variant="body1"
                    component="label"
                    htmlFor="long-sleeves-tees"
                    sx={{
                      mr: 1,
                      cursor: "pointer",
                    }}
                  >
                    Long Sleeves Tees
                  </Typography>
                  <ToggleButton
                    sx={{
                      p: "4px",
                      borderRadius: "7px",
                      backgroundColor: "transparent",
                    }}
                    id="long-sleeves-tees"
                    value="check_long"
                    selected={toggles.longSleeve}
                    onChange={() => SetSelect("Long Sleeve")}
                  >
                    <Check
                      sx={{
                        width: "0.7em",
                        height: "0.7em",
                        fontSize: "14px",
                      }}
                    />
                  </ToggleButton>
                </Box>
                <Box display="flex" alignItems="center">
                  <Typography
                    variant="body1"
                    component="label"
                    htmlFor="hats"
                    sx={{
                      mr: 1,
                      cursor: "pointer",
                    }}
                  >
                    Hats
                  </Typography>
                  <ToggleButton
                    sx={{
                      p: "4px",
                      borderRadius: "7px",
                      backgroundColor: "transparent",
                    }}
                    id="hats"
                    value="check_hats"
                    selected={toggles.hats}
                    onChange={() => SetSelect("Hats")}
                  >
                    <Check
                      sx={{
                        width: "0.7em",
                        height: "0.7em",
                        fontSize: "14px",
                      }}
                    />
                  </ToggleButton>
                </Box>
              </Stack>
              <Divider
                sx={{
                  position: "absolute",
                  left: "0",
                  zIndex: "10",
                  width: "100%",
                  mb: "-16px",
                  display: { xs: "block", sm: "none" },
                }}
              />
            </Stack>
          </>
        )}
        <Box
          sx={{
            ml: "auto",
            my: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
            id="filters"
            aria-controls={open ? "filters" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <Typography variant="body1">{filt}</Typography>
            <KeyboardArrowDown
              sx={{
                transition: "0.3s ease",
                transform: open ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </Box>
          <Menu
            id="filters"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "filters",
            }}
          >
            <MenuItem
              sx={{
                minWidth: "150px",
              }}
              onClick={(ev) => {
                SortBy("BEST_SELLING");
                handleClose("Best Selling");
              }}
            >
              Best Selling
            </MenuItem>
            <MenuItem
              sx={{
                minWidth: "150px",
              }}
              onClick={(ev) => {
                SortBy("TITLE");
                handleClose("Alphabetically, A-Z");
              }}
            >
              Alphabetically, A-Z
            </MenuItem>
            <MenuItem
              sx={{
                minWidth: "150px",
              }}
              onClick={() => {
                SortBy("TITLE", true);

                handleClose("Alphabetically, Z-A");
              }}
            >
              Alphabetically, Z-A
            </MenuItem>
            <MenuItem
              sx={{
                minWidth: "150px",
              }}
              onClick={() => {
                SortBy("PRICE", true);
                handleClose("Price, High to Low");
              }}
            >
              Price, High to Low
            </MenuItem>
            <MenuItem
              sx={{
                minWidth: "150px",
              }}
              onClick={() => {
                SortBy("PRICE");
                handleClose("Price, Low to High");
              }}
            >
              Price, Low to High
            </MenuItem>
            <MenuItem
              sx={{
                minWidth: "150px",
              }}
              onClick={() => {
                SortBy("CREATED_AT", true);
                handleClose("Newest");
              }}
            >
              Newest
            </MenuItem>
            <MenuItem
              sx={{
                minWidth: "150px",
              }}
              onClick={() => {
                SortBy("CREATED_AT");
                handleClose("Oldest");
              }}
            >
              Oldest
            </MenuItem>
          </Menu>
        </Box>
      </Box>
      <Divider
        sx={{
          position: "absolute",
          left: 0,
          width: "100%",
          display: { xs: "none", sm: "block" },
        }}
      />
    </Box>
  );
}

export default Header;
