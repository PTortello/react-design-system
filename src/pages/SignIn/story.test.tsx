import { userEvent, waitFor, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

export default async (canvasElement: HTMLElement) => {
  const canvas = within(canvasElement);
  userEvent.type(canvas.getByPlaceholderText("Digite seu e-mail"), "x@y.com");
  userEvent.type(canvas.getByPlaceholderText("********"), "12345678");
  userEvent.click(canvas.getByRole("button"));

  await waitFor(() => {
    return expect(canvas.getByText("Login realizado")).toBeInTheDocument();
  });
};
