"use client";
import { FaUmbrellaBeach, FaCity } from "react-icons/fa";
import { PiParkFill } from "react-icons/pi";
import AOS from "aos";
import "aos/dist/aos.css";
import Card from "../components/Card";
import TipologieTable from "../components/TipologieTable";
import PhotoGallery from "../components/PhotoGallery";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    //document.getElementById("enter")!.style.height = "0";
    AOS.init();
    //setTimeout(() => {
    //  document.getElementById("logo").style.display = "none";
    //}, 100);
  }, []);
  return (
    <main>
      {/* <div
        id="enter"
        className="fixed flex justify-center items-center   prose max-w-none  top-0 w-screen h-screen bg-base-300 delay-200 transition-all duration-500 z-50 overflow-hidden "
      >
        <div id="logo" className="flex justify-center items-center">
          <svg
            className="w-20 pr-4 pb-8"
            viewBox="10.3605 6.7817 20.128 16.3908"
            xmlns="http://www.w3.org/2000/svg"
            fill="hsl(var(--a))"
          >
            <g
              transform="matrix(-0.02338400110602379, 0, 0, -0.017436999827623367, 31.214716422777116, 23.695568437808273)"
              stroke="none"
            >
              <path d="M372 953 c-47 -23 -80 -67 -99 -133 l-17 -58 -52 -5 c-62 -6 -128 -38 -150 -72 -19 -30 -29 -94 -19 -132 l7 -28 19 37 c27 52 80 90 128 92 22 0 42 -2 45 -5 3 -3 -4 -25 -16 -49 -30 -61 -32 -167 -2 -206 33 -45 41 -40 47 35 3 38 13 83 22 100 18 36 59 66 79 58 21 -8 76 -187 84 -279 9 -93 0 -123 -52 -163 -36 -27 -76 -82 -76 -104 0 -8 53 -11 180 -11 165 0 180 1 180 18 0 30 -38 81 -85 114 -51 36 -53 47 -29 128 16 53 77 130 103 130 20 0 12 -74 -14 -115 -30 -48 -30 -55 -6 -55 23 0 60 34 96 88 15 23 31 42 36 42 17 0 38 -47 48 -109 6 -35 12 -65 14 -67 2 -2 12 5 22 16 39 43 35 142 -9 235 -19 41 -23 61 -19 106 6 63 -8 118 -36 143 -17 16 -18 14 -24 -41 -4 -43 -12 -63 -28 -75 -20 -17 -22 -17 -50 7 -46 38 -117 45 -159 14 -12 -8 -12 -12 -2 -16 27 -11 70 -54 82 -83 11 -27 10 -32 -16 -63 -16 -18 -42 -61 -58 -95 -31 -65 -46 -78 -46 -39 0 12 -14 87 -30 167 -16 80 -30 155 -30 167 0 51 103 86 178 60 40 -14 42 -14 42 5 0 44 -86 88 -173 88 -12 0 -33 3 -46 7 -37 10 -23 66 31 120 l42 43 -54 0 c-30 0 -70 -8 -88 -17z" />
            </g>
          </svg>
          <h1 className="p-0">Holiday Marines</h1>
        </div>
      </div> */}
      <div>
        <PhotoGallery />
        <div className=" prose m-auto text-center my-12 w-full max-w-screen-lg">
          <h1 data-aos="zoom-out">
            Residence{" "}
            <span className="to-accent from-primary inline-block bg-gradient-to-r text-transparent bg-clip-text">
              Green Marine
            </span>
          </h1>
        </div>
        <section
          data-aos="zoom-in-up"
          className="my-12   overflow-x-scroll md:overflow-x-hidden  max-w-screen-lg px-4  mx-auto "
        >
          <div className="flex min-w-[768px] justify-center">
            <Card
              title="Spiaggia"
              content="i nostri fantastici appartamenti sono fronte mare e con accesso super rapido alla spiaggia"
              icon={FaUmbrellaBeach}
            />
            <div className="divider   divider-horizontal"></div>
            <Card
              title="Parco Recintato"
              content="Sono due residence completamente recintati con grande parco condominiale direttamente sul mare, confinante con la splendida spiaggia."
              icon={PiParkFill}
            />
            <div className="divider  divider-horizontal"></div>
            <Card
              title="Area Turistica"
              content="I nostri residence sono in una zona ad alta frequentazione vicino a ristoranti bar e locali"
              icon={FaCity}
            />
          </div>
        </section>
        <section
          data-aos="fade-up"
          className="prose max-w-screen-lg px-4 m-auto"
        >
          <h2>Descrizione</h2>
          <p className="text-justify">
            Silvi Marina direttamente sul mare, affitti appartamenti in
            residence a Silvi Marina per le vacanze. Sono due residence
            completamente recintati con grande parco condominiale direttamente
            sul mare, confinante con la splendida spiaggia. Si trovano nella
            zona sud del paese, proprio nella zona con maggiore ricettività
            turistica. Ideale per le famiglie, per i giovani e per chi cerca
            nella vacanza tranquillità e riposo. Divertimenti e opportunità di
            svago a pochissima distanza dai residences. Negozi, bar e ristoranti
            all’esterno del residence stesso. In queste strutture sono
            disponibili monolocali 3 letti – bilocali 4/5 letti – trilocali 6/7
            letti.
          </p>
        </section>
        <section
          data-aos="fade-up"
          className="max-w-screen-lg px-4 m-auto  rounded-md my-12"
        >
          <TipologieTable></TipologieTable>
        </section>

        <section
          data-aos="flip-up"
          className="prose max-w-screen-lg px-4 mt-12 mx-auto"
        >
          <h2>Location</h2>
          <div className="m-auto    rounded-md overflow-hidden">
            <iframe
              title="google maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2939.855161173671!2d14.133727475930764!3d42.53713137117689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1331a365699665e3%3A0xf6296fe791fa6ce9!2sGreen%20Marine%201!5e0!3m2!1sit!2sit!4v1695977729251!5m2!1sit!2sit"
              width="100%"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </div>
    </main>
  );
}
