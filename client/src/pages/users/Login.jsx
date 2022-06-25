import React from "react";
import { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  return (
    <div>
      <form>
        <label htmlFor="">이메일</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <label htmlFor="">비밀번호</label>
        <input
          type="password"
          value={pw}
          onChange={(e) => setPw(e.currentTarget.value)}
        />

        <button onClick={1}>로그인</button>
      </form>
    </div>
  );
};
