import { Outlet } from "react-router";
import Nav from "../components/nav/nav.jsx";
import Footer from "../components/footer/footer.jsx";

export default function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}
