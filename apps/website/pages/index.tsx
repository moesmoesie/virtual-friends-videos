import type { NextPage } from "next";
import Home from "ui/pages/Home";
import { GetStaticProps } from "next";
import { HomeProps } from "ui/pages/Home/Home";

const HomePage: NextPage<HomeProps> = (props) => {
  return <Home label={props.label} />;
};

export default HomePage;

export const getStaticProps: GetStaticProps<HomeProps> = async (context) => {
  return {
    props: {
      label: "Hello World!",
    },
  };
};
