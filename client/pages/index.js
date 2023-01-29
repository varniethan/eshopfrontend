import dynamic from "next/dynamic";
import Link from "next/link";
import { Nav, Tab} from "react-bootstrap";
import Slider from "react-slick";
import ClientLogoSlider from "../src/components/ClientLogoSlider";
import { HomeSlider1 } from "../src/components/HomeSlider";
import  Carousel  from "../src/components/Carousel";
import CustomerReviews from "../src/components/slider/CustomerReviews";
import PhotoGallery from "../src/components/slider/PhotoGallery";
import Layout from "../src/layout/Layout";
import { productActive } from "../src/sliderProps";;

const PopularProducts = dynamic(
  () => import("../src/components/istotope/PopularProducts"),
  {
    ssr: false,
  }
);

const MunfimCountdown = dynamic(
  () => import("../src/components/MunfimCountdown"),
  {
    ssr: false,
  }
);



const Index = () => {
  return (
    <Layout header={1}>
      {/*Offer Images */}
      <section>
        <Carousel />
      </section>
      {/*End Offer Images */}

       


      {/* Product Section Start */}
      <section className="shop-area-three rel z-1 py-50">
        <div className="container-fluid">
          <PopularProducts />
        </div>
      </section>
      {/* Product Section End */}

      {/* Offer Banners Start */}
      <section className="offer-banners-area">
        <div className="container-fluid">
        <div className="col-lg-6 wow fadeInUp delay-0-2s">
          <div className="section-title mb-20">
            <span className="sub-title mb-20">Find great deals</span>
            <h2>Deals for you</h2>
          </div>
        </div>
        <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="offer-banner-item color-two wow fadeInUp delay-0-2s">
                <div className="content">
                  <span className="sub-title">35% Off Foods</span>
                  <h4>Organic Vegetables</h4>
                  <p>Best Foods For Your Family</p>
                  <Link href="/shop-grid">
                    <a className="theme-btn style-two">
                      Shop Now <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
                <div className="image">
                  <img
                    src="assets/images/offers/offer-banner1.png"
                    alt="Offer Banner"
                  />
                </div>
                <img
                  className="offer-bg"
                  src="assets/images/offers/offer-baner-bg1.png"
                  alt="Offer BG"
                />
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="offer-banner-item wow fadeInUp delay-0-4s">
                <div className="content">
                  <span className="sub-title">35% Off Foods</span>
                  <h4>Fresh Organic Fruits</h4>
                  <p>Best Foods For Your Family</p>
                  <Link href="/shop-grid">
                    <a className="theme-btn style-two">
                      Shop Now <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
                <div className="image">
                  <img
                    src="assets/images/offers/offer-banner2.png"
                    alt="Offer Banner"
                  />
                </div>
                <img
                  className="offer-bg"
                  src="assets/images/offers/offer-baner-bg2.png"
                  alt="Offer BG"
                />
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="offer-banner-item color-three wow fadeInUp delay-0-6s">
                <div className="content">
                  <span className="sub-title">35% Off Foods</span>
                  <h4>Ripe Strawberries</h4>
                  <p>Best Foods For Your Family</p>
                  <Link href="/shop-grid">
                    <a className="theme-btn style-two">
                      Shop Now <i className="fas fa-angle-double-right" />
                    </a>
                  </Link>
                </div>
                <div className="image">
                  <img
                    src="assets/images/offers/offer-banner3.png"
                    alt="Offer Banner"
                  />
                </div>
                <img
                  className="offer-bg"
                  src="assets/images/offers/offer-baner-bg3.png"
                  alt="Offer BG"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Offer Banners End */}

      {/* Special Offer Start */}
      <section className="special-offer-three">
        <div className="container-fluid">
          <div
            className="special-offer-three-inner rel z-1 bgs-cover py-80"
            style={{
              backgroundImage: "url(assets/images/offers/offer-bg.jpg)",
            }}
          >
            <div className="special-offer-content text-center wow fadeInUp delay-0-2s">
              <div className="section-title mb-30">
                <span className="sub-title mb-20">35% Off for Fruits</span>
                <h2>Special Deal Of This Week</h2>
              </div>
              <p>
                On the other hand we denounce with righteous indignation and
                dislike men who are beguiled and demoralized by the charms
              </p>
              <MunfimCountdown />
              <div className="count-down-btns mt-10">
                <Link href="/shop-grid">
                  <a className="theme-btn">
                    Shop Now <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
                <Link href="/about">
                  <a className="theme-btn style-three">
                    use code <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
            <img
              className="offer-bg"
              src="assets/images/offers/special-offer-bg-two.png"
              alt="Offer BG"
            />
          </div>
        </div>
      </section>
      {/* Special Offer End */}
     
      

     

     


      {/* Call To Action Area Start */}
      <section className="cta-area">
        <div className="container">
          <div
            className="cta-inner overlay text-white wow fadeInUp delay-0-2s"
            style={{
              backgroundImage: "url(assets/images/background/cta-bg.jpg)",
            }}
          >
            <div className="row align-items-center">
              <div className="col-lg-8">
                <div className="section-title mt-20 mb-15">
                  <span className="sub-title mb-15">Need Any Supports</span>
                  <h3>Get Our Quality Foods</h3>
                </div>
              </div>
              <div className="col-lg-4 text-lg-right">
                <Link href="/contact">
                  <a className="theme-btn btn-white my-15">
                    Get In Touch <i className="fas fa-angle-double-right" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Call To Action Area End */}

    </Layout>
  );
};
export default Index;
