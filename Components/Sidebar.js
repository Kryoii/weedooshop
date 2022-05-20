import Remove from "@mui/icons-material/Remove";
import Add from "@mui/icons-material/Add";
import Close from "@mui/icons-material/Close";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import Image from "next/image";
import React from "react";
import { useContext } from "react";
import { ShopContext } from "./Utility";
import { useEffect } from "react";
import { colorSwitch } from "./ColorSwitch";

function Sidebar({ open, onClose }) {
  const { checkout, disabledButtons, updateItem, inputs, updateInput } =
    useContext(ShopContext);
  useEffect(() => {
    console.log(checkout);
  }, [checkout]);

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          minWidth: 450,
        },
      }}
    >
      <Box
        sx={{
          mt: 3,
          px: 3,
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Stack
          sx={{
            width: "100%",
            mt: 3,
            mb: 1,
          }}
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography
            variant="h4"
            component="h1"
            sx={{
              fontFamily: "Times New Roman, sans-serif",
              fontWeight: "bold",
              color: "#000",
              lineHeight: 1.3,
            }}
          >
            Cart
          </Typography>
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </Stack>
        <Divider />
        <Stack
          sx={{
            flexGrow: 1,
            overflow: "auto",
            my: 3,
          }}
          spacing={5}
        >
          {checkout.lineItems
            ?.sort(function (a, b) {
              return (
                new Date(b.customAttributes[0].value) -
                new Date(a.customAttributes[0].value)
              );
            })
            .map((a, i) => {
              return (
                <Box width="100%" key={`${a.title}-${a.variant.title}`}>
                  <Stack
                    direction="row"
                    sx={{
                      mb: 3,
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        width: "100px",
                        height: "130px",
                        mr: 2,
                      }}
                    >
                      <Image
                        src={a.variant.image.src}
                        layout="fill"
                        alt="Checkout Shirt"
                        objectFit="cover"
                      ></Image>
                    </Box>
                    <Stack
                      sx={{
                        flexGrow: 1,
                      }}
                    >
                      <Typography
                        variant="h6"
                        fontWeight="medium"
                        maxWidth={250}
                      >
                        {a.title}
                      </Typography>
                      <Stack spacing={1} direction="row">
                        <Box
                          sx={{
                            backgroundColor: colorSwitch(
                              a.variant.title.split(" / ")[1]
                            ),
                            border: "1px solid #000",
                            borderRadius: "50%",
                            width: 20,
                            height: 20,
                          }}
                        ></Box>
                        <Box
                          sx={{
                            backgroundColor: "#fff",
                            border: "1px solid #000",
                            borderRadius: "5px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            minWidth: 20,
                            height: 20,
                            fontSize: "12px",
                            fontWeight: "bold",
                            px: "4px",
                          }}
                        >
                          {a.variant.title.split(" / ")[0]}
                        </Box>
                      </Stack>

                      <Stack
                        direction="row"
                        sx={{
                          width: "100%",
                          alignItems: "center",
                          justifyContent: "space-between",
                          mt: 2,
                        }}
                      >
                        <Stack direction="row">
                          <Button
                            disableRipple
                            sx={{
                              color: "#000",
                              width: 25,
                              minWidth: "auto",
                              p: 0,
                              "&:hover": {
                                backgroundColor: "transparent",
                              },
                              borderTop: "1px solid #000",
                              borderLeft: "1px solid #000",
                              borderBottom: "1px solid #000",
                              borderRadius: 0,
                            }}
                            disabled={disabledButtons[i]?.button}
                            onClick={() => {
                              updateItem(a.variant.id, a.id, a.quantity - 1, i);
                              updateInput(a.quantity - 1, i);
                            }}
                          >
                            <Remove />
                          </Button>
                          <Input
                            disableUnderline
                            sx={{
                              width: 40,
                              borderTop: "1px solid #000",
                              borderBottom: "1px solid #000",
                            }}
                            inputProps={{
                              sx: {
                                textAlign: "center",
                                fontSize: "18px",
                                fontWeight: "bold",
                              },
                            }}
                            value={
                              disabledButtons[i]
                                ? disabledButtons[i].value
                                : a.quantity
                            }
                            onChange={(e) => {
                              updateInput(e.target.value, i);
                            }}
                            onKeyPress={(event) => {
                              if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                              }
                              if (
                                event.key === "Enter" ||
                                event.keyCode === 13
                              ) {
                                updateItem(
                                  a.variant.id,
                                  a.id,
                                  event.target.value,
                                  i
                                );
                              }
                            }}
                            disabled={disabledButtons[i]?.button}
                          ></Input>
                          <Button
                            disableRipple
                            sx={{
                              color: "#000",
                              width: 25,
                              minWidth: "auto",
                              p: 0,
                              "&:hover": {
                                backgroundColor: "transparent",
                              },
                              borderTop: "1px solid #000",
                              borderRight: "1px solid #000",
                              borderBottom: "1px solid #000",
                              borderRadius: 0,
                            }}
                            disabled={disabledButtons[i]?.button}
                            onClick={() => {
                              updateInput(a.quantity + 1, i);
                              updateItem(a.variant.id, a.id, a.quantity + 1, i);
                            }}
                          >
                            <Add />
                          </Button>
                        </Stack>
                        <Typography
                          variant="h6"
                          fontWeight="bold"
                          component="p"
                        >
                          $ {a.variant.price}
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                  {i !== checkout.lineItems.length - 1 && <Divider />}
                </Box>
              );
            })}
        </Stack>
        <Divider />
        <Stack alignItems="center">
          <Stack
            sx={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              mb: 2,
              mt: 3,
              width: "100%",
            }}
          >
            <Typography variant="body1">Subtotal</Typography>
            <Typography variant="h6" component="p" fontWeight="bold">
              $ {checkout.totalPrice}
            </Typography>
          </Stack>
          <Button
            variant="outlined"
            sx={{
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
              width: "100%",
              minHeight: 50,
            }}
          >
            CHECK OUT
          </Button>
          <Typography
            variant="body1"
            my={3}
            maxWidth="280px"
            textAlign="center"
          >
            Shipping, Taxes, and discounts codes calculated at checkout.
          </Typography>
        </Stack>
      </Box>
    </Drawer>
  );
}

export default Sidebar;
