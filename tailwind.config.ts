import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx},\r\n    ./components/**/*.{js,ts,jsx,tsx,mdx},\r\n    ./app/**/*.{js,ts,jsx,tsx,mdx},\r\n    ./src/**/*.{js,ts,jsx,tsx,mdx},",
    "./node_modules/@nextui-org/theme/dist/components/(accordion|divider).js"
  ],
  theme: {
    colors: {
      'primary' : {
        0: '#DDE2FD',
        10: '#BCC6FB',
        20: '#9AA9F9',
        30: '#798DF7',
        40: '#5770F4',
        50: '#3352F2',
        60: '#193BE5',
        70: '#1632C5',
        80: '#1A2F9E',
        90: '#15267F',
      },
      'gray' : {
        0: '#FFFFFF',
        5: '#F6F7F8',
        10: '#E8E9ED',
        15: '#DADBE2',
        20: '#CBCDD7',
        30: '#AEB1C1',
        40: '#9296AB',
        50: '#757A95',
        60: '#5D6279',
        70: '#474A5C',
        80: '#31333F',
        90: '#1B1C23',
      },
      'danger' : {
        0: '#FCE3E3',
        10: '#F8BEBE',
        20: '#F59999',
        30: '#F17474',
        40: '#ED5050',
        50: '#DD3636',
      },
      'warning' : {
        0: '#FEF0CD',
        10: '#FDE19B',
        20: '#FBD36A',
        30: '#FAC438',
        40: '#F9B506',
        50: '#C79105',
      },
      'success' : {
        0: '#BDF4E4',
        10: '#91EDD2',
        20: '#65E6BF',
        30: '#3ADFAD',
        40: '#20C594',
        50: '#199A73',
      },
    },

    screens: {
      'ph': '360px',
      'pad': '834px',
      'dt': '1920px',
    },
    
    extend: {
      fontFamily: {
        pretendard: ['pretendard'],
      },

      backgroundImage: {
        "performance": "linear-gradient(to bottom, rgba(21, 38, 127, 0.2), rgba(27, 28, 35, 1)), url('/image/recruit/bg.svg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  corePlugins: {
    preflight: true,
  },
  plugins: [],
};
export default config;
