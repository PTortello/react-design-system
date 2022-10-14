import { Meta, StoryObj } from "@storybook/react";
import { rest } from "msw";
import { SERVICES } from "constants/services";
import { SignIn } from ".";
import test from "./story.test";

export default {
  title: "Pages/SignIn",
  component: SignIn,
  args: {},
  argTypes: {},
  parameters: {
    msw: {
      handlers: [
        rest.post(SERVICES.SESSIONS, (req, res, ctx) => {
          return res(
            ctx.json({
              message: "Login realizado",
            })
          );
        }),
      ],
    },
  },
} as Meta;

export const Default: StoryObj = {
  play: ({ canvasElement }) => test(canvasElement),
};
