import React from "react";

const PopupContext = React.createContext({
  closePopup: () => {},
});

export default PopupContext;
