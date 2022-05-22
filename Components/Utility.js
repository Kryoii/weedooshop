import Cookies from "js-cookie";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Client from "shopify-buy";

const ShopContext = new React.createContext({});

const client = Client.buildClient({
  domain: "nexttestapp.myshopify.com",
  storefrontAccessToken: "b79f30d31076cf3e3c77255d8ba8801c",
});

function Utility(props) {
  const [state, setstate] = useState({
    products: [],
    product: {},
    productVariant: {},
    checkout: {},
    sidebar: false,
    sidebarMenu: false,
    searchBar: false,
    disabledButtons: [].sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    }),
  });
  const createCheckout = async () => {
    const checkout = await client.checkout.create();
    setstate((prev) => ({
      ...prev,
      checkout: checkout,
    }));
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
      console.log();
      await client.checkout
        .updateLineItems(state.checkout.id, [
          {
            id: obj[0].id,
            variantId: variantId,
            quantity: parseInt(obj[0].quantity + 1, 10),
          },
        ])
        .then((b) => {
          updateInput(
            obj[0].quantity + 1,
            state.disabledButtons.findIndex((item) => item.id === variantId)
          );
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
        ].sort(function (a, b) {
          return new Date(b.date) - new Date(a.date);
        }),
      }));
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
            disabledButtons: prev.disabledButtons.filter((a) => {
              return a.id !== variantId;
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

    setstate((prev) => ({
      ...prev,
      disabledButtons:
        JSON.parse(localStorage.getItem("buttons")) !== null
          ? JSON.parse(localStorage.getItem("buttons")).sort(function (a, b) {
              return new Date(b.date) - new Date(a.date);
            })
          : [],
    }));
  };
  const removeItem = async (id, variantId, index) => {
    setstate((oldState) => {
      const newDisabledButtons = [...oldState.disabledButtons];
      newDisabledButtons[index].button = true;
      return {
        ...oldState,
        disabledButtons: newDisabledButtons,
      };
    });
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
      sidebarMenu: false,
      sidebar: true,
    }));
  };
  const closeSidebar = () => {
    setstate((prev) => ({
      ...prev,
      sidebar: false,
    }));
  };

  const openMenuSidebar = () => {
    setstate((prev) => ({
      ...prev,
      sidebar: false,
      sidebarMenu: true,
    }));
  };
  const closeMenuSidebar = () => {
    setstate((prev) => ({
      ...prev,
      sidebarMenu: false,
    }));
  };
  const openSearch = () => {
    setstate((prev) => ({
      ...prev,
      searchBar: !state.searchBar,
    }));
  };

  useEffect(() => {
    if (Cookies.get("cart")) {
      fetchCheckout(Cookies.get("cart"));
    } else {
      createCheckout();
    }
  }, []);

  useEffect(() => {
    if (Object.keys(state.checkout).length !== 0) {
      Cookies.set("cart", state.checkout.id);
    }
    if (state.disabledButtons.length !== 0) {
      localStorage.setItem("buttons", JSON.stringify(state.disabledButtons));
    }
  }, [state.checkout]);

  useEffect(() => {
    if (state.disabledButtons.length !== 0) {
      localStorage.setItem("buttons", JSON.stringify(state.disabledButtons));
    }

    console.log(JSON.parse(localStorage.getItem("buttons")));
  }, [state.disabledButtons]);

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
        openMenuSidebar: openMenuSidebar,
        closeMenuSidebar: closeMenuSidebar,
        openSearch: openSearch,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
}

const ShopConsumer = ShopContext.Consumer;

export { ShopContext, ShopConsumer };

export default Utility;
