import React from "react";
import { useEffect } from "react";
import { useState } from "react";
const DropdownContext = new React.createContext({});

function DropdownUtility(props) {
  const [values, setvalues] = useState({
    menPopover: false,
    womenPopover: false,
    accPopover: false,
  });

  const OpenPopover = (val, bool) => {
    switch (val) {
      case "Men":
        setvalues((prev) => ({
          ...prev,
          menPopover: bool,
        }));
        break;
      case "Women":
        setvalues((prev) => ({
          ...prev,
          womenPopover: bool,
        }));
        break;
      case "Acc":
        setvalues((prev) => ({
          ...prev,
          accPopover: bool,
        }));
        break;
    }
  };

  useEffect(() => {
    console.log(values);
  }, [values]);

  return (
    <DropdownContext.Provider value={{ ...values, OpenPopover: OpenPopover }}>
      {props.children}
    </DropdownContext.Provider>
  );
}

const ShopConsumer = DropdownContext.Consumer;

export { DropdownContext, ShopConsumer };

export default DropdownUtility;
