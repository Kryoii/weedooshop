import ExpandMore from "@mui/icons-material/ExpandMore";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";

import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import Twitter from "@mui/icons-material/Twitter";
import YouTube from "@mui/icons-material/YouTube";

import Image from "next/image";
import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css/thumbs";

import "swiper/css/free-mode";

import "swiper/css";
import { useState } from "react";
import { FreeMode, Mousewheel, Thumbs } from "swiper";
import { colorSwitch } from "../../Components/ColorSwitch";
import { useEffect } from "react";
import { useContext } from "react";
import { ShopContext } from "../../Components/Utility";
function ProductComponent(props) {
  const { product } = props;
  const [alignment, setAlignment] = React.useState(
    product ? product.options[0].values[0].value : "M"
  );
  const [color, setColor] = React.useState(
    product ? product.options[1].values[0].value : ""
  );

  const [sum, setsum] = useState(
    product
      ? product.variants.reduce(function (prev, current) {
          return prev + +current.sku;
        }, 0)
      : "0"
  );

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const { fetchProductVariant, productVariant, addItemToCart } =
    useContext(ShopContext);

  useEffect(() => {
    if (alignment !== null && color !== null) {
      fetchProductVariant(product, alignment, color);
    }
  }, [alignment, color]);

  useEffect(() => {
    if (productVariant) {
      setsum(productVariant.sku);
    }
  }, [productVariant]);

  return (
    <Grid container height={650}>
      <Grid item md={1} height="650px">
        <Swiper
          scrollbar={true}
          onSwiper={setThumbsSwiper}
          watchSlidesProgress={true}
          direction="vertical"
          freeMode={true}
          modules={[Thumbs, Mousewheel, FreeMode]}
          slidesPerView={"auto"}
          style={{
            height: "100%",
          }}
          spaceBetween={30}
        >
          {product &&
            product.images.map((a) => {
              return (
                <SwiperSlide className="thumb_slide" key={a.src}>
                  <Box position="relative" height="100px" className="thumb_box">
                    <Image
                      src={a.src}
                      layout="fill"
                      alt={a.altText}
                      objectFit="contain"
                    ></Image>
                  </Box>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </Grid>
      <Grid item xs={12} md={5} pl={3}>
        <Swiper thumbs={{ swiper: thumbsSwiper }} modules={[Thumbs]}>
          {product &&
            product.images.map((a) => {
              return (
                <SwiperSlide key={a.src}>
                  <Box position="relative" height="500px">
                    <Image
                      src={a.src}
                      layout="fill"
                      alt={a.altText}
                      objectFit="contain"
                    ></Image>
                  </Box>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </Grid>

      <Grid item xs={12} md={6} pl={4} pt={2}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            mb: 2,
          }}
        >
          <Box>
            <Typography
              variant="h4"
              component="h1"
              sx={{
                fontFamily: "Times New Roman, sans-serif",
                fontWeight: "bold",
                color: "#000",
                lineHeight: 1.3,
                maxWidth: 300,
              }}
            >
              {product && product.title}
            </Typography>
            <Stack direction="row">
              <Typography variant="body1" fontWeight="bold">
                $ {product && product.variants[0].price}
              </Typography>
              <Divider
                flexItem
                orientation="vertical"
                sx={{
                  mx: 1,
                }}
              />
              <Typography variant="body1" fontWeight="bold">
                {sum}{" "}
                <span
                  style={{
                    fontSize: ".85rem",
                    color: "#535353c7",
                    fontWeight: "medium",
                  }}
                >
                  in-stock
                </span>
              </Typography>
            </Stack>
          </Box>
          <Button
            variant="outlined"
            sx={{
              position: "relative",
              zIndex: 1,
              color: "#000",
              borderWidth: "5px",
              borderColor: "#000",
              borderRadius: "0px",

              px: 3,
              "&:hover": {
                borderWidth: "5px",
                borderColor: "#4d4d4d",
              },
              minHeight: 50,
            }}
            onClick={() => {
              addItemToCart(productVariant.id, 1);
            }}
          >
            <ShoppingCartOutlined
              sx={{
                mr: 2,
              }}
            />
            Add to cart
          </Button>
        </Stack>
        <Stack direction="row" alignItems="center">
          <Typography mr={1} variant="body1">
            Available in:
          </Typography>
          <ToggleButtonGroup
            sx={{
              ".MuiToggleButtonGroup-grouped:not(:last-of-type)": {
                borderTopRightRadius: "50%",
                borderBottomRightRadius: "50%",
              },
              ".MuiToggleButtonGroup-grouped:not(:first-of-type)": {
                borderTopLeftRadius: "50%",
                borderBottomLeftRadius: "50%",
                borderLeft: "1px solid #000",
                marginLeft: 1,
              },
            }}
            value={color}
            exclusive
            onChange={(e, newAlignment) => {
              setColor(newAlignment);
            }}
            aria-label="White"
          >
            {product &&
              product.options[1].values.map((a) => {
                return (
                  <ToggleButton
                    key={a.value}
                    value={a.value}
                    aria-label={a.value}
                    disableRipple
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: colorSwitch(a.value),
                      border: "1px solid #000!important",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 20,
                      height: 20,
                      ".dot_active": {
                        position: "absolute",
                        width: 7,
                        height: 7,
                        borderRadius: "50%",
                        backgroundColor: a.value === "White" ? "#000" : "#fff",
                        opacity: 0,
                      },
                      "&:hover": {
                        backgroundColor: colorSwitch(a.value),
                      },
                      "&.Mui-selected:hover": {
                        backgroundColor: colorSwitch(a.value),
                      },
                      "&.Mui-selected": {
                        backgroundColor: colorSwitch(a.value),
                        ".dot_active": {
                          opacity: 1,
                        },
                      },
                    }}
                  >
                    <span className="dot_active"></span>
                  </ToggleButton>
                );
              })}
          </ToggleButtonGroup>
          <Stack direction="row" spacing={1}></Stack>
        </Stack>
        <Typography variant="body1" mt={2} mb={5}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum hic
          soluta quas, aut cum ipsa voluptas excepturi id, quod saepe nesciunt
          mollitia, sed debitis corporis explicabo iste tempore consequuntur
          totam. Laudantium asperiores nobis quisquam accusamus distinctio eum
          explicabo recusandae ducimus!
        </Typography>
        <Stack
          sx={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 4,
          }}
        >
          <ToggleButtonGroup
            sx={{
              ".MuiToggleButtonGroup-grouped:not(:last-of-type)": {
                borderTopRightRadius: "3px",
                borderBottomRightRadius: "3px",
              },
              ".MuiToggleButtonGroup-grouped:not(:first-of-type)": {
                borderTopLeftRadius: "3px",
                borderBottomLeftRadius: "3px",
                borderLeft: "1px solid #000",
                marginLeft: 1,
              },
              ".MuiToggleButton-root": {
                backgroundColor: "#fff",
                border: "1px solid #000",
                borderRadius: "3px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 40,
                height: 40,

                fontWeight: "bold",
              },
            }}
            value={alignment}
            exclusive
            onChange={(e, newAlignment) => {
              setAlignment(newAlignment);
            }}
            aria-label="S"
          >
            {product &&
              product.options[0].values.map((a) => {
                return (
                  <ToggleButton
                    key={a.value}
                    value={a.value}
                    aria-label={a.value}
                  >
                    {a.value}
                  </ToggleButton>
                );
              })}
          </ToggleButtonGroup>
          <Typography
            variant="body1"
            fontWeight="bold"
            sx={{
              position: "relative",
              "&::after": {
                content: "''",
                position: "absolute",
                width: "100%",
                height: "3px",
                bottom: "-5px",
                left: 0,
                backgroundColor: "#000",
              },
            }}
          >
            Sizing Chart
          </Typography>
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
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{
              px: 0,
            }}
          >
            <Typography>Delivery Info</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Box
          mt={5}
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography variant="body1" mr={2}>
            Share this
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            sx={{
              ml: "-4px",
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
                  fontSize: "18px",
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
                  fontSize: "18px",
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
                  fontSize: "18px",
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
                  fontSize: "18px",
                }}
              />
            </IconButton>
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
}

export default ProductComponent;