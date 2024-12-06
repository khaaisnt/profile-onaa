import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Mail from "./components/Mail";
import Navbar from "./components/Navbar";
import Quote from "./components/Quote";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Mail />
      <Quote />
      <Footer />
    </main>
  );
}
