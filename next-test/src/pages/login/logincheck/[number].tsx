import { useRouter } from "next/router";

const LoginCheck = () => {
  const router = useRouter();

  const { number } = router.query;
  return <div>하이여{number}</div>;
};

export default LoginCheck;
