import { useContext, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Canvas from "../canvas/Canvas";

// import Logo from "../../../public/assets/imgs/woocomerce/logo.png";
import Logo from "../../../public/assets/imgs/logo/site-logo-white-2.png";
import LogoBlack from "../../../public/assets/imgs/logo/logo-black.png";
import Bar from "../../../public/assets/imgs/woocomerce/bar.png";
import BarBlack from "../../../public/assets/imgs/woocomerce/bar-b.png";

import AppContext from "../AppContext";
import HeaderSearch from "../search/HeaderSearch";
import useSWR from "swr";
import { Preloader } from "..";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Header = ({ option }) => {
  const context = useContext(AppContext);

  const ofCanvasArea = useRef();
  const menuAnim = useRef();

  useEffect(() => {
    if (menuAnim.current) {
      menuAnimation();
    } else {
      setTimeout(() => {
        menuAnimation();
      }, 1000);
    }
  }, []);

  const menuAnimation = () => {
    let rootParent = menuAnim.current.children;
    for (let i = 0; i < rootParent.length; i++) {
      let firstParent = rootParent[i].children;
      firstParent[0].innerHTML =
        '<div class="menu-text"><span>' +
        firstParent[0].textContent.split("").join("</span><span>") +
        "</span></div>";
    }
  };

  const openCanvas = () => {
    ofCanvasArea.current.style.opacity = "1";
    ofCanvasArea.current.style.visibility = "visible";
  };

  const { data: allProducts, error } = useSWR(
    "../assets/json/allProducts.json",
    fetcher
  );
  if (error) return <div>Failed to load</div>;
  if (!allProducts)
    return (
      <div>
        <Preloader />
      </div>
    );

  const allData = allProducts.products;
  return (
    <>
      <header
        className={`${
          option == "black"
            ? "woocomerce__header"
            : "woocomerce__header absolute-header"
        }`}
      >
        <div className="woocomerce__header-inner shopfull">
          <div className="woocomerce__header-center">
            <div className="woocomerce__header-logo">
              <Link href={"/"}>
                <Image
                  priority
                  width={option == "black" ? 164 : 164}
                  height={option == "black" ? 20 : 20}
                  style={{ height: "auto" }}
                  src={option == "black" ? LogoBlack : Logo}
                  alt="Logo"
                />
              </Link>
            </div>
          </div>
          <div className="woocomerce__header-left">
            <div className="header__nav-2">
              <ul
                className={`${
                  option == "black"
                    ? "main-menu-3 menu-anim woocomerce-menu"
                    : "main-menu-3 menu-anim"
                }`}
                ref={menuAnim}
              >
                <li>
                  <Link href={"/"}>Главная</Link>
                </li>
                <li>
                  <Link href={"/shop/full"}>Каталог</Link>
                  {/* <ul className="main-dropdown">
                    <li>
                      <Link href={"/shop/full"}>Full Width</Link>
                    </li>
                    <li>
                      <Link href={"/shop/side-bar"}>Side Bar</Link>
                    </li>
                  </ul> */}
                </li>
                <li>
                  <Link href={"/collection/allCollection"}>Коллекции</Link>
                  {/* <ul className="main-dropdown">
                    <li>
                      <Link href={"/shop/203"}>Product Details</Link>
                    </li>
                    <li>
                      <Link href={"/category"}>Product Category</Link>
                    </li>
                  </ul> */}
                </li>
                <li className="has-megamenu">
                  {/* <Link href="/about">О&nbsp;нас</Link> */}
                  <Link href="/about">О &nbsp; компании</Link>
                  {/* <ul className="mega-menu-2">
                    <li>
                      <a>Woocommerce</a>
                      <ul>
                        <li>
                          <Link href={"/cart"}>Cart</Link>
                        </li>
                        <li>
                          <Link href={"/checkout"}>Checkout</Link>
                        </li>
                        <li>
                          <Link href={"/sign-up"}>Sign Up</Link>
                        </li>
                        <li>
                          <Link href={"/sign-in"}>Sign In</Link>
                        </li>
                        <li>
                          <Link href={"/reset"}>Reset Password</Link>
                        </li>
                        <li>
                          <Link href={"/profile"}>Profile</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>blog</a>
                      <ul>
                        <li>
                          <Link href={"/blog"}>blog</Link>
                        </li>
                        <li>
                          <Link href={"/blog-v2"}>blog v.2</Link>
                        </li>
                        <li>
                          <Link href={"/blog/301"}>blog details</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a>Others</a>
                      <ul>
                        <li>
                          <Link href={"/about"}>About</Link>
                        </li>
                        <li>
                          <Link href={"/faq"}>FAQs</Link>
                        </li>
                        <li>
                          <Link href={"/error"}>404</Link>
                        </li>
                      </ul>
                    </li>
                  </ul> */}
                </li>
                <li>
                  <Link href={"/collaboration"}>Сотрудничество</Link>
                  <ul className="main-dropdown">
                    <li>
                      <Link href={"/for-designers"}>Сотрудничество с дизайнеами</Link>
                    </li>
                    <li>
                      <Link href={"/for-retails"}>Сотрудничество с дилерами</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href={"/Contacts"}>Контакты</Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`${
              option == "black"
                ? "woocomerce__header-right"
                : "woocomerce__header-right home"
            }`}
          >
            <div className="woocomerce__header-cart">
              <div className="woocomerce__header-cartwrapper">
                <Link href={"/cart"}>
                  <i className="fa-solid fa-cart-shopping"></i>
                  <p>Cart</p>
                  <span>({context.rootState.cartData.length})</span>
                </Link>
              </div>
              {/* <div className="woocomerce__header-user">
                <Link href={"/profile"}>
                  <i className="fa-regular fa-user"></i>
                </Link>
              </div>
              <div className="woocomerce__header-search">
                <HeaderSearch allData={allData} />
              </div> */}
              <div onClick={openCanvas} className="woocomerce__header-search">
                <Image
                  priority
                  width={45}
                  style={{ height: "auto" }}
                  src={option == "black" ? BarBlack : Bar}
                  alt="Menu"
                  className="woocomerce__offcanvas"
                  id="open_offcanvas"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <Canvas ofCanvasArea={ofCanvasArea} />
    </>
  );
};

export default Header;
