import type { Preview } from "@storybook/react";
import "../public/styles/app.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  //👇 Enables auto-generated documentation for all stories
  tags: ["autodocs"],
};

export default preview;
