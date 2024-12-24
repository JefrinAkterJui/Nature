/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'Slider1': "url('/imge/Fu.png')",
        'Slider2': "url('/imge/s1.png')",
        'Slider3': "url('/imge/s2.png')",
        'Slider4': "url('/imge/s3.png')",
        'About1': "url('/imge/pata.png')",
        'About2': "url('/imge/ab2.png')",
        'About3': "url('/imge/ab3.png')",
        'About4': "url('/imge/ab4.png')",
      }
    },
    container: {
      center: true,
    },
    fontFamily:{
      'Lora':["Lora", "serif"],
      'monstar':["Montserrat", 'serif'],
      'Inter':["Inter", "serif"],
      'Civo':["Chivo", "serif"],
    }
  },
  plugins: [],
}
