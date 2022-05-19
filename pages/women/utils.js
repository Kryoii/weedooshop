import React from "react";

const WomenShopContext = new React.createContext({});

function WomenShop(props) {
  const [toggles, setToggles] = React.useState({
    shortSleeve: false,
    longSleeve: false,
    hats: false,
  });
  const setSelect = (type) => {
    switch (type) {
      case "Short Sleeve":
        setToggles((prev) => ({
          ...prev,
          shortSleeve: !prev.shortSleeve,
        }));
        break;
      case "Long Sleeve":
        setToggles((prev) => ({
          ...prev,
          longSleeve: !prev.longSleeve,
        }));
        break;
      case "Hats":
        setToggles((prev) => ({
          ...prev,
          hats: !prev.hats,
        }));
        break;
    }
  };
  return (
    <WomenShopContext.Provider
      value={{
        ...toggles,
        setSelect: setSelect,
      }}
    >
      {props.children}
    </WomenShopContext.Provider>
  );
}

const ShopConsumer = WomenShopContext.Consumer;

export { WomenShopContext, ShopConsumer };

export default WomenShop;
