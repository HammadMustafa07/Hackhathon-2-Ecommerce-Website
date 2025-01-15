import Navbar from "@/components/home/Navbar";
import Frame143  from "@/components/listingsproduct/Frame143";
import Filters from "@/components/listingsproduct/Filters";
import Listings1 from "@/components/listingsproduct/Listings1";
import Listings2 from "@/components/listingsproduct/Listings2"
import Footer from "@/components/home/Footer";


export default function listingsproduct() {
    return (
        <div className="">
            <Navbar />
            <Frame143/>
            <Filters/>
            <Listings1/>
            <Listings1/>
            <Listings1/>
            <Listings2/>
            <Footer/>
        </div>
    )
}