import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useState, useEffect } from "react";
import Client from "shopify-buy";
import Layout from "../../Components/Layout";

function Index() {
  const router = useRouter();
  const client = Client.buildClient({
    domain: "nexttestapp.myshopify.com",
    storefrontAccessToken: "f13d038748e2df2e871efc59da57ffb3",
  });
  const [products, setproducts] = useState([]);
  const [loading, setloading] = useState(false);
  useEffect(async () => {
    setloading(true);
    await client.product
      .fetchQuery({
        query: `title:'${router.query.keyword}'*`,
      })
      .then((a) => {
        setproducts(a);
        setloading(false);
      });
  }, [router.query]);

  return (
    <Layout title={`Searched: ${router.query.keyword}`}>
      <Stack spacing={3} alignItems="center">
        <Typography
          variant="h3"
          component="h1"
          textAlign="center"
          mb={5}
          fontWeight="bold"
        >
          Searched: {router.query.keyword}
        </Typography>
        {loading ? (
          <CircularProgress />
        ) : products.length !== 0 ? (
          products.map((a) => {
            return (
              <>
                <Link href={`/product/${a.id.split("/")[4]}`} passHref>
                  <a>
                    <Stack direction="row">
                      <Box position="relative" width={150} mr={3}>
                        {a.images[0] !== undefined && (
                          <Image
                            src={a.images[0].src}
                            layout="fill"
                            alt={a.title}
                            objectFit="contain"
                          ></Image>
                        )}
                      </Box>
                      <Box>
                        <Typography fontWeight="bold" variant="h5">
                          {a.title}
                        </Typography>
                        <Typography variant="body1" maxWidth="50%">
                          {a.description}
                        </Typography>
                      </Box>
                    </Stack>
                  </a>
                </Link>
                <Divider />
              </>
            );
          })
        ) : (
          <Typography variant="h4" textAlign="center">
            NO RESULTS
          </Typography>
        )}
      </Stack>
    </Layout>
  );
}

export default Index;
