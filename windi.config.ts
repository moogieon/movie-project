import { defineConfig } from "windicss/helpers";
import formsPlugin from "windicss/plugin/forms";

export default defineConfig({
  darkMode: "class",
  attributify: {
    prefix: 'w-',
  },
  theme: {
    extend: {
      colors: {
      },
    },
  },
  plugins: [formsPlugin],
});
