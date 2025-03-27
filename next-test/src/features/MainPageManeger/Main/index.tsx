import clsx from "clsx";
import { MainStyled } from "./styled";
import Main2 from "../Main2";
import { useState } from "react";
import { useRouter } from "next/router";

const Main = () => {
  const router = useRouter();
  const id = 2;
  return (
    <MainStyled className={clsx("main-wrap")}>
      <div className="main-title">메인페이지</div>
      <button
        onClick={() => {
          router.push("/login");
        }}
      >
        로그인 페이지 이동
      </button>
      <button
        onClick={() => {
          router.replace("https://www.naver.com");
        }}
      >
        네이버 페이지 이동
      </button>
      <button
        onClick={() => {
          router.replace("https://www.google.com");
        }}
      >
        구글 페이지 이동
      </button>
      <Main2 id={1} name={"asd"} age={0} gender="male" />
    </MainStyled>
  );
};
export default Main;
