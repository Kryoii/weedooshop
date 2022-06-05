import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import styles from "../../styles/featured/featured.module.css";
import FeaturedCard from "../FeaturedCard";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState, useEffect } from "react";
import Client from "shopify-buy";
function Featured() {
  const maxWidth455 = useMediaQuery("(max-width:455px)");

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box>{children}</Box>}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [items, setitems] = useState([]);
  const [bestsellers, setbestsellers] = useState([]);
  const client = Client.buildClient({
    domain: "nexttestapp.myshopify.com",
    storefrontAccessToken: "b79f30d31076cf3e3c77255d8ba8801c",
  });
  useEffect(async () => {
    const newArrivals = await client.product.fetchQuery({
      first: 5,
    });
    setitems(newArrivals);
  }, []);
  useEffect(async () => {
    if (value === 1) {
      const items = await client.product.fetchQuery({
        first: 5,
        sortKey: "BEST_SELLING",
      });
      setbestsellers(items);
    }
  }, [value]);

  return (
    <Box component="section" sx={{ width: "100%", mb: 12 }}>
      <Typography
        variant="h3"
        component="h1"
        sx={{
          fontFamily: "Times New Roman, sans-serif",
          fontWeight: "bold",
          color: "#000",
          textAlign: "center",
          mb: 2,
        }}
      >
        Featured Products
      </Typography>
      <Box mb={5}>
        <Tabs
          variant={!maxWidth455 ? "standard" : "scrollable"}
          centered
          value={value}
          onChange={handleChange}
          aria-label="Featured Products"
          sx={{
            ".MuiTabs-indicator": {
              backgroundColor: "transparent",
            },
            ".Mui-selected": {
              color: "#000!important",
              fontWeight: "bold",
            },
          }}
        >
          <Tab disableRipple label="New Arrivals" {...a11yProps(0)} />
          <Tab disableRipple label="Best Sellers" {...a11yProps(1)} />
          <Tab disableRipple label="Restock Items" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box position="relative">
          <div className="featured-next-arrow swiper-button-next"></div>
          <div className="featured-prev-arrow swiper-button-prev"></div>
          <Swiper
            slidesPerView={2}
            spaceBetween={50}
            navigation={{
              nextEl: ".featured-next-arrow",
              prevEl: ".featured-prev-arrow",
            }}
            // centeredSlides
            breakpoints={{
              900: {
                slidesPerView: 3,
              },
            }}
            loop
            modules={[Navigation]}
          >
            {items.map((a, i) => {
              return (
                <SwiperSlide className={styles.swiper_slide} key={a.title}>
                  <FeaturedCard
                    img={a.images[0].src}
                    objectFit="contain"
                    alt={a.images[0].src}
                    title={a.title}
                    link={`/product/${a.id.split("/")[4]}`}
                    price={a.variants[0].price}
                    type="New Arrivals"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Swiper
          slidesPerView={2}
          spaceBetween={50}
          navigation={{
            nextEl: ".featured-next-arrow",
            prevEl: ".featured-prev-arrow",
          }}
          // centeredSlides
          breakpoints={{
            900: {
              slidesPerView: 3,
            },
          }}
          loop
          modules={[Navigation]}
        >
          {bestsellers.map((a, i) => {
            return (
              <SwiperSlide className={styles.swiper_slide} key={a.title}>
                <FeaturedCard
                  img={a.images[0]?.src}
                  objectFit="contain"
                  alt={a.images[0]?.src}
                  title={a.title}
                  link=""
                  price={a.variants[0].price}
                  type="Best Sellers"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </TabPanel>
      <TabPanel value={value} index={2}></TabPanel>
    </Box>
  );
}

export default Featured;
