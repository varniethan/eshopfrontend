import Link from "next/link";
import { Fragment, useState } from "react";
import { sidebarToggle } from "../utils";
import  Searchbar  from "../components/Searchbar";
import { Blog, Contact, Home, PagesDasktop, Portfolio, Shop } from "./Menus";
import MobileMenu from "./MobileMenu";

const Header = ({ header }) => {
  switch (header) {
    case 1:
      return <Header1 />;
    case 2:
      return <Header2 />;
    case 3:
      return <Header3 />;

    default:
      return <DefaultHeader />;
  }
};
export default Header;

const SearchBtn = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <Fragment>
      <button className="far fa-search" onClick={() => setToggle(!toggle)} />
      <form
        onSubmit={(e) => e.preventDefault()}
        action="#"
        className={`${toggle ? "" : "hide"}`}
      >
        <input
          type="text"
          placeholder="Search"
          className="searchbox"
          required=""
        />
        <button type="submit" className="searchbutton far fa-search" />
      </form>
    </Fragment>
  );
};
const DaskTopMenu = () => (
  <ul className="navigation clearfix d-none d-lg-flex">
    <li className="dropdown">
      <a href="#">Home</a>
      <ul>
        <Home />
      </ul>
      <div className="dropdown-btn">
        <span className="fas fa-chevron-down" />
      </div>
    </li>
    <li className="dropdown">
      <a href="#">pages</a>
      <ul>
        <PagesDasktop />
      </ul>
      <div className="dropdown-btn">
        <span className="fas fa-chevron-down" />
      </div>
    </li>
    <li className="dropdown">
      <a href="#">portfolio</a>
      <ul>
        <Portfolio />
      </ul>
      <div className="dropdown-btn">
        <span className="fas fa-chevron-down" />
      </div>
    </li>
    <li className="dropdown">
      <a href="#">blog</a>
      <ul>
        <Blog />
      </ul>
      <div className="dropdown-btn">
        <span className="fas fa-chevron-down" />
      </div>
    </li>
    <li className="dropdown">
      <a href="#">shop</a>
      <ul>
        <Shop />
      </ul>
      <div className="dropdown-btn">
        <span className="fas fa-chevron-down" />
      </div>
    </li>
    <Contact />
  </ul>
);

const Nav = () => {
  const [nav, setNav] = useState(false);
  return (
    <nav className="main-menu navbar-expand-lg mobile-nav">
      <div className="navbar-header">
        <div className="mobile-logo my-15">
          <Link href="/">
            <a>
              <img src="assets/images/logos/logo.png" alt="Logo" title="Logo" />
              <img
                src="assets/images/logos/logo-white.png"
                alt="Logo"
                title="Logo"
              />
            </a>
          </Link>
        </div>
        {/* Toggle Button */}
        <button
          type="button"
          className="navbar-toggle"
          data-toggle="collapse"
          data-target=".navbar-collapse"
          onClick={() => setNav(!nav)}
        >
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
      </div>
      <div className={`navbar-collapse collapse clearfix ${nav ? "show" : ""}`}>
        <DaskTopMenu />
        <MobileMenu />
      </div>
    </nav>
  );
};

const DefaultHeader = () => (
  <header className="main-header">
    <div className="header-top-wrap bg-light-green text-white py-10">
      <div className="container-fluid">
        <div className="header-top">
          <div className="row">
            <div className="col-xl-7 col-lg-6">
              <div className="top-left">
                <ul>
                  <li>
                    <i className="far fa-envelope" /> <b>Email Us :</b>{" "}
                    <a href="mailto:support@gmail.com">support@gmail.com</a>
                  </li>
                  <li>
                    <i className="far fa-clock" /> <b>Working Hours :</b> Monday
                    - Friday, 08 am - 05 pm
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="top-right text-lg-right">
                <ul>
                  <li>
                    <i className="far fa-phone" /> <b>Call :</b>{" "}
                    <a href="callto:+012(345)67899">+012 (345) 678 99</a>
                  </li>
                  <li>
                    <div className="social-style-one">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*Header-Upper*/}
    <div className="header-upper">
      <div className="container-fluid clearfix">
        <div className="header-inner d-flex align-items-center">
          <div className="logo-outer">
            <div className="logo">
              <Link href="/">
                <a>
                  <img
                    src="assets/images/logos/logo.png"
                    alt="Logo"
                    title="Logo"
                  />
                </a>
              </Link>
            </div>
          </div>
          <div className="nav-outer clearfix">
            {/* Main Menu */}
            <Nav />
            {/* Main Menu End*/}
          </div>
          {/* Menu Button */}
          <div className="menu-icons">
            {/* Nav Search */}
            <div className="nav-search py-15">
              <SearchBtn />
            </div>
            <button className="cart">
              <i className="far fa-shopping-basket" />
              <span>5</span>
            </button>
            <button className="user">
              <i className="far fa-user-circle" />
            </button>
            <Link href="/contact">
              <a className="theme-btn">
                Consultations <i className="fas fa-angle-double-right" />
              </a>
            </Link>
            {/* menu sidbar */}
            <div className="menu-sidebar" onClick={() => sidebarToggle()}>
              <button>
                <i className="far fa-ellipsis-h" />
                <i className="far fa-ellipsis-h" />
                <i className="far fa-ellipsis-h" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*End Header Upper*/}
  </header>
);
const Header1 = () => (
  <header className="main-header menu-absolute">
    {/*Header-Upper*/}
    <div className="header-upper">
      <div className="container-fluid clearfix">
        <div className="header-inner d-flex align-items-center">
          <div className="logo-outer">
            <div className="logo">
              <Link href="/">
                <a>
                  <img
                    src="assets/images/logos/logo.png"
                    alt="Logo"
                    title="Logo"
                  />
                </a>
              </Link>
            </div>
          </div>
          <div className="nav-outer clearfix">
            {/* Main Menu */}

            {/* Main Menu End*/}
          </div>
          {/* Menu Button */}
          <div className="menu-icons">
          <button>
              Sell
            </button>
            <button className="heart">
              <i className="far fa-heart" />
            </button>
            <button className="cart">
              <i className="far fa-shopping-basket" />
              <span>5</span>
            </button>
            <button className="bell">
              <i className="far fa-bell" />
            </button>
            <button className="user">
              <i className="far fa-user-circle" />
            </button>
          </div>
        </div>
      </div>
    </div>
    {/*End Header Upper*/}

    
    {/*Start Big Search Box*/}
    <section>
      <br/>
      <br/>
      <br/>
      <Searchbar/>
    </section>
    {/*END Big Search Box*/}
    <br/>

    {/*Header-Upper*/}
    {/* <header className="main-header header-three menu-absolute"> */} 
    <div id="sc4">
        <div id="sc41">
          <a href="">
              <p> Home </p>
          </a>
      </div>
      <div id="sc42">
          <a href="">
              <p>Saved </p>
          </a>
      </div>
      <div id="sc43">
          <a href="MElectronics.html">
              <p onclick="">Electronics</p>
          </a>

          <div id="sc431">
              <div>
                  <h3>Most popular categories</h3>
                  <hr/>
                  <a href="#">
                      <p class="shubham11">Cell phones and accessories</p>
                  </a>
                  <a href="#">
                      <p class="shubham11">Video games and consoles</p>
                  </a>
                  <a href="#">
                      <p class="shubham11">Computers and tablets</p>
                  </a>
                  <a href="#">
                      <p class="shubham11">Cameras and photos</p>
                  </a>
                  <a href="#">
                      <p class="shubham11">Camera drones</p>
                  </a>
                  <a href="#">
                      <p class="shubham11">Asian Brands</p>
                  </a>
                  <a href="#">
                      <p class="shubham11">Smart home</p>
                  </a>
              </div>




              <div>
                  <h3>More categories</h3>
                  <hr/>
                  <a href="#">
                      <p class="shubham11">Apple</p>
                  </a>
                  <a href="#">
                      <p class="shubham11">Samsung</p>
                  </a>
                  <a href="#">
                      <p class="shubham11">Xiaomi</p>
                  </a>
                  <a href="#">
                      <p class="shubham11">Portable audio and headphones</p>
                  </a>
                  <a href="#">
                      <p class="shubham11">Smart watches</p>
                  </a>
                  <a href="#">
                      <p class="shubham11">Deals</p>
                  </a>
                  <a href="#">
                      <p class="shubham11">Sell on eBay</p>
                  </a>
              </div>
              <div>
                  <img src="https://ir.ebaystatic.com/cr/v/c1/NAO-45026-19392.jpeg" alt=""/>
              </div>

          </div>
      </div>
      <div id="sc44">
          <a href="MFashion.html">
              <p>Fashion</p>
          </a>
          <div id="sc441">
              <div>
                  <h3>Most popular categories</h3>
                  <hr/>
                  <a href="#">
                      <p class="shubham11">Footwear </p>
                  </a>
                  <a href="#">
                      <p class="shubham11">Women's clothing</p>
                  </a>
                  <a href="#">
                      <p class="shubham11">Footwear for women</p>
                  </a>
                  <a href="#">
                      <p class="shubham11">Clothes for men</p>
                  </a>
                  <a href="#">
                      <p class="shubham11">Men's footwear</p>
                  </a>
                  <a href="#">
                      <p class="shubham11">Watches</p>
                  </a>
                  <a href="#">
                      <p class="shubham11">Jewelry</p>
                  </a>
              </div>


              <div>
                  <h3>More categories</h3>
                  <hr/>
                  <a href="#">
                      <p class="shubham11">Accessories for men</p>
                  </a>
                  <a href="#">
                      <p class="shubham11">Accessories for women</p>
                  </a>
                  <a href="#">
                      <p class="shubham11">Bags and wallets for women</p>
                  </a>
                  <a href="#">
                      <p class="shubham11">Mens sunglasses</p>
                  </a>
                  <a href="#">
                      <p class="shubham11">Womens sunglasess</p>
                  </a>
                  <a href="#">
                      <p class="shubham11">Sneakers</p>
                  </a>
                  <a href="#">
                      <p class="shubham11">Deals </p>
                  </a>
                  <a href="#">
                      <p class="shubham11">Sell on eBay</p>
                  </a>

              </div>
              <div>
                  <img src="https://ir.ebaystatic.com/cr/v/c1/NAO-45026-19393-v2.jpeg" alt=""/>
              </div>
          </div>
      </div>
      <div id="sc45">
          <a href="beauty.html">
              <p>Health & Beauty</p>
          </a>
          <div id="sc451">
              <div>
                  <h3>Most popular categories</h3>
                  <hr/>
                  <a href="beauty.html">
                      <p class="shubham11">Beauty</p>
                  </a>
                  <a href="#">
                      <p class="shubham11">Makeup</p>
                  </a>
                  <a href="health.html">
                      <p class="shubham11">Health</p>
                  </a>
                  <a href="#">
                      <p class="shubham11">K-Beauty</p>
                  </a>
                  <a href="#">
                      <p class="shubham11"> Manicure and pedicure</p>
                  </a>
                  <a href="#">
                      <p class="shubham11">Hair products</p>
                  </a>
                  <a href="#">
                      <p class="shubham11">Skin products</p>
                  </a>
                  <a href="#">
                      <p class="shubham11">Orthopedic products</p>
                  </a>

              </div>
              <div>
                  <h3>More categories</h3>
                  <hr/>
                  <a href="#">
                      <p class="shubham11">Vitamins and food supplements</p>
                  </a>
                  <a href="#">
                      <p class="shubham11">Shaving and waxing</p>
                  </a>
                  <a href="#">
                      <p class="shubham11"> Bath and personal hygiene</p>
                  </a>
                  <a href="#">
                      <p class="shubham11">Oral hygiene</p>
                  </a>
                  <a href="#">
                      <p class="shubham11">Massagers</p>
                  </a>
                  <a href="#">
                      <p class="shubham11">Deals</p>
                  </a>
                  <a href="#">
                      <p class="shubham11">Sell on eBay</p>
                  </a>
              </div>
              <div>
                  <img src="https://ir.ebaystatic.com/cr/v/c1/NAO-45026-19394.jpeg" alt=""/>
              </div>

          </div>
      </div>
      <div id="sc46">
          <a href="">
              <p>Home & Garden</p>
          </a>
          <div id="sc461">

              <div>
                  <h3>Most popular categories</h3>
                  <hr/>
                  <a href="#">
                      <p class="shubham11">Workshop Tools and Equipment</p>
                  </a>
                  <a href="#">
                      <p class="shubham11">Patio, garden and outdoors</p>
                  </a>
                  <a href="#">
                      <p class="shubham11">Home improvement</p>
                  </a>
                  <a href="#">
                      <p class="shubham11">Kitchen, dining and bar</p>
                  </a>
                  <a href="#">
                      <p class="shubham11">Lamps, lights and fans</p>
                  </a>
                  <a href="#">
                      <p class="shubham11">Interior decoration</p>
                  </a>
                  <a href="#">
                      <p class="shubham11">Home organization</p>
                  </a>
                  <a href="#">
                      <p class="shubham11">Home appliances</p>
                  </a>

              </div>
              <div>
                  <h3>More categories</h3>
                  <hr/>
                  <a href="#">
                      <p class="shubham11">Toys</p>
                  </a>
                  <a href="#">
                      <p class="shubham11">Pets</p>
                  </a>
                  <a href="#">
                      <p class="shubham11">Crafts</p>
                  </a>
                  <a href="moniArt.html">
                      <p class="shubham11">Art supplies</p>
                  </a>
                  <a href="#">
                      <p class="shubham11">Musical instruments</p>
                  </a>
                  <a href="#">
                      <p class="shubham11">Jewelry and beads</p>
                  </a>
                  <a href="#">
                      <p class="shubham11">Deals</p>
                  </a>
                  <a href="#">
                      <p class="shubham11">Sell on eBay</p>
                  </a>

              </div>
              <div>
                  <img src="https://ir.ebaystatic.com/cr/v/c1/NAO-45026-19395.jpeg" alt=""/>
              </div>

          </div>
      </div>
      <div id="sc47">
          <a href="cycling.html">
              <p>Sports</p>
          </a>
          <div id="sc471">

              <div>
                  <h3>Most popular categories</h3>
                  <hr/>
                  <a href="#">
                      <p class="shuhbam11">Cycling</p>
                  </a>
                  <a href="#">
                      <p class="shuhbam11">Fitness, running and yoga</p>
                  </a>
                  <a href="#">
                      <p class="shuhbam11">Fitness Tech</p>
                  </a>
                  <a href="#">
                      <p class="shuhbam11">Fishing</p>
                  </a>
                  <a href="#">
                      <p class="shuhbam11">Camping</p>
                  </a>
                  <a href="#">
                      <p class="shuhbam11">Scooters</p>
                  </a>
                  <a href="#">
                      <p class="shuhbam11">Team sports</p>
                  </a>
              </div>
              <div>
                  <h3>More categories</h3>
                  <hr/>
                  <a href="#">
                      <p class="shuhbam11">Watersports</p>
                  </a>
                  <a href="#">
                      <p class="shuhbam11">Winter sports</p>
                  </a>
                  <a href="#">
                      <p class="shuhbam11">Box and MMA</p>
                  </a>
                  <a href="#">
                      <p class="shuhbam11">Swimming</p>
                  </a>
                  <a href="#">
                      <p class="shuhbam11">GPS & Running Watches</p>
                  </a>
                  <a href="#">
                      <p class="shuhbam11">Garmin</p>
                  </a>
                  <a href="#">
                      <p class="shuhbam11">Deals</p>
                  </a>
                  <a href="#">
                      <p class="shuhbam11">Sell on eBay</p>
                  </a>

              </div>
              <div>
                  <img src="https://ir.ebaystatic.com/cr/v/c1/NAO-45026-19396.jpeg" alt=""/>
              </div>

          </div>
      </div>
      <div id="sc48">
          <a href="">
              <p>Collectibles and Art</p>
          </a>
          <div id="sc481">

              <div>
                  <h3>Most popular categories</h3>
                  <hr/>
                  <a href="collectiblesAndArt.html">
                      <p>Collectibles</p>
                  </a>
                  <a href="#">
                      <p class="shubham11">Art</p>
                  </a>
                  <a href="actionAndFigure.html">
                      <p>Action figures</p>
                  </a>
                  <a href="collectibles.html">
                      <p>Cartoon characters</p>
                  </a>
                  <a href="entertainment.html">
                      <p>Movie and TV characters</p>
                  </a>
                  <a href="#">
                      <p class="shubham11">Diecast</p>
                  </a>
                  <a href="recordAndPlayer.html">
                      <p>Musical memorabilia</p>
                  </a>
              </div>
              <div>
                  <h3>More categories</h3>
                  <hr/>
                  <a href="actionAndFigure.html">
                      <p>Sports memorabilia</p>
                  </a>
                  <a href="actionAndFigure.html">
                      <p>Trading card games</p>
                  </a>
                  <a href="antiques.html">
                      <p>Antiques</p>
                  </a>
                  <a href="comics.html">
                      <p>Comics</p>
                  </a>
                  <a href="stamps.html">
                      <p>Funko pop</p>
                  </a>
                  <a href="vintage.html">
                      <p>Deals</p>
                  </a>
                  <a href="#">
                      <p class="shubham11">Sell on eBay</p>
                  </a>
              </div>
              <div>
                  <img src="https://ir.ebaystatic.com/cr/v/c1/NAO-45026-19393-v2.jpeg" alt=""/>
              </div>

          </div>
      </div>
      <div id="sc5">
          <a href="Nandudeals.html">
              <p>Deals</p>
          </a>
      </div>
      <div id="sc53">
          <a href="Sell.html">
              <p>Sell</p>
          </a>
          <div id="sc531">

              <div>
                  <h3></h3>
                  <hr/>
                  <a href="">
                      <p>Create listing</p>
                  </a>
                  <a href="">
                      <p>Apply as a business</p>
                  </a>
                  <a href="">
                      <p>Seller center</p>
                  </a>
                  <a href="">
                      <p></p>
                  </a>
                  <a href="">
                      <p></p>
                  </a>
                  <a href="">
                      <p></p>
                  </a>
                  <a href="">
                      <p></p>
                  </a>
              </div>
              <div>
                  <h3> </h3>
                  <hr/>
                  <a href="">
                      <p> </p>
                  </a>
                  <a href="">
                      <p> </p>
                  </a>
                  <a href="">
                      <p></p>
                  </a>
                  <a href="">
                      <p></p>
                  </a>
                  <a href="">
                      <p></p>
                  </a>
                  <a href="">
                      <p></p>
                  </a>
                  <a href="">
                      <p></p>
                  </a>
              </div>
              <div>
                  <img src="https://ir.ebaystatic.com/cr/v/c1/NAO-45026-19400.jpeg" alt=""/>
              </div>

          </div>
      </div>
    </div>

    <div id="sc3">
    <hr/>
    </div>
        {/* <div className="search-header container-fluid clearfix">
          <div className="header-inner d-flex align-items-center">
              <div class="container">
                <div class="row">
                  <div class="col-sm">
                    Home
                  </div>
                  <div class="col-sm">
                    Watchlist
                  </div>
                  <div class="col-sm">
                    Home & Garden
                  </div>
                  <div class="col-sm">
                    Electronics
                  </div>
                  <div class="col-sm">
                    Fashion
                  </div>
                  <div class="col-sm">
                    Sports & Leisure
                  </div>
                  <div class="col-sm">
                    Health & Beauty
                  </div>
                  <div class="col-sm">
                    Toys
                  </div>
                  <div class="col-sm">
                    Motors
                  </div>
                  <div class="col-sm">
                    Home Entertainment
                  </div>
                  <div class="col-sm">
                    Collectables
                  </div>
                  <div class="col-sm">
                    Refurbished
                  </div>
                  <div class="col-sm">
                    Local
                  </div>
                </div>
              </div> */}
           
            {/* menu sidbar */}
          {/* </div>
          <br/>
        
      </div> */}
    {/*End Header Upper*/}
    {/* </header> */}
  </header>
);

          
const Header2 = () => (
  <header className="main-header header-two">
    <div className="header-top-wrap">
      <div className="container">
        <div className="header-top bg-light-green text-white py-10">
          <div className="row">
            <div className="col-xl-7 col-lg-6">
              <div className="top-left">
                <ul>
                  <li>
                    <i className="far fa-envelope" /> <b>Email Us :</b>{" "}
                    <a href="mailto:support@gmail.com">support@gmail.com</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="top-right text-lg-right">
                <ul>
                  <li>
                    <i className="far fa-phone" /> <b>Call :</b>{" "}
                    <a href="callto:+012(345)67899">+012 (345) 678 99</a>
                  </li>
                  <li>
                    <div className="social-style-one">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-youtube" />
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*Header-Upper*/}
    <div className="header-upper">
      <div className="container rel clearfix">
        <div className="header-inner d-flex align-items-center">
          <div className="logo-outer">
            <div className="logo">
              <Link href="/">
                <a>
                  <img
                    src="assets/images/logos/logo.png"
                    alt="Logo"
                    title="Logo"
                  />
                  <img
                    src="assets/images/logos/logo-white.png"
                    alt="Logo"
                    title="Logo"
                  />
                </a>
              </Link>
            </div>
          </div>
          <div className="nav-outer clearfix">
            {/* Main Menu */}
            <Nav />
            {/* Main Menu End*/}
          </div>
          {/* Menu Button */}
          <div className="menu-icons">
            {/* Nav Search */}
            <div className="nav-search py-15">
              <button className="far fa-search" />
              <form
                onSubmit={(e) => e.preventDefault()}
                action="#"
                className="hide"
              >
                <input
                  type="text"
                  placeholder="Search"
                  className="searchbox"
                  required=""
                />
                <button type="submit" className="searchbutton far fa-search" />
              </form>
            </div>
            <button className="cart">
              <i className="far fa-shopping-basket" />
            </button>
            {/* menu sidbar */}
            <div className="menu-sidebar" onClick={() => sidebarToggle()}>
              <button>
                <i className="far fa-ellipsis-h" />
                <i className="far fa-ellipsis-h" />
                <i className="far fa-ellipsis-h" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*End Header Upper*/}
  </header>
);
const Header3 = () => (
  <header className="main-header header-three menu-absolute">
    <div className="header-top-wrap bgc-primary py-10">
      <div className="container-fluid">
        <div className="header-top px-0">
          <ul>
            <li>25% OFF Upcoming Product</li>
            <li>100% Fresh &amp; natural foods</li>
            <li>free shipping over $99</li>
            <li>money back guarantee</li>
            <li>cash on delivery</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="header-middle py-15">
      <div className="container-fluid">
        <div className="header-middle-inner">
          <div className="menu-middle-left">
            <select name="currentcy" id="currentcy">
              <option value="USD">USD</option>
              <option value="BDT">BDT</option>
              <option value="EURO">EURO</option>
            </select>

            <select name="language" id="language">
              <option value="English">English</option>
              <option value="Bengali">Bengali</option>
              <option value="Arabic">Arabic</option>
            </select>

            <div className="follower">
              <i className="fab fa-facebook" />
              <a href="#">250k+ Followers</a>
            </div>
          </div>
          <div className="logo-outer">
            <div className="logo">
              <Link href="/">
                <a>
                  <img
                    src="assets/images/logos/logo-two.png"
                    alt="Logo"
                    title="Logo"
                  />
                </a>
              </Link>
            </div>
          </div>
          {/* Menu Button */}
          <div className="menu-icons">
            {/* Nav Search */}
            <form
              onSubmit={(e) => e.preventDefault()}
              action="#"
              className="nav-search"
            >
              <input
                type="text"
                placeholder="Search here"
                className="searchbox"
                required=""
              />
              <button type="submit" className="searchbutton far fa-search" />
            </form>
            <button className="cart">
              <i className="far fa-shopping-basket" />
              <span>5</span>
            </button>
            <button className="user">
              <i className="far fa-user-circle" />
            </button>
            <button className="heart">
              <i className="far fa-heart" />
            </button>
          </div>
        </div>
      </div>
    </div>
    {/*Header-Upper*/}
    <div className="header-upper px-0">
      <div className="container-fluid clearfix">
        <div className="header-inner d-flex align-items-center">
          <div className="nav-outer clearfix">
            {/* Main Menu */}
            <Nav />
            {/* Main Menu End*/}
          </div>
          {/* menu sidbar */}
          <div className="menu-sidebar" onClick={() => sidebarToggle()}>
            <button>
              <i className="far fa-ellipsis-h" />
              <i className="far fa-ellipsis-h" />
              <i className="far fa-ellipsis-h" />
            </button>
          </div>
        </div>
      </div>
    </div>
    {/*End Header Upper*/}
  </header>
);
