"use client";
import React, { MutableRefObject, useEffect, useRef } from "react";

import { FaXmark, FaCheck } from "react-icons/fa6";
type Props = {
  header: string[];
  content: string[][];
};
const TipologieTable = ({ header, content }: Props) => {
  const theadRowRef = useRef<HTMLTableRowElement>(null);
  useEffect(() => {
    let children = theadRowRef?.current?.querySelectorAll(
      "th:not(:first-child)"
    );

    Array.from(children as NodeListOf<HTMLTableCellElement>, (child, i) => {
      child.addEventListener("mouseenter", () => {
        child.style.cursor = "pointer";
        highligth(i);
      });
      child.addEventListener("mouseleave", () => {
        reset();
      });
      const highligth = (i: number) => {
        document
          .querySelectorAll<HTMLTableCellElement>(`tbody td:not(:first-child)`)
          .forEach((e) => (e.style.opacity = "0.3"));
        document
          .querySelectorAll<HTMLTableCellElement>(
            `tbody tr td:nth-child(${i + 2})`
          )
          .forEach(
            (e) => (
              (e.style.fontSize = "18px"),
              (e.style.opacity = "1"),
              (e.style.fontWeight = "900")
            )
          );
      };
      const reset = () => {
        document
          .querySelectorAll<HTMLTableCellElement>(`tbody td`)
          .forEach((e) => e.removeAttribute("style"));
      };
    });
  }, []);
  const si = () => <FaCheck />;
  const no = () => <FaXmark />;
  return (
    <div className="overflow-x-auto">
      <table className="table lg:table-lg  bg-base-200">
        {/* head */}
        <thead className="font-extrabold text-base-content">
          <tr ref={theadRowRef}>
            {header.map((h, i) => {
              return <th key={i}>{h}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {content.map((e, i) => {
            return (
              <tr key={i + 999} className="hover:bg-base-300">
                {e.map((cell, j) => {
                  return (
                    <td key={i + j}>
                      {cell == "si" ? (
                        si()
                      ) : cell == "no" ? (
                        no()
                      ) : (
                        <span dangerouslySetInnerHTML={{ __html: cell }}></span>
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TipologieTable;
