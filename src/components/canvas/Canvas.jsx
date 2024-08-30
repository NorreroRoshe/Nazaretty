import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import logoWhite2 from "../../../public/assets/imgs/logo/site-logo-white-2.png";
import Shape11 from "../../../public/assets/imgs/shape/11.png";
import Shape12 from "../../../public/assets/imgs/shape/12.png";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OffCanvasSearch from "../search/OffCanvasSearch";
import useSWR from "swr";
import { Preloader } from "..";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Canvas = ({ ofCanvasArea }) => {
  const [accordion, setAccordion] = useState(0);
  const [subAccordion, setSubAccordion] = useState(0);

  const headerTitle = useRef();
  useEffect(() => {
    if (typeof window !== "undefined") {
      let rootParent = headerTitle.current.children;
      for (let i = 0; i < rootParent.length; i++) {
        let firstParent = rootParent[i].children;
        for (let j = 0; j < firstParent.length; j++) {
          if (firstParent[j].className.includes("header_title")) {
            firstParent[j].children[0].innerHTML =
              '<div class="menu-text"><span>' +
              firstParent[j].children[0].textContent
                .split("")
                .join("</span><span>") +
              "</span></div>";
          }
        }
      }
    }
  }, []);
  const openData = (data) => {
    setAccordion(data);
  };
  const openSubData = (data) => {
    setSubAccordion(data);
  };
  const closeCanvas = () => {
    ofCanvasArea.current.style.opacity = "0";
    ofCanvasArea.current.style.visibility = "hidden";
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
      <div className="offcanvas__area" ref={ofCanvasArea}>
        <div className="offcanvas__body">
          <div className="offcanvas__left">
            <div className="offcanvas__logo">
              <Link href="/">
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={logoWhite2}
                  alt="Offcanvas Logo"
                />
              </Link>
            </div>
            {/* <div className="offcanvas__social">
              <h3 className="social-title">Follow Us</h3>
              <ul>
                <li>
                  <a href="#">Dribbble</a>
                </li>
                <li>
                  <a href="#">Behance</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">YouTube</a>
                </li>
              </ul>
            </div> */}
            {/* <div className="offcanvas__links">
              <ul>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/contact">contact</Link>
                </li>
                <li>
                  <Link href="/career">Career</Link>
                </li>
                <li>
                  <Link href="/blog">blog</Link>
                </li>
              </ul>
            </div> */}
          </div>
          <div className="offcanvas__mid">
            <div className="offcanvas__menu-wrapper">
              <nav className="offcanvas__menu">
                <ul className="menu-anim title" ref={headerTitle}>
                  <li>
                    <div className="header_title">
                      <Link href={"/"}>Главная</Link>
                    </div>
                  </li>
                  <li>
                    <div className="header_title d-flex">
                      <Link href={"/shop/full"}>Каталог</Link>
                      {/* <div className="accordian-btn">
                        {accordion === 2 ? (
                          <a onClick={() => openData(0)}>-</a>
                        ) : (
                          <a onClick={() => openData(2)}>+</a>
                        )}
                      </div> */}
                    </div>
                    {/* <ul
                      className="sub_title"
                      style={
                        accordion === 2 ? { display: "" } : { display: "none" }
                      }
                    >
                      <li>
                        <Link href={"/shop/full"}>Full Width</Link>
                      </li>
                      <li>
                        <Link href={"/shop/side-bar"}>Side Bar</Link>
                      </li>
                    </ul> */}
                  </li>
                  <li>
                    <div className="header_title d-flex">
                      <Link href={"/collection/allCollection"}>Коллекции</Link>
                      {/* <div className="accordian-btn">
                        {accordion === 3 ? (
                          <a onClick={() => openData(0)}>-</a>
                        ) : (
                          <a onClick={() => openData(3)}>+</a>
                        )}
                      </div> */}
                    </div>
                    {/* <ul
                      className="sub_title"
                      style={
                        accordion === 3 ? { display: "" } : { display: "none" }
                      }
                    >
                      <li>
                        <Link href={"/shop/202"}>Product Details</Link>
                      </li>
                      <li>
                        <Link href={"/category"}>Product Category</Link>
                      </li>
                    </ul> */}
                  </li>
                  <li>
                    <div className="header_title d-flex">
                      <Link href={"/about"}>О&nbsp;компании</Link>
                    </div>
                  </li>
                  <li>
                    <div className="header_title">
                      <Link href={"/collaboration"}>Сотрудничество</Link>
                    </div>
                  </li>
                  <li>
                    <div className="header_title">
                      <Link href={"/Contacts"}>Контакты</Link>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          {/* <div className="offcanvas__right">
            <div className="offcanvas__search">
              <OffCanvasSearch allData={allData} />
            </div>
            <div className="offcanvas__contact">
              <h3>Get in touch</h3>
              <ul>
                <li>
                  <a href="tel:02094980547">+(02) - 094 980 547</a>
                </li>
                <li>
                  <a href="mailto:info@extradesign.com">info@extradesign.com</a>
                </li>
                <li>230 Norman Street New York, QC (USA) H8R 1A1</li>
              </ul>
            </div>
            <Image
              priority
              style={{ width: "auto", height: "auto" }}
              src={Shape11}
              alt="shape"
              className="shape-1"
            />
            <Image
              priority
              style={{ width: "auto", height: "auto" }}
              src={Shape12}
              alt="shape"
              className="shape-2"
            />
          </div> */}
          <div className="offcanvas__close">
            <button type="button" onClick={closeCanvas}>
              <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Canvas;
