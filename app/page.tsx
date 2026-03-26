import AboutSensei from "@/components/AboutSensei";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import PassesSection from "@/components/PassesSection";
import Timer from "@/components/Timer";
import FAQs from "@/components/FAQs";
import MapWidget from "@/components/MapWidget";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="">
      <NavBar />
      <Hero />
      <Timer />
      <AboutSensei />
      <PassesSection />
      <FAQs />
      <MapWidget />
      <Footer />
    </div>
  );
}
