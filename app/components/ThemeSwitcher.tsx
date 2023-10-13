"use client";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

import React, { MutableRefObject, useEffect, useState } from "react";

type Props = {};

const ThemeSwitcher = (props: Props) => {
  const { theme, setTheme } = useTheme();
  const t = useTranslations("Header");
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <label tabIndex={0} className={`btn btn-ghost m-1 `}>
        {t("theme")}
        {
          <svg
            width="12px"
            height="12px"
            className="hidden h-2 w-2 fill-current opacity-60 sm:inline-block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2048 2048"
          >
            <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
          </svg>
        }
      </label>
    );
  }
  const changeTheme = (theme: string) => {
    //document.querySelector("html")!.dataset.theme = theme;
    //localStorage?.setItem("theme", theme);
    setTheme(theme);
  };
  const Button = ({ theme: t, titolo }: { theme: string; titolo: string }) => {
    return (
      <button onClick={() => changeTheme(t)}>
        {t == theme && vCheck()}
        {titolo}
      </button>
    );
  };
  const vCheck = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="currentColor"
        className=" h-3 w-3 shrink-0"
      >
        <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
      </svg>
    );
  };
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className={`btn btn-ghost m-1 `}>
        {t("theme")}
        {
          <svg
            width="12px"
            height="12px"
            className="hidden h-2 w-2 fill-current opacity-60 sm:inline-block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2048 2048"
          >
            <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
          </svg>
        }
      </label>
      <ul
        tabIndex={0}
        className="p-2 dropdown-content shadow z-[1] menu rounded-box text-base-content bg-base-100"
      >
        <li>
          <Button theme="light" titolo="Chiaro" />
        </li>
        <li>
          <Button theme="dark" titolo="Scuro" />
        </li>
      </ul>
    </div>
  );
};
export default ThemeSwitcher;
/*

<div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn m-1">
        Tema
      </label>
      <ul
        tabIndex={0}
        className="p-2 dropdown-content shadow z-[1] menu rounded-box  bg-base-100"
      >
        <li>
          <Button theme="light" titolo="Chiaro" />
        </li>
        <li>
          <Button theme="dark" titolo="Scuro" />
        </li>
        <li>
          <Button theme="aqua" titolo="Mare" />
        </li>
        <li>
          <Button theme="winter" titolo="Inverno" />
        </li>
      </ul>
    </div>

    */
