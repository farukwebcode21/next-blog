import React from "react";
import style from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
const CardList = () => {
  return (
    <div className={style.container}>
      CardList
      <Pagination />
    </div>
  );
};

export default CardList;
