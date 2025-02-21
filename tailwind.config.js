/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		screens: {
  			xs: '400px',
  			xxs: '300px'
  		},
  		width: {
  			'1/7': '14.2857143%',
  			'1/8': '12.5%',
  			'1/9': '11.1111111%',
  			'1/10': '10%'
  		},
  		fontFamily: {
  			custom: [
  				'Gilroy',
  				'sans-serif'
  			],
  			whyte: [
  				'Whyte',
  				'sans-serif'
  			],
  			'ui-monospace': [
  				'ui-monospace',
  				'Menlo',
  				'Monaco',
  				'Consolas',
  				'monospace'
  			]
  		},
  		fontSize: {
  			'5.5xl': '3.2rem'
  		},
  		colors: {
  			'title-color': '#1D1E20',
  			'bg-primary-color': '#FBFBFB',
  			'q-purple': '#322EE9',
  			'bg-background': '#111827',
  			'clr-card': '#1f2937',
  			'clr-1': '#6420aa',
  			'clr-2': '#ff3ea5',
  			'clr-3': '#ff7ed4',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		variants: {
  			extend: {
  				backgroundColor: [
  					'before'
  				],
  				content: [
  					'before'
  				],
  				position: [
  					'before'
  				],
  				inset: [
  					'before'
  				],
  				width: [
  					'before'
  				],
  				height: [
  					'before'
  				]
  			}
  		},
  		keyframes: {
  			rotate: {
  				'0%': {
  					'--gradient-angle': '0deg'
  				},
  				'100%': {
  					'--gradient-angle': '360deg'
  				}
  			}
  		},
  		animation: {
  			rotate: 'rotate 2.5s linear infinite'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
