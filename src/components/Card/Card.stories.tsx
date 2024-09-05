// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import Card from "./index";

// Mocks
import { MOVIE_LIST_DATA } from "@/mocks";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Common/Card",
  component: Card,
  argTypes: {
    cardData: {
      description:
        "This is a movie have type CardProps(id: number; publicYear?: number; imgSrc: string; title: string; genre: string; rating: number;)",
    },
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  //👇 Enables auto-generated documentation for this component and includes all stories in this file
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    cardData: MOVIE_LIST_DATA[0],
  },
};
