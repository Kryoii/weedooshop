import React from "react";

const MenShopContext = new React.createContext({});

function MenShop(props) {
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
    <MenShopContext.Provider
      value={{
        ...toggles,
        setSelect: setSelect,
      }}
    >
      {props.children}
    </MenShopContext.Provider>
  );
}

const ShopConsumer = MenShopContext.Consumer;

export { MenShopContext, ShopConsumer };

export default MenShop;
