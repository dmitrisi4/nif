module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
		screens: {
			'esm': '360px', // => @media (min-width: 360px) { ... }
			'1esm': '480px', // => @media (min-width: 480px) { ... }
			'2esm': '560px', // => @media (min-width: 560px) { ... }
			'sm': '640px', // => @media (min-width: 640px) { ... }
			'2sm': '680px', // => @media (min-width: 680px) { ... }
			'md': '768px', // => @media (min-width: 768px) { ... }
			'lg': '997px', // => @media (min-width: 997px) { ... }
			'2lg': '1024px', // => @media (min-width: 1024px) { ... }
			'xl': '1200px', // => @media (min-width: 1200px) { ... }
			'2xl': '1340px', // => @media (min-width: 1340px) { ... }
			'xl': '1680px', // => @media (min-width: 1680px) { ... }
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '18px',
			//   lg: 0
			},
			screens: {
				'sm': '640px', // => @media (min-width: 640px) { ... }
				'md ': '768px', // => @media (min-width: 768px) { ... }
				'lg': '997px', // => @media (min-width: 997px) { ... }
				'xl': '1160px', // => @media (min-width: 1160px) { ... }
				'2xl': '1226px', // => @media (min-width: 1160px) { ... }
			}
		},
    extend: {
			fontFamily: {
        'caslalom': ['CA Slalom', 'sans-serif'],
        'opensans': ['Open Sans', 'sans-serif'],
      },
			colors: {
				'lime-green': '#B7F800',
				'lime': '#95CA00',
				'white-smoke': '#F9F9F9',
				'light-blue': '#4148FF',
				'gunmetal-gray': '#7C7D82',
			},
			backgroundImage: {
				'form-gradient': 'linear-gradient(264.12deg, #00CC9E -20.77%,  #4148FF 90.66%)',
				'form-gradient-reverse': 'linear-gradient(264.12deg, #4148FF -20.77%, #00CC9E 90.66%)',
			}
		},
  },
  variants: {},
  plugins: [],
};