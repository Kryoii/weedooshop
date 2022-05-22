import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import FeaturedCard from "../../Components/FeaturedCard";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Client from "shopify-buy";
import { useState } from "react";
import { useEffect } from "react";

function Recommendation(props) {
  const [products, setproducts] = useState([]);
  const client = Client.buildClient({
    domain: "nexttestapp.myshopify.com",
    storefrontAccessToken: "f13d038748e2df2e871efc59da57ffb3",
  });

  useEffect(async () => {
    await client.product
      .fetchRecommendations(`gid://shopify/Product/${props.id}`)
      .then((a) => {
        setproducts(a);
      });
  }, [props.id]);

  return (
    <Box position="relative">
      <Typography
        variant="h4"
        textAlign="center"
        sx={{
          fontFamily: "Times New Roman, sans-serif",
          fontWeight: "bold",
          color: "#000",
          lineHeight: 1.3,
        }}
        mb={3}
      >
        You Might also like
      </Typography>

      <div className="featured-next-arrow swiper-button-next"></div>
      <div className="featured-prev-arrow swiper-button-prev"></div>
      <Swiper
        spaceBetween={50}
        slidesPerView={2}
        navigation={{
          nextEl: ".featured-next-arrow",
          prevEl: ".featured-prev-arrow",
        }}
        // centeredSlides
        loop
        modules={[Navigation]}
        breakpoints={{
          600: {
            slidesPerView: 3,
          },
        }}
      >
        {products &&
          products.map((a, i) => {
            return (
              <SwiperSlide key={i}>
                <FeaturedCard
                  img={a.images[0].src}
                  alt={a.images[0].altText}
                  objectFit="contain"
                  title={a.title}
                  link={`/product/${a.id.split("/")[4]}`}
                  colors={a.options[1].values}
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </Box>
  );
}

export default Recommendation;
