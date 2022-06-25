import React from "react";
import { useState } from "react";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [pwConfirm, setPwConfirm] = useState("");

  return (
    <div>
      <form>
        <label htmlFor="">이름</label>
        <input
          type="name"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
        />
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
        <label htmlFor="">비밀번호 재확인</label>
        <input
          type="password"
          value={pwConfirm}
          onChange={(e) => setPwConfirm(e.currentTarget.value)}
        />
        <button onClick={1}>회원가입</button>
      </form>
    </div>
  );
};
