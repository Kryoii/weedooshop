import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Image from "next/image";
import React from "react";

function Features() {
  return (
    <Box
      sx={{
        width: "100%",
        overflow: "auto",
      }}
    >
      <Grid
        container
        columnSpacing={2}
        sx={{
          mb: 12,
          minWidth: "1000px",
        }}
      >
        <Grid item xs={4}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid",
              borderColor: "divider",
              width: "100%",
              height: "100%",
              py: 4,
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: 60,
                height: 60,
                mr: 2,
              }}
            >
              <Image
                src="/images/001-shipping.png"
                layout="fill"
                alt="Shipping"
                objectFit="contain"
              ></Image>
            </Box>
            <Box>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "Times New Roman, sans-serif",
                  fontWeight: "bold",
                  color: "#000",
                }}
              >
                Free Shipping
              </Typography>
              <Typography variant="body1">Capped at $39 per order</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid",
              borderColor: "divider",
              width: "100%",
              height: "100%",
              py: 4,
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: 50,
                height: 50,
                mr: 2,
              }}
            >
              <Image
                src="/images/002-wallet.png"
                layout="fill"
                alt="Secure Payment"
                objectFit="contain"
              ></Image>
            </Box>
            <Box>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "Times New Roman, sans-serif",
                  fontWeight: "bold",
                  color: "#000",
                }}
              >
                Secure Payment
              </Typography>
              <Typography variant="body1">Capped at $39 per order</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid",
              borderColor: "divider",
              width: "100%",
              height: "100%",
              py: 4,
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: 50,
                height: 50,
                mr: 2,
              }}
            >
              <Image
                src="/images/003-exchange.png"
                layout="fill"
                alt="14 Day Returns"
                objectFit="contain"
              ></Image>
            </Box>
            <Box>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "Times New Roman, sans-serif",
                  fontWeight: "bold",
                  color: "#000",
                }}
              >
                14-Day Returns
              </Typography>
              <Typography variant="body1">Capped at $39 per order</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Features;
