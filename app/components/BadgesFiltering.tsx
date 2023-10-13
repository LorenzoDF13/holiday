"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {};

const BadgesFiltering = (props: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  const params = useSearchParams();
  const tipo = params.get("tipo") || "trilocale";
  const cambiaTipo = (tipo: String) => {
    router.push(`${pathname}?tipo=${tipo}`, { scroll: false });
  };

  return (
    <div className="max-w-screen-lg m-auto flex justify-center flex-wrap -translate-y-10 gap-3">
      <div
        onClick={() => cambiaTipo("monolocale")}
        className={`badge badge-lg badge-outline cursor-pointer ${
          "monolocale" == tipo && "badge-primary"
        }`}
      >
        monolocali
      </div>
      <div
        onClick={() => cambiaTipo("bilocale")}
        className={`badge badge-lg badge-outline cursor-pointer ${
          "bilocale" == tipo && "badge-primary"
        }`}
      >
        bilocali
      </div>
      <div
        onClick={() => cambiaTipo("trilocale")}
        className={`badge badge-lg badge-outline cursor-pointer ${
          "trilocale" == tipo && "badge-primary"
        }`}
      >
        trilocali
      </div>
      <div
        onClick={() => cambiaTipo("villini")}
        className={`badge badge-lg badge-outline cursor-pointer ${
          "villini" == tipo && "badge-primary"
        }`}
      >
        villini
      </div>
    </div>
  );
};

export default BadgesFiltering;
