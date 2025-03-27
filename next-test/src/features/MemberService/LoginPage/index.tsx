import { useRouter } from "next/router";
import { LoginpageStyled } from "./styled";

const LoginPage = () => {
  const router = useRouter();
  const number = 24;
  return (
    <LoginpageStyled>
      <div
        onClick={() => {
          router.push(`/login/logincheck/${number}`);
        }}
      >
        로그인 페이지 입니다.
      </div>
    </LoginpageStyled>
  );
};

export default LoginPage;
