import { Fragment } from "react";
import MainNavigation from "./main-navigation";
import Footer from "./footer";

const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main>{props.children}</main>
      <div id="notifications"></div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
