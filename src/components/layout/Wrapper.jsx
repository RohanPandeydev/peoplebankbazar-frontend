import { Outlet } from "react-router-dom";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";

const Wrapper = () => {
  return (
    <>
      <Header />
      <main className="h-full">
        <Outlet /> {/* All page content will render here */}
      </main>
      <Footer />
    </>
  );
};

export default Wrapper;
