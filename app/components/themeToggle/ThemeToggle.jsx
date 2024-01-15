import style from "./themeToggle.module.css";

import Image from "next/image";

const ThemeToggle = () => {
  return (
    <div className={style.container}>
      <Image src="/moon.png" alt="" width={14} height={14} />
      <div className={style.ball}></div>
      <Image src="/sun.png" alt="" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
