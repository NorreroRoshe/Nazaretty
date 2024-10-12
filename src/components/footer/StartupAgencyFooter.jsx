import Link from "next/link";
import React from "react";
import logoWhite2 from "../../../public/assets/imgs/logo/site-logo-white-2.png";
import logoBlack from "../../../public/assets/imgs/logo/logo-black.png";
import DigitalMarketingLogo from "../logo/DigitalMarketingLogo";
import {
  DigitalAgencyBrand
} from "@/components";
import Image from "next/image";

const StartupAgencyFooter = () => {
  return (
    <>

      <footer className="footer__area-6">
            <DigitalAgencyBrand />
        <div className="container g-0 line_4">
          <div className="line-col-4">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className="row">
            <div className="col-xxl-12">
              <div className="footer__top-6 pt-80 pb-100">
                <div className="footer__item-6">
                  <DigitalMarketingLogo />
                  <div style={{marginBottom: '30px'}}></div>
                  {/* <Image
                    priority
                    style={{ width: "auto", height: "auto" }}
                    className="footer__logo logo-light"
                    src={logoWhite2}
                    alt="Footer Logo"
                  />
                  <Image
                    priority
                    style={{ width: "auto", height: "auto" }}
                    className="footer__logo logo-dark"
                    src={logoBlack}
                    alt="Footer Logo"
                  /> */}
                  <p>
                    Мы, компания которая не боится рисковать <br /> и мы реализовываем самые безумные идеи в жизнь в сфере освещения.
                  </p>
                </div>

                <div className="footer__item-6">
                  <h2 className="footer__item-title">Информация</h2>
                  <ul className="footer__link-6">
                    <li>
                      <Link href="/">Главная</Link>
                    </li>
                    <li>
                      <Link href="/about">О компании</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">Каталог</Link>
                    </li>
                    <li>
                      <Link href="#">Коллекции</Link>
                    </li>
                    <li>
                      <Link href="/collaboration">Сотрудничество</Link>
                    </li>
                    <li>
                      <Link href="/quality-standards-1">Стандарты</Link>
                    </li>
                    <li>
                      <Link href="/Contacts">Где купить</Link>
                    </li>
                  </ul>
                </div>

                <div className="footer__item-6">
                  <h2 className="footer__item-title">Конакты</h2>
                  <ul className="footer__info-6">
                    {/* <li>Улица Норика Батерфаяна, д. 31</li> */}
                    <li>
                      <a href="tel:79645200022" className="phone">
                        +7&nbsp;(964) - 520 -0022
                      </a>
                    </li>
                    <li>
                      <a href="mailto:info@buildyexample.com">
                        info@nazaretty.ru
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <div className="footer__item-6">
                  <h2 className="footer__item-title">Новости и распродажа</h2>
                  <form action="#">
                    <div className="footer__newsletter-6">
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Введите ваш e-mail"
                      />
                      <button type="submit">
                        <i className="fa-solid fa-arrow-right"></i>
                      </button>
                    </div>
                  </form>
                  
                  <ul className="footer__social-6 mt-30">
                    <li>
                      <a href="#">
                        <span>
                          <i className="fa-brands fa-telegram"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>
                          <i className="fa-brands fa-whatsapp"></i>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span>
                          <i className="fa-brands fa-instagram"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div> */}
              </div>
              <div className="footer__btm-6">
                <div className="row">
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-5">
                    <div className="footer__copyright-6">
                      <p>
                        © 2024 | Nazaretty <br />{" "}
                      </p>
                    </div>
                  </div>
                  <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-7">
                    <div className="footer__nav">
                      <ul className="footer-menu menu-anim">
                        <li>
                          <Link href="/privacy-policy">Политика конфеденциальности</Link>
                        </li>
                        <li>
                          <Link href="/public-oferta">Условия пользования</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default StartupAgencyFooter;
