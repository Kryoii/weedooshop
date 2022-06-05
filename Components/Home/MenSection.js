import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import ImageListItem from "@mui/material/ImageListItem";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Client from "shopify-buy";
function MenSection(props) {
  const [items, setitems] = useState([]);

  useEffect(async () => {
    const client = Client.buildClient({
      domain: "nexttestapp.myshopify.com",
      storefrontAccessToken: "b79f30d31076cf3e3c77255d8ba8801c",
    });

    const menSection = await client.product.fetchQuery({
      query: "tag:'mens_tshirt'",
      first: 8,
    });
    setitems(menSection);
  }, []);

  const colorSwitch = (color) => {
    switch (color) {
      case "White":
        return "#fff";
      case "Black":
        return "#000";
    }
  };

  return (
    <Stack component="section" mb={12}>
      <Typography
        mb={4}
        variant="h4"
        component="h1"
        sx={{
          height: "100%",
          fontFamily: "Times New Roman, sans-serif",
          fontWeight: "bold",
          color: "#000",
        }}
      >
        Men’s
      </Typography>
      <Container fixed>
        <Box
          component="ul"
          sx={{
            display: "grid",
            overflowY: "hidden",
            p: 0,
            listStyle: "none",
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            },
            gap: "20px",
          }}
        >
          {items &&
            items.map((a, i) => {
              return (
                <ImageListItem col={1} key={a.title}>
                  <Link
                    href={`/product/${a.id.split("/")[4]}`}
                    passHref
                    prefetch={false}
                  >
                    <a>
                      <Box
                        sx={{
                          position: "relative",
                          height: { xs: 200, md: 350 },
                          img: {
                            transition: "all 0.45s ease-out",
                          },
                          "&:hover": {
                            img: {
                              transform: "scale(1.1)",
                            },
                          },
                        }}
                      >
                        <Image
                          alt={a.name}
                          layout="fill"
                          objectFit="contain"
                          src={a.images[0].src}
                        ></Image>
                      </Box>
                    </a>
                  </Link>
                  <Stack mt={2}>
                    <Typography variant="body1" lineHeight={1} color="#5f5f5f">
                      Best Sellers
                    </Typography>
                    <Typography
                      variant="h6"
                      component="p"
                      fontWeight="medium"
                      lineHeight={1.3}
                    >
                      {a.title}
                    </Typography>
                    <Stack direction="row" spacing={1} mt={1} mb={1}>
                      {a.options[1].values.map((a) => {
                        return (
                          <Box
                            key={a.value}
                            sx={{
                              width: 20,
                              height: 20,
                              borderRadius: "50%",
                              border: "1px solid #000",
                              backgroundColor: colorSwitch(a.value),
                            }}
                          ></Box>
                        );
                      })}
                    </Stack>
                    <Typography
                      variant="h6"
                      component="p"
                      fontWeight="medium"
                      lineHeight={1.3}
                    >
                      $ {a.variants[0].price}
                    </Typography>
                  </Stack>
                </ImageListItem>
              );
            })}
        </Box>
      </Container>

      <Link passHref href="/men">
        <Button
          variant="outlined"
          sx={{
            mt: 5,
            position: "relative",
            zIndex: 1,
            color: "#000",
            borderWidth: "5px",
            borderColor: "#000",
            borderRadius: "0px",
            mx: "auto",
            px: 4,
            "&:hover": {
              borderWidth: "5px",
              borderColor: "#4d4d4d",
            },
          }}
        >
          <a>View All</a>
        </Button>
      </Link>
    </Stack>
  );
}
export default MenSection;
