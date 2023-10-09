"use client";
import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import Link from "next-intl/link";
import LocaleSwitcher from "./LocaleSwitcher";
import { useTranslations } from "next-intl";

type Props = {};
const Header = (props: Props) => {
  const t = useTranslations("Header");
  return (
    <header>
      <div className="max-w-screen-lg px-4 m-auto">
        <div className="navbar   p-0 ">
          <div className="flex-1 ">
            <Link href={"/"} className="btn btn-ghost normal-case text-xl">
              <svg
                className="w-12"
                viewBox="10.3605 6.7817 20.128 16.3908"
                fill="hsl(var(--p))"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  transform="matrix(-0.02338400110602379, 0, 0, -0.017436999827623367, 31.214716422777116, 23.695568437808273)"
                  stroke="none"
                >
                  <path d="M372 953 c-47 -23 -80 -67 -99 -133 l-17 -58 -52 -5 c-62 -6 -128 -38 -150 -72 -19 -30 -29 -94 -19 -132 l7 -28 19 37 c27 52 80 90 128 92 22 0 42 -2 45 -5 3 -3 -4 -25 -16 -49 -30 -61 -32 -167 -2 -206 33 -45 41 -40 47 35 3 38 13 83 22 100 18 36 59 66 79 58 21 -8 76 -187 84 -279 9 -93 0 -123 -52 -163 -36 -27 -76 -82 -76 -104 0 -8 53 -11 180 -11 165 0 180 1 180 18 0 30 -38 81 -85 114 -51 36 -53 47 -29 128 16 53 77 130 103 130 20 0 12 -74 -14 -115 -30 -48 -30 -55 -6 -55 23 0 60 34 96 88 15 23 31 42 36 42 17 0 38 -47 48 -109 6 -35 12 -65 14 -67 2 -2 12 5 22 16 39 43 35 142 -9 235 -19 41 -23 61 -19 106 6 63 -8 118 -36 143 -17 16 -18 14 -24 -41 -4 -43 -12 -63 -28 -75 -20 -17 -22 -17 -50 7 -46 38 -117 45 -159 14 -12 -8 -12 -12 -2 -16 27 -11 70 -54 82 -83 11 -27 10 -32 -16 -63 -16 -18 -42 -61 -58 -95 -31 -65 -46 -78 -46 -39 0 12 -14 87 -30 167 -16 80 -30 155 -30 167 0 51 103 86 178 60 40 -14 42 -14 42 5 0 44 -86 88 -173 88 -12 0 -33 3 -46 7 -37 10 -23 66 31 120 l42 43 -54 0 c-30 0 -70 -8 -88 -17z" />
                </g>
              </svg>
              <span className="hidden md:inline ">Holiday</span>
            </Link>
          </div>
          <div className="flex  justify-end">
            <div className=" hidden sm:block ">
              <div className="dropdown dropdown-bottom   ">
                <label tabIndex={0} className="btn btn-ghost ">
                  {t("rent")}
                  <svg
                    width="12px"
                    height="12px"
                    className="hidden h-2 w-2 fill-current opacity-60 sm:inline-block"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 2048 2048"
                  >
                    <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="menu   dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-base-content rounded-box "
                >
                  <li>
                    <button>{t("apartments")}</button>
                  </li>
                  <li>
                    <button>{t("pricing")}</button>
                  </li>
                  <li>
                    <button>{t("availability")}</button>
                  </li>
                </ul>
              </div>
              <button className="btn btn-ghost">{t("on sale")}</button>
              <button className="btn btn-ghost">{t("place")}</button>
              <button className="btn btn-ghost">{t("contacts")}</button>
              <ThemeSwitcher />
              <LocaleSwitcher />
            </div>
            <div className="dropdown dropdown-bottom dropdown-end sm:hidden">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <button>{t("rent")}</button>
                  <ul>
                    <li>
                      <button>{t("apartments")}</button>
                    </li>
                    <li>
                      <button>{t("pricing")}</button>
                    </li>
                    <li>
                      <button>{t("availability")}</button>
                    </li>
                  </ul>
                </li>
                <li>
                  <button>{t("on sale")}</button>
                </li>

                <li>
                  <button>{t("place")}</button>
                </li>
                <li>
                  <button>{t("contacts")}</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
