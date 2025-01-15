import Navpanel from "@/components/about/Navpanel";
import Navbar from "@/components/about/Navbar";
import Productlisting from "@/components/productlisting/Productlisting";
import Proumightlike from "@/components/productlisting/Proumightlike";
import Branddifferent from "@/components/home/Branddifferent";
import Signup from "@/components/home/Signup";
import Footer from "@/components/about/Footer";

export default function Shoppingbasket() {
  return (
    <div className="">
      <Navpanel />
      <Navbar />
      <Productlisting />
      <Proumightlike />
      <Branddifferent />
      <Signup />
      <Footer />
    </div>
  );
}