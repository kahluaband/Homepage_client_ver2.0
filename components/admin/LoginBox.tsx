import React from 'react';

const LoginBox = () => {
  return (
    <div>
      <div>
        <form>
          <span>ID</span>
          <input type="text" placeholder="ID를 입력해주세요." />
          <span>ID</span>
          <input type="password" placeholder="비밀번호를 입력해주세요." />
        </form>
      </div>
      <div>로그인</div>
    </div>
  );
};

export default LoginBox;
