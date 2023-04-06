import Title from "./Title";

export default {
  title: "Demo/Title",
  component: Title,

  argTypes: {
    handleClick: { action: "onClick" },
  },
};

export const Green = {
  args: {
    label: "This is in red",
    color: "green",
    backgroundColor: "lightgreen",
    padding: "10px",
  },
};

export const Red = {
  args: {
    label: "This is in red",
    color: "red",
    backgroundColor: "lightgrey",
    padding: "4px",
  },
};
