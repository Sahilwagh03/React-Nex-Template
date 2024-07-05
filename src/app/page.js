import CallToAction from "@/components/Home/CTA/CallToAction";
import Features from "@/components/Home/Features/Features";
import Footer from "@/components/Home/Footer/Footer";
import Help from "@/components/Home/Help/Help";
import Hero from "@/components/Home/Hero/Hero";
import Offers from "@/components/Home/Offers/Offers";
import Review from "@/components/Home/Review/Review";
import ServiceShowcase from "@/components/Home/ServiceShowcase/ServiceShowcase";


export default function Home() {
  return (
    <main>
      <Hero/>
      <Help/>
      <Features/>
      <ServiceShowcase/>
      <Offers/>
      <Review/>
      <CallToAction/>
      <Footer/>
    </main>
  );
}
