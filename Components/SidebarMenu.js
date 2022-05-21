import React from "react";
import Accordion from "@mui/material/Accordion";
import Drawer from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useContext } from "react";
import { ShopContext } from "./Utility";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect } from "react";
function SidebarMenu() {
  const { closeMenuSidebar, sidebarMenu } = useContext(ShopContext);
  const maxWidth600 = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    if (!maxWidth600 && sidebarMenu) {
      closeMenuSidebar();
    }
  }, [maxWidth600]);

  return (
    <Drawer
      anchor="left"
      open={sidebarMenu}
      onClose={closeMenuSidebar}
      PaperProps={{
        sx: {
          width: { xs: "100%", sm: "60%" },
        },
      }}
    >
      <Stack
        sx={{
          px: 4,
          py: 8,
        }}
      >
        <Accordion
          disableGutters
          sx={{
            boxShadow: "none",
            "&:before": {
              display: "none",
            },
            borderBottom: "none",
          }}
        >
          <AccordionSummary
            sx={{ px: 0 }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="men-content"
            id="men-header"
          >
            <Typography>Men</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          disableGutters
          sx={{
            boxShadow: "none",
            "&:before": {
              display: "none",
            },
            borderBottom: "none",
          }}
        >
          <AccordionSummary
            sx={{ px: 0 }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="women-content"
            id="women-header"
          >
            <Typography>Women</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          disableGutters
          sx={{
            boxShadow: "none",
            "&:before": {
              display: "none",
            },
            borderBottom: "none",
          }}
        >
          <AccordionSummary
            sx={{ px: 0 }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="accessories-content"
            id="accessories-header"
          >
            <Typography>Accessories</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Stack>
    </Drawer>
  );
}

export default SidebarMenu;
