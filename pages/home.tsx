import React from "react";
import { useRouter } from "next/router";
import { HomeContainer } from "../features";
const HomePage = () => {
  const router = useRouter();

  React.useEffect(() => {}, []);

  return <HomeContainer />;
};

export default HomePage;
