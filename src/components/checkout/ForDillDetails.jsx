import React, { useEffect } from "react";
import { gsap } from "gsap";
import { SplitText } from "@/plugins";
import TeamDetails from "../../../public/assets/imgs/team/detail.jpg";
import Image from "next/image.js";

const ForDillDetails = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let tHero = gsap.context(() => {
        let char_come = document.querySelectorAll(".animation__char_come");

        char_come.forEach((char_come) => {
          let split_char = new SplitText(char_come, { type: "chars, words" });
          gsap.from(split_char.chars, {
            duration: 1,
            x: 70,
            autoAlpha: 0,
            stagger: 0.05,
          });
        });
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="team__detail pt-140">
        <div className="container line pb-140">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-8 offset-lg-0 offset-md-2">
              <div className="team__member-img">
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={TeamDetails}
                  alt="Team Member Picture"
                  // data-speed="0.5"
                />
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
              <div className="sec-title-wrapper pt-120">
                <h2 className="team__member-name-7 animation__char_come">
                  Сотрудничество <br />
                  с дилерами
                </h2>
                <h3 className="team__member-role-7 animation__char_come">
                  {/* UX Researcher and Instructor, at
                  <span> Axtra</span> */}
                </h3>
                <p>
                  Lorem Ipsum (читается как «Лорем Ипсум») — это текст-заглушка, текст-рыба, обычно используемый дизайнерами и веб-разработчиками для демонстрации того, в каких местах сайта или приложения будет находиться текст, какого он будет объема и каким шрифтом написан. Текст состоит из латинских слов и фраз, но не несет в себе какого-то особого смысла.
                </p>
                <p>
                  Lorem Ipsum (читается как «Лорем Ипсум») — это текст-заглушка, текст-рыба, обычно используемый дизайнерами и веб-разработчиками для демонстрации того, в каких местах сайта или приложения буде какого-то особого смысла.
                </p>
              </div>
              <div className="team__member-work">
                <h4 className="work-title">Соц. сети :</h4>
                <ul>
                  {/* <li>
                    <a href="#">Vk</a>
                  </li> */}
                  <li>
                    <a href="https://t.me/nazarettyLight">Tg</a>
                  </li>
                  {/* <li>
                    <a href="#">Inst</a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForDillDetails;
