import About from "@/components/About/About";
import CTA from "@/components/CTA/CTA";
import Features from "@/components/Features/Features";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Menu from "@/components/Menu/Menu";
import Navbar from "@/components/Navbar/Navbar";
import Subscribe from "@/components/Subscribe/Subscribe";
import Testimonials from "@/components/Testimonials/Testimonials";

export default function Page() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <About />
        <Menu />
        <Features />
        <CTA />
        <Testimonials />
        <Subscribe />
        <Footer />
      </div>
    </>
  );
}
