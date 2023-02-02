import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
const PopularProducts = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".popular-products-active", {
        itemSelector: ".item",
        //    layoutMode: "fitRows",
        percentPosition: true,
        masonry: {
          columnWidth: ".item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    //     return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "current" : "");
  return (
    <Fragment>
      <div className="row align-items-center pb-30">
        <div className="col-lg-6 wow fadeInUp delay-0-2s">
          <div className="section-title mb-20">
            <span className="sub-title mb-20">Items based on your recent views</span>
            <h2>Recomended for you</h2>
          </div>
        </div>
      </div>
      <div className="row popular-products-active">
        <div className="col-xl-3 col-lg-4 col-sm-6 item fruits bread">
          <div className="product-item wow fadeInUp delay-0-2s">
            <span className="offer">53 Off</span>
            <div className="image">
              <img src="assets/images/products/product1.png" alt="Product" />
            </div>
            <div className="content">
              <div className="ratting">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <h5>
                <Link href="/product-details">Organic Brocolli</Link>
              </h5>
              <span className="price">
                <del>25</del>
                <span>18</span>
              </span>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-sm-6 item seafish vegetables">
          <div className="product-item wow fadeInUp delay-0-3s">
            <div className="image">
              <img src="assets/images/products/product2.png" alt="Product" />
            </div>
            <div className="content">
              <div className="ratting">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <h5>
                <Link href="/product-details">Fresh Carrots</Link>
              </h5>
              <span className="price">
                <span>49.58</span>
              </span>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-sm-6 item bread fruits">
          <div className="product-item wow fadeInUp delay-0-4s">
            <span className="offer bg-red">sale</span>
            <div className="image">
              <img src="assets/images/products/product3.png" alt="Product" />
            </div>
            <div className="content">
              <div className="ratting">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <h5>
                <Link href="/product-details">Organic Brocolli</Link>
              </h5>
              <span className="price">
                <del>25</del>
                <span>18</span>
              </span>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-sm-6 item vegetables">
          <div className="product-item wow fadeInUp delay-0-5s">
            <span className="offer">20 Off</span>
            <div className="image">
              <img src="assets/images/products/product4.png" alt="Product" />
            </div>
            <div className="content">
              <div className="ratting">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <h5>
                <Link href="/product-details">Chiken Egg</Link>
              </h5>
              <span className="price">
                <del>55</del>
                <span>36</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default PopularProducts;
