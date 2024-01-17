import React from "react";
import style from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>
        <b>Hey, lama dev here !</b> Discourer my stories and creative idea.
      </h1>
      <div className={style.post}>
        <div className={style.imgContainer}>
          <Image src="/p1.jpeg" alt="image" fill className={style.image} />
        </div>
        <div className={style.textContainer}>
          <h1 className={style.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing porro tempora
            alias in laudantium?
          </h1>
          <p className={style.postDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            praesentium error qui ipsum, doloribus eius totam dolore
            consequuntur aperiam perferendis nisi commodi eos reiciendis
            doloremque laborum unde accusantium expedita nesciunt aspernatur ad
            labore magni atque suscipit vero! Quod amet deleniti perspiciatis
            cupiditate tenetur inventore ipsam cumque,
          </p>
          <button>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
