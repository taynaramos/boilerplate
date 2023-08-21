import { Story, Meta } from "@storybook/react";
import Main from ".";

export default {
  title: "Components/Main",
  component: Main,
  args: {
    title: "React Avançado",
    description: "TypeScript, ReactJS, NextJS e Styled Components",
  },
} as Meta;

export const Basic: Story = (args) => <Main {...args} />;
// args específico para o story
// Basic.args = {
//   title: "React Avançado",
//   description: "TypeScript, ReactJS, NextJS e Styled Components",
// };
