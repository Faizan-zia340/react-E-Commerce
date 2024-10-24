import Layout from "../../components/layout/Layout";
import Herosection from "../../components/herosection/Herosection";
import Category from "../../components/category/Category";
import HomePageProductCard from "../../components/homePageProductCard/HomePageProductCard";
import Track from "../../components/track/Track";
import Testimonial from "../../components/testimonial/Testimonial";
import Footer from "../../components/footer/Footer";

const HomePage = () => {
    return(
        <Layout>
            <Herosection/>
            <Category/>
            <HomePageProductCard/>
           <Track/>
           <Testimonial/>
           
            </Layout>

    );
};
export default HomePage;        