import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import { colorSwitch } from "./ColorSwitch";
function FeaturedCard({
  img,
  objectFit,
  alt,
  title,
  link,
  colors,
  price,
  type,
}) {
  return (
    <Box>
      <Link href={link} passHref>
        <a>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: { xs: 300, md: 400 },
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
              src={img ? img : "/images/shirt-01.jpg"}
              layout="fill"
              objectFit={objectFit}
              alt={alt}
            ></Image>
          </Box>
        </a>
      </Link>
      <Stack mt={2}>
        <Typography variant="body1" lineHeight={1} color="#5f5f5f">
          {type}
        </Typography>
        <Typography
          variant="h6"
          component="h5"
          fontWeight="medium"
          lineHeight={1.3}
        >
          {title}
        </Typography>
        <Stack direction="row" spacing={1} mt={1} mb={1}>
          {colors &&
            colors.map((a) => {
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
          from ${price}
        </Typography>
      </Stack>
    </Box>
  );
}

export default FeaturedCard;
