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
import { useContext } from "react";
import { WomenShopContext } from "./utils";

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { shortSleeve, longSleeve, hats, setSelect } =
    useContext(WomenShopContext);

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
        <Typography color="text.primary">Women&apos;s</Typography>
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
          Women&rsquo;s
        </Typography>
        <Box>
          <Typography variant="body1">Women&apos;s Apparel</Typography>
          <Typography variant="body1">XX ⎯ Results</Typography>
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
        }}
      >
        <Stack py={2} spacing={3} direction="row">
          <Box display="flex" alignItems="center">
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
              selected={shortSleeve}
              onChange={() => setSelect("Short Sleeve")}
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
              selected={longSleeve}
              onChange={() => setSelect("Long Sleeve")}
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
              selected={hats}
              onChange={() => setSelect("Hats")}
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
        <div>
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
            <Typography variant="body1">Best Sellers</Typography>
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
              onClick={handleClose}
            >
              Test
            </MenuItem>
            <MenuItem
              sx={{
                minWidth: "150px",
              }}
              onClick={handleClose}
            >
              Test
            </MenuItem>
            <MenuItem
              sx={{
                minWidth: "150px",
              }}
              onClick={handleClose}
            >
              Test
            </MenuItem>
          </Menu>
        </div>
      </Box>
      <Divider
        sx={{
          position: "absolute",
          left: 0,
          width: "100%",
        }}
      />
    </Box>
  );
}

export default Header;
