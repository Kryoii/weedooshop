import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function JoinNow() {
  const GridBox = styled(Box)`
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    display: flex;
    padding-left: 16px;
    padding-right: 16px;
    img {
      transition: all 0.45s ease-out;
    }
    :hover {
      img {
        filter: blur(3px) brightness(70%);
        transform: scale(1.1);
      }
      .shop_now::after {
        width: 100%;
      }
      .MuiTypography-root {
        margin-bottom: 40px;
        &::after {
          width: 100%;
        }
      }
    }

    .MuiTypography-root {
      transition: all 0.45s ease-out;
      font-family: Times New Roman, sans-serif;
      font-weight: bold;
      position: relative;
      z-index: 1;
      color: #fff;
      margin-top: auto;
      margin-bottom: 20px;
      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        height: 4px;
        width: 0;
        background-color: #fff;
        transition: all 0.5s ease-out;
      }
    }
  `;

  return (
    <Grid
      component="section"
      container
      spacing={1}
      sx={{
        mb: 12,
        minHeight: { xs: 600, md: 250 },
      }}
    >
      <Grid item xs={12} md={4}>
        <Link href="/men" passHref>
          <a>
            <GridBox>
              <Image
                src="/images/shirt-01.jpg"
                layout="fill"
                alt="Shirt"
                objectFit="cover"
              ></Image>
              <Typography variant="h5" component="p">
                Men’s
              </Typography>
            </GridBox>
          </a>
        </Link>
      </Grid>
      <Grid item xs={12} md={4}>
        <Link href="/women" passHref>
          <a>
            <GridBox>
              <Image
                src="/images/shirt-03.jpg"
                layout="fill"
                alt="Shirt"
                objectFit="cover"
              ></Image>
              <Typography variant="h5" component="p">
                Women’s
              </Typography>
            </GridBox>
          </a>
        </Link>
      </Grid>
      <Grid item xs={12} md={4}>
        <Link href="/accessories" passHref>
          <a>
            <GridBox>
              <Image
                src="/images/shirt-12.jpg"
                layout="fill"
                alt="Shirt"
                objectFit="cover"
              ></Image>
              <Typography variant="h5" component="p">
                Accessories
              </Typography>
            </GridBox>
          </a>
        </Link>
      </Grid>
    </Grid>
  );
}

export default JoinNow;
