import Image from "next/image";
import Link from "next/link";

const Instagram = ({ instagram }) => {
  return (
    <>
      <section className="woocomerce__instagram woocomerce-padding">
        <span className="woocomerce__instagram-subtitle">Follow Us</span>
        <h2 className="woocomerce__instagram-title">
          <Link href="#">@axtra.beauty</Link>
        </h2>

        <div className="woocomerce__instagram-wrapper">
          {instagram &&
            instagram.length &&
            instagram.map((el) => (
              <div key={el.id} className="woocomerce__instagram-item">
                <Link href="#">
                  <Image
                    priority={true}
                    width={210}
                    height={550}
                    style={{ height: "auto" }}
                    src={`/assets/imgs/${el.img}`}
                    alt="instagram img"
                  />
                </Link>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default Instagram;
