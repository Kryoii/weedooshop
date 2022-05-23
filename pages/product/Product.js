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
import { useState, useContext, useEffect } from "react";
import { FreeMode, Mousewheel, Thumbs } from "swiper";
import { colorSwitch } from "../../Components/ColorSwitch";
import { ShopContext } from "../../Components/Utility";
import { useRouter } from "next/router";
function ProductComponent(props) {
  const {
    stock,
    priceOG,
    currentSize,
    currentColor,
    imageSlide,
    title,
    description,
    sizes,
    colors,
    productID,
  } = props;
  const [alignment, setAlignment] = useState(currentSize);
  const [color, setColor] = useState(currentColor);

  const [sum, setsum] = useState(stock);
  const [price, setprice] = useState(priceOG);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const {
    fetchProductVariant,
    productVariant,
    addItemToCart,
    fetchProductWithId,
    product,
    checkout,
  } = useContext(ShopContext);

  const [slide, setslide] = useState([]);
  const [swiperInstance, setSwiper] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (Object.keys(product).length !== 0) {
      fetchProductVariant(product, alignment, color);
    }
  }, [alignment, color, product]);

  useEffect(() => {
    setsum(productVariant?.sku);
    setprice(productVariant?.price);
  }, [productVariant]);

  useEffect(() => {
    fetchProductWithId(`gid://shopify/Product/${productID}`);
  }, [productID]);

  useEffect(() => {
    imageSlide.forEach((a, index) => {
      switch (a.altText) {
        case "Black":
          setslide((prev) => [...prev, index]);
          break;
        case "White":
          setslide((prev) => [...prev, index]);
          break;
        case "Dark Grey":
          setslide((prev) => [...prev, index]);
          break;
        case "Light Gret":
          setslide((prev) => [...prev, index]);
          break;
        case "Beige Green":
          setslide((prev) => [...prev, index]);
          break;
        case "Washed-out Red":
          setslide((prev) => [...prev, index]);
          break;
        case "Navy Blue":
          setslide((prev) => [...prev, index]);
          break;
      }
    });
  }, [imageSlide]);

  useEffect(() => {
    const handleRouteChange = (url) => {
      setslide([]);
      if (swiperInstance !== null) {
        swiperInstance.slideTo(0);
      }
    };

    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <Grid
      container
      minHeight={550}
      sx={{
        mb: { xs: 12, md: 6 },
      }}
    >
      <Grid
        item
        md={1}
        height="650px"
        sx={{
          display: { xs: "none", lg: "block" },
        }}
      >
        <Swiper
          scrollbar={true}
          onSwiper={setThumbsSwiper}
          watchSlidesProgress={true}
          direction="vertical"
          freeMode={true}
          modules={[Thumbs, Mousewheel, FreeMode]}
          slidesPerView={"auto"}
          style={{
            height: "70%",
          }}
          spaceBetween={30}
          initialSlide={0}
        >
          {imageSlide &&
            imageSlide.map((a) => {
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
      <Grid
        item
        xs={12}
        md={5}
        sx={{
          pl: { lg: 3 },
        }}
      >
        <Swiper
          onSwiper={setSwiper}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Thumbs]}
          initialSlide={0}
        >
          {imageSlide &&
            imageSlide.map((a, i) => {
              return (
                <SwiperSlide key={a.src}>
                  <Box position="relative" height="500px">
                    <Image
                      priority={i === 0 ? true : false}
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

      <Grid
        item
        xs={12}
        md={7}
        lg={6}
        sx={{
          pl: { xs: 0, md: 4 },
        }}
        pt={2}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            mb: 2,
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "auto" },
              display: { xs: "flex", md: "block" },
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h4"
              component="h1"
              sx={{
                fontFamily: "Times New Roman, sans-serif",
                fontWeight: "bold",
                color: "#000",
                lineHeight: 1.3,
                maxWidth: { xs: 190, sm: 250 },
              }}
            >
              {title}
            </Typography>
            <Stack direction="row">
              <Typography
                variant="body1"
                fontWeight="bold"
                sx={{
                  display: { xs: "none", md: "block" },
                }}
              >
                $ {price}
              </Typography>
              <Divider
                flexItem
                orientation="vertical"
                sx={{
                  mx: 1,
                  display: { xs: "none", md: "block" },
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
              display: { xs: "none", md: "inline-flex" },
            }}
            onClick={() => {
              addItemToCart(productVariant.id, 1, product.id);
            }}
            disabled={
              Object.keys(checkout).length !== 0 && productVariant !== undefined
                ? false
                : true
            }
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
              if (newAlignment !== null) {
                setColor(newAlignment);
              }
            }}
            aria-label="White"
          >
            {colors &&
              colors.values.map((a, index) => {
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
                    onClick={() => {
                      swiperInstance.slideTo(slide[index]);
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
          {description}
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
              if (newAlignment !== null) {
                setAlignment(newAlignment);
              }
            }}
            aria-label="S"
          >
            {sizes &&
              sizes.values.map((a) => {
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
              display: { xs: "none", md: "block" },
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
            borderRadius: "0px!important",
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
            width: "100%",
            mt: 3,
            display: { xs: "inline-flex", md: "none" },
          }}
          onClick={() => {
            addItemToCart(productVariant.id, 1, product.id);
          }}
          disabled={
            Object.keys(checkout).length !== 0 && productVariant !== undefined
              ? false
              : true
          }
        >
          <ShoppingCartOutlined
            sx={{
              mr: 2,
            }}
          />
          Add to cart
        </Button>
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
