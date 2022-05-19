import * as React from "react";
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
function Featured() {
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
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const featuredSlides = [
    {
      src: "/images/shirt-01.jpg",
    },
    {
      src: "/images/shirt-02.jpg",
    },
    {
      src: "/images/shirt-03.jpg",
    },
    {
      src: "/images/shirt-04.jpg",
    },

    {
      src: "/images/shirt-05.jpg",
    },

    {
      src: "/images/shirt-06.jpg",
    },
  ];

  return (
    <Box sx={{ width: "100%", mb: 12 }}>
      <Typography
        variant="h3"
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
            slidesPerView={"3"}
            spaceBetween={50}
            navigation={{
              nextEl: ".featured-next-arrow",
              prevEl: ".featured-prev-arrow",
            }}
            centeredSlides
            loop
            modules={[Navigation]}
          >
            {featuredSlides.map((a, i) => {
              return (
                <SwiperSlide className={styles.swiper_slide} key={i}>
                  <FeaturedCard
                    img={a.src}
                    objectFit="cover"
                    alt={a.src}
                    title="test"
                    link=""
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}></TabPanel>
      <TabPanel value={value} index={2}></TabPanel>
    </Box>
  );
}

export default Featured;
