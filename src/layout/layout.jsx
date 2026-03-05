import { Outlet } from "react-router";
import { useState } from "react";
import Nav from "../components/nav/nav.jsx";
import Footer from "../components/footer/footer.jsx";
import SocialLinks from "../components/social_links/social_links.jsx";

export default function Layout() {
  const [isBgEnabled, setIsBgEnabled] = useState(true);

  return (
    <>
      <Nav onBgToggle={setIsBgEnabled} />
      <SocialLinks />
      <Outlet context={{ isBgEnabled }} />
      <Footer />
    </>
  );
}
