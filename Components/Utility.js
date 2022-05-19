import Cookies from "js-cookie";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Client from "shopify-buy";

const ShopContext = new React.createContext({});

const client = Client.buildClient({
  domain: "nexttestapp.myshopify.com",
  storefrontAccessToken: "f13d038748e2df2e871efc59da57ffb3",
});

function Utility(props) {
  const [state, setstate] = useState({
    products: [],
    product: {},
    productVariant: {},
    checkout: {},
    isCartOpen: false,
    disabledButtons: [],
  });
  const createCheckout = async () => {
    const checkout = await client.checkout.create();
    setstate((prev) => ({
      ...prev,
      checkout: checkout,
    }));
    setstate((prev) => ({
      ...prev,
      disabledButtons: new Array(checkout.lineItems.length),
    }));
    Cookies.set("cart", checkout.id);
  };

  const fetchAllProducts = async () => {
    const products = await client.product.fetchAll();
    setstate((prev) => ({
      ...prev,
      products: products,
    }));
  };

  const addItemToCart = async (variantId, quantity) => {
    const lineItemsToAdd = [
      {
        customAttributes: [{ key: "created_at", value: new Date() }],
        variantId: variantId,
        quantity: parseInt(quantity, 10),
      },
    ];

    const checkout_ = await client.checkout.addLineItems(
      state.checkout.id,
      lineItemsToAdd
    );
    setstate((prev) => ({
      ...prev,
      checkout: checkout_,
    }));
    localStorage.setItem("cart", checkout_.id);
    Cookies.set("cartLength", checkout_.lineItems.length);
  };

  const updateItem = async (variantId, id, quantity, index) => {
    setstate((oldState) => {
      const newDisabledButtons = [...oldState.disabledButtons];
      newDisabledButtons[index] = true;
      return {
        ...oldState,
        disabledButtons: newDisabledButtons,
      };
    });

    await client.checkout
      .updateLineItems(state.checkout.id, [
        {
          id: id,
          variantId: variantId,
          quantity: parseInt(quantity, 10),
        },
      ])
      .then((b) => {
        setstate((oldState) => {
          const newDisabledButtons = [...oldState.disabledButtons];
          newDisabledButtons[index] = false;
          return {
            ...oldState,
            disabledButtons: newDisabledButtons,
          };
        });

        setstate((prev) => ({
          ...prev,
          checkout: b,
        }));
        localStorage.setItem("cart", checkout_.id);
      });
  };

  const fetchProductWithId = async (id) => {
    const product = await client.product.fetch(id);
    setstate((prev) => ({
      ...prev,
      product: product,
    }));
  };

  const fetchProductVariant = async (product, size, color) => {
    const selectedVariant = await client.product.helpers.variantForOptions(
      product,
      {
        Size: size,
        Color: color,
      }
    );
    setstate((prev) => ({
      ...prev,
      productVariant: selectedVariant,
    }));
  };

  const fetchCheckout = async (id) => {
    const checkout_ = await client.checkout.fetch(id);
    setstate((prev) => ({
      ...prev,
      checkout: checkout_,
    }));
    setstate((prev) => ({
      ...prev,
      disabledButtons: new Array(checkout_.lineItems.length).fill(false),
    }));
    Cookies.set("cart", checkout_.id);
  };

  useEffect(() => {
    if (Cookies.get("cart")) {
      fetchCheckout(Cookies.get("cart"));
    } else {
      createCheckout();
    }
  }, []);

  useEffect(() => {
    console.log(state.checkout);
  }, [state.checkout]);

  return (
    <ShopContext.Provider
      value={{
        ...state,
        fetchAllProducts: fetchAllProducts,
        createCheckout: createCheckout,
        addItemToCart: addItemToCart,
        fetchProductWithId: fetchProductWithId,
        updateItem: updateItem,
        fetchProductVariant: fetchProductVariant,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
}

const ShopConsumer = ShopContext.Consumer;

export { ShopContext, ShopConsumer };

export default Utility;
