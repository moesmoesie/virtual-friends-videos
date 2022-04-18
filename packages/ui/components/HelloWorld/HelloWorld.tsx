import React from "react";

export interface HelloWorldProps {
  label: String;
}

const HelloWorld: React.FC<HelloWorldProps> = ({ label }) => {
  return <button className="text-xl">{label}</button>;
};

export default HelloWorld;
