import BackToTop from "@/components/backToTop";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { LayoutProps } from "@/types/page";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  useEffect(() => {
    if (typeof AOS !== "undefined") AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1">{children}</main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export { Layout };
