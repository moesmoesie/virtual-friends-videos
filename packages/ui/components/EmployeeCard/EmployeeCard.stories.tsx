import React from "react";
import { ComponentStory, type ComponentMeta } from "@storybook/react";
import EmployeeCard from "./EmployeeCard";

export default {
  title: "Employee Card",
  component: EmployeeCard,
} as ComponentMeta<typeof EmployeeCard>;

const Template: ComponentStory<typeof EmployeeCard> = (args) => (
  <EmployeeCard
    name="John Caboosy"
    company="A Virtual Friend"
    phone="+31634XXX366"
    image={require("./assets/employee1.png")}
    mail="johncaboosy@virtualfriends.dev"
    github="https://github.com/moesmoesie"
    linkedIn="https://www.linkedin.com/in/mustafadarwesh/"
  />
);

export const EmployeeCard1 = Template.bind({});

EmployeeCard1.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/WUYty59y1om6I6ejBzXVER/Virtual-Friends-Video-Components?node-id=3%3A39",
  },
};

EmployeeCard1.storyName = "Employee Card";
