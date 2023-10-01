"use client";
import React, { MutableRefObject, useEffect, useRef } from "react";

import { FaXmark, FaCheck } from "react-icons/fa6";
type Props = {};

const TipologieTable = (props: Props) => {
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
            <th>Caratteristiche</th>
            <th className="">
              <span>Monolocale</span>
            </th>
            <th>
              <span>Bilocale</span>
            </th>
            <th>
              <span>Trilocale</span>
            </th>
            <th>
              <span>Trilocale 2</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr className="hover:bg-base-300 ">
            <td>Posti letto</td>
            <td>3</td>
            <td>4/5</td>
            <td>6/7</td>
            <td>6/7</td>
          </tr>
          {/* row 2 */}
          <tr className="hover:bg-base-300 ">
            <td>Angolo cottura</td>
            <td>{si()}</td>
            <td>{si()}</td>
            <td>{si()}</td>
            <td>{si()}</td>
          </tr>
          {/* row 3 */}
          <tr className="hover:bg-base-300 ">
            <td>Soggiorno, pranzo, divano letto doppio</td>
            <td>{si()}</td>
            <td>{si()}</td>
            <td>{si()}</td>
            <td>{si()}</td>
          </tr>
          {/* row 4 */}
          <tr className="hover:bg-base-300 ">
            <td>Letto singolo</td>
            <td>{si()}</td>
            <td>{no()}</td>
            <td>{no()}</td>
            <td>{no()}</td>
          </tr>
          {/* row 5 */}
          <tr className="hover:bg-base-300 ">
            <td>Camera matrimoniale</td>
            <td>{no()}</td>
            <td>{si()}</td>
            <td>{si()}</td>
            <td>{si()}</td>
          </tr>
          {/* row 6 */}
          <tr className="hover:bg-base-300 ">
            <td>Balcone Attrezzato</td>
            <td>{si()}</td>
            <td>{si()}</td>
            <td>{si()}</td>
            <td>{si()}</td>
          </tr>
          {/* row 7 */}
          <tr className="hover:bg-base-300 ">
            <td>Camera con due letti singoli</td>
            <td>{no()}</td>
            <td>{no()}</td>
            <td>{si()}</td>
            <td>{si()}</td>
          </tr>
          {/* row 8 */}
          <tr className="hover:bg-base-300 ">
            <td>Bagni</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>2</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TipologieTable;
