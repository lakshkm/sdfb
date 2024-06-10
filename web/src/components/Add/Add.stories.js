import { Add } from ".";

export default {
  title: "Components/Add",
  component: Add,
  argTypes: {
    style: {
      options: ["round", "sharp", "filled", "two-tone", "outlined"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    style: "round",
  },
};
