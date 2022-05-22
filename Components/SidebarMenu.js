import React from "react";
import Accordion from "@mui/material/Accordion";
import Drawer from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { useContext } from "react";
import { ShopContext } from "./Utility";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect } from "react";

import Close from "@mui/icons-material/Close";
import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import Twitter from "@mui/icons-material/Twitter";
import YouTube from "@mui/icons-material/YouTube";
import Image from "next/image";
import { Input } from "@mui/material";
function SidebarMenu() {
  const { closeMenuSidebar, sidebarMenu } = useContext(ShopContext);
  const maxWidth600 = useMediaQuery("(max-width:900px)");

  useEffect(() => {
    if (!maxWidth600) {
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
          pt: 2,
          pb: 6,
          height: "100%",
        }}
        justifyContent="space-between"
      >
        <Stack>
          <Stack direction="row">
            <IconButton
              sx={{
                ml: "-12px",
              }}
              onClick={closeMenuSidebar}
            >
              <Close />
            </IconButton>
          </Stack>
          <Stack
            direction="row"
            sx={{
              mt: 6,
              mb: 5,
            }}
            justifyContent="space-between"
          >
            <Typography
              variant="h5"
              sx={{
                fontFamily: "Times New Roman, sans-serif",
                fontWeight: "bold",
                color: "#000",
                lineHeight: 1.3,
              }}
            >
              MENU
            </Typography>
            <Input
              disableUnderline
              sx={{
                border: "1px solid #000",
                borderRadius: "2px",
                height: "30px",
                pl: 1,
                pr: 2,
              }}
              placeholder="Search..."
            ></Input>
          </Stack>
          <Accordion
            disableGutters
            sx={{
              boxShadow: "none",
              "&:before": {
                display: "none",
              },
              borderBottom: "1px solid",
              borderColor: "divider",
              borderRadius: "0!important",
            }}
          >
            <AccordionSummary
              sx={{ px: 0 }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="men-content"
              id="men-header"
            >
              <Typography variant="h6" fontWeight="bold">
                Men
              </Typography>
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
              borderBottom: "1px solid",
              borderColor: "divider",
              borderRadius: "0!important",
            }}
          >
            <AccordionSummary
              sx={{ px: 0 }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="women-content"
              id="women-header"
            >
              <Typography variant="h6" fontWeight="bold">
                Women
              </Typography>
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
              borderBottom: "1px solid",
              borderColor: "divider",
              borderRadius: "0!important",
            }}
          >
            <AccordionSummary
              sx={{ px: 0 }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="accessories-content"
              id="accessories-header"
            >
              <Typography variant="h6" fontWeight="bold">
                Accessories
              </Typography>
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
        <Stack alignItems="center">
          <Box
            sx={{
              width: "40%",
              height: 80,
              position: "relative",
            }}
          >
            <Image
              layout="fill"
              src="/images/weedoologo.svg"
              alt="Footer Logo Sidebar"
              objectFit="contain"
            ></Image>
          </Box>
          <Stack
            direction="row"
            spacing={2}
            sx={{
              ml: "-4px",
              mt: 2,
              justifyContent: { xs: "center", sm: "flex-start" },
            }}
          >
            <IconButton
              sx={{
                color: "#fff",
                backgroundColor: "#000",
                p: "4px",
              }}
            >
              <YouTube
                sx={{
                  fontSize: "24px",
                }}
              />
            </IconButton>
            <IconButton
              sx={{
                color: "#fff",
                backgroundColor: "#000",
                p: "4px",
              }}
            >
              <Instagram
                sx={{
                  fontSize: "24px",
                }}
              />
            </IconButton>
            <IconButton
              sx={{
                color: "#fff",
                backgroundColor: "#000",
                p: "4px",
              }}
            >
              <Facebook
                sx={{
                  fontSize: "24px",
                }}
              />
            </IconButton>
            <IconButton
              sx={{
                color: "#fff",
                backgroundColor: "#000",
                p: "4px",
              }}
            >
              <Twitter
                sx={{
                  fontSize: "24px",
                }}
              />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
    </Drawer>
  );
}

export default SidebarMenu;
