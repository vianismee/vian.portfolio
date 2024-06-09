/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				satoshi: ['Satoshi', 'San-Serif'],
				roboto: ['Roboto', 'San-Serif'],
				consolas: ['Consolas', 'Monospace'],
			},
			typography: {
				DEFAULT: {
				  css: {
					a: {
					  'text-decoration': 'none',
					  'background-repeat': 'no-repeat',
					  'background-size': '100% 1.5px',
					  'background-position': '0 100%',
					  'background-image':
						'linear-gradient(to right, rgb(var(--color-text-link)/1), rgb(var(--color-text-link)/1))',
					  '&:hover': {
						color: 'rgb(var(--color-text-link))',
					  },
					},
					'h2, h3, h4, h5': {
					  color: 'rgb(var(--color-text-heading))',
					  'font-family': 'Roboto',
					  'font-weight': 'bold',
					},
					'p': {
						'font family': 'Roboto',
						'line-height': '1.5',
                        'font-size': '20px',
					},
					iframe: {
					  'border-radius': '0.5rem',
					},
					code: {
					  'background-color': 'rgb(var(--color-code-bg))',
					  color: 'rgb(var(--color-code-text))',
					  padding: '0.25rem 0.5rem',
					  'border-radius': '0.25rem',
					  'font-size': '0.875rem',
					  'line-height': '1.5',
					  'font-family': "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
					},
					'ol > li::before': {
					  color: 'rgb(var(--color-text-bold))',
					},
					li: {
					  'margin-bottom': '0.5rem',
					  color: 'rgb(var(--color-code-text))',
					  'font-size': '1rem',
					  'line-height': '1.5',
					  'font-family': "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
					},
					'code::before': {
					  content: 'none',
					},
					'code::after': {
					  content: 'none',
					},
					blockquote: {
					  border: 'left 1px solid',
					  position: 'relative',
					  width: '98%',
					  margin: '0 auto',
					  'font-size': '2rem',
					},
					'blockquote::before': {
					  'font-family': 'Arial',
					  'font-size': '5rem',
					  color: 'rgb(var(--color-text-bold))',
					  position: 'absolute',
					  left: '-10px',
					  top: '-10px',
					},
					'blockquote::after': {
					  content: '',
					},
					'blockquote p:first-of-type::before': {
					  content: '',
					},
					'blockquote p:last-of-type::after': {
					  content: '',
					},
				  },
				},
			 },
		},
	},
	plugins: [require('@tailwindcss/typography', 'tailwind-scrollbar-hide')],
}
