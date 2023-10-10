"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next-intl/client";
import { ChangeEvent, useTransition } from "react";

export default function LocaleSwitcher() {
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("Header");
  function changeLocale(nextLocale: string) {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }
  const it = (width: string | number, height: string | number, t = false) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3 2"
      width={width}
      height={height}
      className={`rounded-sm overflow-hidden ${t && "-translate-y-[2px]"}`}
    >
      <path fill="#009246" d="M0 0h1v2H0z" />
      <path fill="#fff" d="M1 0h1v2H1z" />
      <path fill="#ce2b37" d="M2 0h1v2H2z" />
    </svg>
  );
  const en = (
    width: string | number,
    height: string | number,
    t = false
  ): React.ReactNode => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={`rounded-sm overflow-hidden shrink-0 ${
        t && "-translate-y-[2px]"
      }`}
      viewBox="0 0 60 30"
    >
      <clipPath id="a">
        <path d="M0 0v30h60V0z" />
      </clipPath>
      <clipPath id="b">
        <path d="M30 15h30v15zv15H0zH0V0zV0h30z" />
      </clipPath>
      <g clipPath="url(#a)">
        <path fill="#012169" d="M0 0v30h60V0z" />
        <path stroke="#fff" strokeWidth="6" d="m0 0 60 30m0-30L0 30" />
        <path
          stroke="#C8102E"
          strokeWidth="4"
          d="m0 0 60 30m0-30L0 30"
          clipPath="url(#b)"
        />
        <path stroke="#fff" strokeWidth="10" d="M30 0v30M0 15h60" />
        <path stroke="#C8102E" strokeWidth="6" d="M30 0v30M0 15h60" />
      </g>
    </svg>
  );
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
    <div className="dropdown dropdown-bottom  dropdown-end  ">
      <label
        tabIndex={0}
        className="btn btn-ghost justify-center  items-center"
      >
        <span>{t("language")}</span>
        {eval(locale + "(16, 16, true)")}
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
        {["it", "en"].map((cur, i) => {
          return (
            <li key={i}>
              <button
                className="flex justify-between"
                onClick={() => changeLocale(cur)}
              >
                {eval(cur + "(30,20)")}
                {cur == "it" && "Italiano"}
                {cur == "en" && "English"}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/**
 * 
 *    <label>
      <p className="sr-only">{t("label")}</p>
      <select
        className="inline-flex appearance-none bg-transparent py-3 pl-2 pr-6"
        defaultValue={locale}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {["en", "de"].map((cur) => (
          <option key={cur} value={cur}>
            {t("locale", { locale: cur })}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute right-2 top-[8px]">⌄</span>
    </label>
 */
