import React from "react";
import { Button } from "./Button";
import { Header } from "./Header";
import { useNavigate } from "react-router-dom";

export const Heading = () => {
  const navigate = useNavigate();

  const loginHandler = () => {
    navigate("/login");
  };

  const registerHandler = () => {
    navigate("/register");
  };

  return (
    <div>
      <Header
        headerText={"홈페이지입니다."}
        firstChild={<Button text={"로그인"} onClick={loginHandler} />}
        secondChild={<Button text={"회원가입"} onClick={registerHandler} />}
      />
    </div>
  );
};
