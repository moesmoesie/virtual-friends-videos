module.exports = {
  stories: ["../../../packages/ui/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-designs",
    "@storybook/addon-a11y",
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  typescript: { reactDocgen: false },
};
