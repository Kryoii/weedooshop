import React from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import Twitter from "@mui/icons-material/Twitter";
import YouTube from "@mui/icons-material/YouTube";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Image from "next/image";
function Footer() {
  return (
    <footer>
      <Divider />
      <Box
        component="nav"
        mb={9}
        mt={5}
        sx={{
          position: "relative",
          overflow: "hidden",
          "&::after": {
            content: "''",
            position: "absolute",
            width: { xs: "100%", sm: "50%" },
            height: "100%",
            background: "url(/images/weedoologo.svg)",
            backgroundRepeat: "no-repeat",
            right: { xs: "30px", sm: "-60px" },
            bottom: { xs: "-70px", sm: "-30px" },
            opacity: 0.03,
            zIndex: "-1",
            transform: { xs: "rotate(90deg)", sm: "rotate(0deg)" },
          },
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            sx={{
              px: { xs: 2, sm: 5 },
            }}
          >
            <Grid
              item
              xs={12}
              sm={4.5}
              md={4}
              sx={{
                textAlign: { xs: "center", sm: "left" },
                pr: 2,
              }}
            >
              <Box
                mb={3}
                sx={{
                  width: "150px",
                  height: "60px",
                  mx: { xs: "auto", sm: 0 },
                  position: "relative",
                }}
              >
                <Image
                  alt="Weedoo Logo"
                  objectFit="contain"
                  objectPosition="top"
                  layout="fill"
                  src="/images/weedoologo.svg"
                ></Image>
              </Box>
              <Typography variant="body1" mb={3} fontStyle="italic">
                WEEDOO GREENBOAT INC. <br /> 8020 Belvedere Rd Ste #1 <br />{" "}
                West Palm Beach, FL. 33411 USA
              </Typography>
              <Stack spacing={1} mb={2}>
                <Typography variant="body1">+1561-204-5765</Typography>
                <Typography variant="body1">844-933 3662</Typography>
                <Typography variant="body1">sales@weedooboats.com</Typography>
              </Stack>
              <Stack
                direction="row"
                spacing={2}
                sx={{
                  ml: "-4px",
                  justifyContent: { xs: "center", sm: "flex-start" },
                }}
              >
                <IconButton
                  aria-label="Youtube Link"
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
                  aria-label="Instagram Link"
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
                  aria-label="Facebook Link"
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
                  aria-label="Twitter Link"
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
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              md={3}
              sx={{
                mt: { xs: 2, sm: 0 },
              }}
            >
              <Box
                sx={{
                  display: { xs: "none", sm: "block" },
                }}
              >
                <Box mb={3} sx={{ height: "60px" }}>
                  <Typography
                    variant="h6"
                    component="h1"
                    sx={{
                      letterSpacing: "2px",
                      fontWeight: "bold",
                    }}
                  >
                    SUPPORT
                  </Typography>
                </Box>
                <Stack spacing={1} mb={2}>
                  <Typography variant="body1">Customer Support</Typography>
                  <Typography variant="body1">Shipping Policy</Typography>
                  <Typography variant="body1">Privacy Policy</Typography>
                  <Typography variant="body1">Terms or Service</Typography>
                  <Typography variant="body1">
                    Return & Exchange Policy
                  </Typography>
                </Stack>
              </Box>
              <Box
                sx={{
                  display: { xs: "block", sm: "none" },
                }}
              >
                <Accordion
                  sx={{
                    boxShadow: "none",
                    "&:before": {
                      display: "none",
                    },
                    borderRadius: "0!important",
                    borderBottom: "1px solid",
                    borderColor: "divider",
                    backgroundColor: "transparent",
                  }}
                >
                  <AccordionSummary
                    sx={{ px: 0 }}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="Support-content"
                    id="Support-header"
                  >
                    <Typography>SUPPORT</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Stack spacing={1} mb={2}>
                      <Typography variant="body1">Customer Support</Typography>
                      <Typography variant="body1">Shipping Policy</Typography>
                      <Typography variant="body1">Privacy Policy</Typography>
                      <Typography variant="body1">Terms or Service</Typography>
                      <Typography variant="body1">
                        Return & Exchange Policy
                      </Typography>
                    </Stack>
                  </AccordionDetails>
                </Accordion>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={3.5}
              md={2.5}
              sx={{
                mt: { xs: 2, sm: 0 },
              }}
            >
              <Box
                sx={{
                  display: { xs: "none", sm: "block" },
                }}
              >
                <Box mb={3} sx={{ height: "60px" }}>
                  <Typography
                    component="h1"
                    variant="h6"
                    sx={{
                      letterSpacing: "2px",
                      fontWeight: "bold",
                    }}
                  >
                    MAIN MENU
                  </Typography>
                </Box>
                <Stack spacing={1} mb={2}>
                  <Typography variant="body1">Shop</Typography>
                  <Typography variant="body1">Inventory</Typography>
                  <Typography variant="body1">Contact Us</Typography>
                </Stack>
              </Box>
              <Box
                sx={{
                  display: { xs: "block", sm: "none" },
                }}
              >
                <Accordion
                  sx={{
                    boxShadow: "none",
                    "&:before": {
                      display: "none",
                    },
                    borderRadius: "0!important",
                    borderBottom: "1px solid",
                    borderColor: "divider",
                    backgroundColor: "transparent",
                  }}
                >
                  <AccordionSummary
                    sx={{ px: 0 }}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="Menu-content"
                    id="Menu-header"
                  >
                    <Typography>MAIN MENU</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Stack spacing={1} mb={2}>
                      <Typography variant="body1">Customer Support</Typography>
                      <Typography variant="body1">Shipping Policy</Typography>
                      <Typography variant="body1">Privacy Policy</Typography>
                      <Typography variant="body1">Terms or Service</Typography>
                      <Typography variant="body1">
                        Return & Exchange Policy
                      </Typography>
                    </Stack>
                  </AccordionDetails>
                </Accordion>
              </Box>
            </Grid>

            {/* <Grid
              item
              xs={12}
              sm={6}
              md={3}
              sx={{
                mt: { xs: 3, md: 0 },
              }}
            >
              <Box mb={3} sx={{ height: { xs: "auto", sm: "60px" } }}>
                <Typography
                  variant="h6"
                  sx={{
                    letterSpacing: "2px",
                    fontWeight: "bold",
                  }}
                >
                  SIGN UP AND SAVE
                </Typography>
              </Box>
              <Stack spacing={1} mb={2}>
                <Typography variant="body1">
                  Subscribe to get special orders, free giveaways, and
                  once-in-a-lifetime deals.
                </Typography>
              </Stack>
            </Grid> */}
          </Grid>
        </Container>
      </Box>
    </footer>
  );
}

export default Footer;
