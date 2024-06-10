import { Component73 } from ".";

export default {
  title: "Components/Component73",
  component: Component73,
  argTypes: {
    property1: {
      options: ["variant-2", "variant-3", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "variant-2",
    className: {},
    divClassName: {},
    text: "Join Online Session",
  },
};
