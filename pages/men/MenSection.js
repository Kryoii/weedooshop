import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ImageListItem from "@mui/material/ImageListItem";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { colorSwitch } from "../../Components/ColorSwitch";
function MenSection(props) {
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
        {props.products &&
          props.products.map((a, i) => {
            return (
              <ImageListItem col={1} key={a.title}>
                <Link href={`/product/${a.id.split("/")[4]}`} passHref>
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
                    component="h5"
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
                    component="h5"
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
