import type { Config } from "tailwindcss"

export default {
  content: ["./index.html", "./src/**/*"],
  theme: {},
  plugins: [],

  future: {
    hoverOnlyWhenSupported: true,
  },
} satisfies Config
