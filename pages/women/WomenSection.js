import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ImageListItem from "@mui/material/ImageListItem";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function MenSection() {
  const womenList = [
    {
      src: "shirt-03.jpg",
      name: "Product Name 1",
    },
    {
      src: "shirt-05.jpg",
      name: "Product Name 2",
    },
    {
      src: "shirt-07.jpg",
      name: "Product Name 3",
    },
    {
      src: "shirt-11.jpg",
      name: "Product Name 4",
    },
    {
      src: "shirt-12.jpg",
      name: "Product Name 5",
    },
    {
      src: "shirt-13.jpg",
      name: "Product Name 6",
    },
    {
      src: "shirt-16.jpg",
      name: "Product Name 7",
    },
  ];

  return (
    <Stack my={3}>
      <Box
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
        {womenList.map((a, i) => {
          return (
            <ImageListItem col={1} key={a.name}>
              <Link href={`/product/${i}`} passHref>
                <a>
                  <Box
                    sx={{
                      position: "relative",
                      height: 350,
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
                      objectFit="cover"
                      src={`/images/${a.src}`}
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
                  component="h5"
                  fontWeight="medium"
                  lineHeight={1.3}
                >
                  {a.name}
                </Typography>
                <Stack direction="row" spacing={1} mt={1} mb={1}>
                  <Box
                    sx={{
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      border: "1px solid #000",
                      backgroundColor: "#fff",
                    }}
                  ></Box>
                  <Box
                    sx={{
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      border: "1px solid #000",
                      backgroundColor: "#000",
                    }}
                  ></Box>
                </Stack>
                <Typography
                  variant="h6"
                  component="h5"
                  fontWeight="medium"
                  lineHeight={1.3}
                >
                  $ 39.99
                </Typography>
              </Stack>
            </ImageListItem>
          );
        })}
      </Box>

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
        View More
      </Button>
    </Stack>
  );
}

export default MenSection;
