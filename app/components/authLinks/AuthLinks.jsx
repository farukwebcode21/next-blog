import style from "./authLinks.module.css";
import Link from "next/link";

const AuthLinks = () => {
  // temporary

  const status = "notauthenticated";
  return (
    <>
      {status === "notauthenticated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <span className={style.links}>Logout</span>
        </>
      )}
    </>
  );
};

export default AuthLinks;
