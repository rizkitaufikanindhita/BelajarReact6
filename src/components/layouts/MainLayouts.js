import { Fragment } from "react";
import NavigationLayouts from "./NavigationLayouts";

const MainLayouts = ({ children }) => {
  return (
    <Fragment>
      <NavigationLayouts />
      {children}
    </Fragment>
  );
};

export default MainLayouts;
