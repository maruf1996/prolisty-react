import { Outlet } from "react-router-dom";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";

const LayoutOne = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer title="layout-one" />
    </>
  );
};

export default LayoutOne;
