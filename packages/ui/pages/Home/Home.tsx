import React from "react";
import HelloWorld from "../../components/HelloWorld";

export interface HomeProps {
  label: String;
}

const HomeProps: React.FC<HomeProps> = (props) => {
  return (
    <div className="grid h-screen w-screen place-content-center">
      <HelloWorld label={props.label} />
    </div>
  );
};

export default HomeProps;
