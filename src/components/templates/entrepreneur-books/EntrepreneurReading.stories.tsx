import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import EntrepreneurReading from "./EntrepreneurReading";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "template/enterprenur-books/EntrepreneurReading",
  component: EntrepreneurReading,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof EntrepreneurReading>;

const Template: ComponentStory<typeof EntrepreneurReading> = (args) => (
  <EntrepreneurReading {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  value:'to'
};
