import { Meta, StoryObj } from "@storybook/react";
import { SignIn } from ".";
import test from "./story.test";

export default {
  title: "Pages/SignIn",
  component: SignIn,
  args: {},
  argTypes: {},
} as Meta;

export const Default: StoryObj = {
  play: ({ canvasElement }) => test(canvasElement),
};
