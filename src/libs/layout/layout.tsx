import BackToTop from "@/components/backToTop";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { LayoutProps } from "@/types/page";
import { useEffect } from "react";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  useEffect(() => {
    // @ts-expect-error: AOS is loaded globally from CDN
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
