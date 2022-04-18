import React from "react";
import { ComponentStory, type ComponentMeta } from "@storybook/react";
import Component from "./HelloWorld";

export default {
  title: "HelloWorld",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const HelloWorld = Template.bind({});
HelloWorld.args = {
  label: "Hello World!",
};
