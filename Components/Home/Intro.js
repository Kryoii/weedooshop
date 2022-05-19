import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";

function Intro() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    dotsClass: "slick-dots slick-thumb intro-thumb",
  };

  const GridBox = styled(Box)`
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
    img {
      transition: all 0.45s ease-out;
    }
    :hover {
      img {
        filter: blur(3px) brightness(70%);
        transform: scale(1.1);
      }
      .slide_in {
        opacity: 1;
        transform: translateY(0px);
        margin-bottom: 16px;
      }
      .shop_now::after {
        width: 100%;
      }
    }
    .MuiTypography-root {
      position: relative;
      z-index: 1;
      color: #fff;
    }
    .slide_in {
      transition: all 0.45s ease-out;
      transform: translateY(160px);
      opacity: 0;
      margin-bottom: -24px;
    }
  `;

  return (
    <>
      <ImageList
        sx={{
          width: "100%",
          height: "600px",
          overflow: "hidden",
          mb: 12,
        }}
        variant="quilted"
        cols={4}
        rows={6}
      >
        <ImageListItem cols={2} rows={6}>
          <div className="intro-pagination"></div>
          <Swiper
            pagination={{
              bulletClass: "intro-pagination-bullet",
              bulletActiveClass: "intro-pagination-bullet-active",
              el: ".intro-pagination",
            }}
            modules={[Pagination]}
          >
            <SwiperSlide>
              <GridBox
                sx={{
                  height: 600,
                  display: "flex!important",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    px: 3,
                  }}
                >
                  <Typography
                    variant="h3"
                    component="h1"
                    sx={{
                      height: "100%",
                      fontFamily: "Times New Roman, sans-serif",
                      fontWeight: "bold",
                      color: "#fff",
                    }}
                  >
                    Weedoo’s <br /> New Releases
                  </Typography>
                  <Typography variant="subtitle1" mb={2}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </Typography>
                  <Button
                    variant="outlined"
                    sx={{
                      position: "relative",
                      zIndex: 1,
                      color: "#fff",
                      borderWidth: "5px",
                      borderColor: "#fff",
                      borderRadius: "0px",
                      "&:hover": {
                        borderWidth: "5px",

                        borderColor: "#ebebeb",
                        color: "#f3e5f5",
                      },
                    }}
                  >
                    Shop now
                  </Button>
                </Box>
                <Image
                  layout="fill"
                  src="/images/shirt-03.jpg"
                  objectFit="cover"
                ></Image>
              </GridBox>
            </SwiperSlide>
            <SwiperSlide>
              <GridBox
                sx={{
                  height: 600,
                  display: "flex!important",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    px: 3,
                  }}
                >
                  <Typography
                    variant="h3"
                    component="h1"
                    sx={{
                      height: "100%",
                      fontFamily: "Times New Roman, sans-serif",
                      fontWeight: "bold",
                      color: "#fff",
                    }}
                  >
                    Weedoo’s <br /> New Releases
                  </Typography>
                  <Typography variant="subtitle1" mb={2}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </Typography>
                  <Button
                    variant="outlined"
                    sx={{
                      position: "relative",
                      zIndex: 1,
                      color: "#fff",
                      borderWidth: "5px",
                      borderColor: "#fff",
                      borderRadius: "0px",
                      "&:hover": {
                        borderWidth: "5px",

                        borderColor: "#ebebeb",
                        color: "#f3e5f5",
                      },
                    }}
                  >
                    Shop now
                  </Button>
                </Box>
                <Image
                  layout="fill"
                  src="/images/shirt-05.jpg"
                  objectFit="cover"
                ></Image>
              </GridBox>
            </SwiperSlide>
          </Swiper>
        </ImageListItem>
        <ImageListItem cols={2} rows={3}>
          <GridBox
            sx={{
              height: 300,
              px: 3,
            }}
          >
            <Box>
              <Typography variant="subtitle1">Our Bestsellers</Typography>
              <Typography
                variant="h4"
                component="h1"
                sx={{
                  height: "100%",
                  fontFamily: "Times New Roman, sans-serif",
                  fontWeight: "bold",
                }}
              >
                Classic Tees
              </Typography>
              <Typography variant="subtitle1" className="slide_in">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </Typography>
              <Button
                variant="outlined"
                disableRipple
                disableFocusRipple
                className="shop_now"
                sx={{
                  position: "relative",
                  zIndex: 1,
                  color: "#fff",
                  border: "none",
                  px: 0,
                  "&::after": {
                    content: "''",
                    position: "absolute",
                    bottom: "0",
                    left: 0,
                    height: "4px",
                    width: "0",
                    backgroundColor: "#fff",
                    transition: "all 0.5s ease-out",
                  },
                  "&:hover": {
                    border: "none",
                    background: "transparent",
                  },
                }}
              >
                Shop now
              </Button>
            </Box>
            <Image
              layout="fill"
              src="/images/shirt-06.jpg"
              objectFit="cover"
              objectPosition="center 50%"
            ></Image>
          </GridBox>
        </ImageListItem>
        <ImageListItem cols={2} rows={3}>
          <GridBox
            sx={{
              height: 300,
              px: 3,
            }}
          >
            <Box>
              <Typography variant="subtitle1">Our Bestsellers</Typography>

              <Typography
                variant="h4"
                component="h1"
                sx={{
                  height: "100%",
                  fontFamily: "Times New Roman, sans-serif",
                  fontWeight: "bold",
                }}
              >
                Classic Tees
              </Typography>
              <Typography variant="subtitle1" className="slide_in">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </Typography>
              <Button
                variant="outlined"
                disableRipple
                disableFocusRipple
                className="shop_now"
                sx={{
                  position: "relative",
                  zIndex: 1,
                  color: "#fff",
                  border: "none",
                  px: 0,
                  "&::after": {
                    content: "''",
                    position: "absolute",
                    bottom: "0",
                    left: 0,
                    height: "4px",
                    width: "0",
                    backgroundColor: "#fff",
                    transition: "all 0.5s ease-out",
                  },
                  "&:hover": {
                    border: "none",
                    background: "transparent",
                  },
                }}
              >
                Shop now
              </Button>
            </Box>
            <Image
              layout="fill"
              src="/images/shirt-01.jpg"
              objectFit="cover"
            ></Image>
          </GridBox>
        </ImageListItem>
      </ImageList>
    </>
  );
}

export default Intro;
