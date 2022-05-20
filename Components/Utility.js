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
    sidebar: false,
    disabledButtons: [],
  });
  const createCheckout = async () => {
    const checkout = await client.checkout.create();
    setstate((prev) => ({
      ...prev,
      checkout: checkout,
    }));
    checkout.lineItems?.forEach((a, inde) => {
      setstate((prev) => ({
        ...prev,
        disabledButtons: [
          ...prev.disabledButtons,
          {
            button: false,
            id: a.variant.id,
            value: a.quantity,
            date: new Date(),
          },
        ],
      }));
    });
  };

  const fetchAllProducts = async () => {
    const products = await client.product.fetchAll();
    setstate((prev) => ({
      ...prev,
      products: products,
    }));
  };

  const addItemToCart = async (variantId, quantity) => {
    openSidebar();
    const lineItemsToAdd = [
      {
        customAttributes: [{ key: "created_at", value: new Date() }],
        variantId: variantId,
        quantity: parseInt(quantity, 10),
      },
    ];

    const obj = state.checkout.lineItems.filter(
      (e) => e.variant.id === variantId
    );

    if (obj.length > 0) {
      await client.checkout
        .updateLineItems(state.checkout.id, [
          {
            id: obj[0].id,
            variantId: variantId,
            quantity: parseInt(obj[0].quantity + 1, 10),
          },
        ])
        .then((b) => {
          setstate((prev) => ({
            ...prev,
            checkout: b,
          }));
        });
    } else {
      const checkout_ = await client.checkout.addLineItems(
        state.checkout.id,
        lineItemsToAdd
      );
      setstate((prev) => ({
        ...prev,
        checkout: checkout_,
      }));
      setstate((prev) => ({
        ...prev,
        disabledButtons: [
          ...prev.disabledButtons,
          {
            button: false,
            id: variantId,
            value: quantity,
            date: new Date(),
          },
        ],
      }));

      Cookies.set("cartLength", checkout_.lineItems.length);
    }
  };

  const updateItem = async (variantId, id, quantity, index) => {
    if (quantity === "0" || parseInt(quantity, 10) <= 0) {
      await client.checkout
        .updateLineItems(state.checkout.id, [
          {
            id: id,
            variantId: variantId,
            quantity: parseInt(quantity, 10),
          },
        ])
        .then((b) => {
          setstate((prev) => ({
            ...prev,
            checkout: b,
          }));
          setstate((prev) => ({
            ...prev,
            disabledButtons: prev.disabledButtons
              .filter((a) => {
                return a.id !== variantId;
              })
              .sort(function (a, b) {
                return new Date(b.date) - new Date(a.date);
              }),
          }));
        });
    } else {
      setstate((oldState) => {
        const newDisabledButtons = [...oldState.disabledButtons];
        newDisabledButtons[index].button = true;
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
            newDisabledButtons[index].button = false;
            return {
              ...oldState,
              disabledButtons: newDisabledButtons,
            };
          });
          setstate((prev) => ({
            ...prev,
            checkout: b,
          }));
        });
    }
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

    if (state.disabledButtons.length === 0) {
      checkout_.lineItems?.forEach((a, inde) => {
        setstate((prev) => ({
          ...prev,
          disabledButtons: [
            ...prev.disabledButtons,
            {
              button: false,
              id: a.variant.id,
              value: a.quantity,
              date: new Date(),
            },
          ].sort(function (a, b) {
            return new Date(b.date) - new Date(a.date);
          }),
        }));
      });
    }

    Cookies.set("cart", checkout_.id);
  };
  const removeItem = async (id, variantId) => {
    await client.checkout.removeLineItems(state.checkout.id, [id]).then((b) => {
      setstate((prev) => ({
        ...prev,
        checkout: b,
      }));
      setstate((prev) => ({
        ...prev,
        disabledButtons: prev.disabledButtons
          .filter((a) => {
            return a.id !== variantId;
          })
          .sort(function (a, b) {
            return new Date(b.date) - new Date(a.date);
          }),
      }));
    });
  };
  const updateInput = (newInput, index) => {
    const newInputs = [...state.disabledButtons];
    newInputs[index].value = newInput;
    setstate((oldState) => {
      return {
        ...oldState,
        disabledButtons: newInputs,
      };
    });
  };

  const openSidebar = () => {
    setstate((prev) => ({
      ...prev,
      sidebar: true,
    }));
  };
  const closeSidebar = () => {
    setstate((prev) => ({
      ...prev,
      sidebar: false,
    }));
  };

  useEffect(() => {
    console.log(Cookies.get("cart"));
    if (Cookies.get("cart")) {
      fetchCheckout(Cookies.get("cart"));
    } else {
      createCheckout();
    }
  }, []);

  useEffect(() => {
    Cookies.set("cart", state.checkout.id);
    setstate((prev) => ({
      ...prev,
      disabledButtons: [],
    }));
    state.checkout.lineItems?.forEach((a, inde) => {
      setstate((prev) => ({
        ...prev,
        disabledButtons: [
          ...prev.disabledButtons,
          {
            button: false,
            id: a.variant.id,
            value: a.quantity,
            date: new Date(),
          },
        ],
      }));
    });
  }, [state.checkout]);

  // useEffect(() => {
  //   console.log(state.disabledButtons);
  // }, [state.disabledButtons]);

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
        updateInput: updateInput,
        removeItem: removeItem,
        openSidebar: openSidebar,
        closeSidebar: closeSidebar,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
}

const ShopConsumer = ShopContext.Consumer;

export { ShopContext, ShopConsumer };

export default Utility;
