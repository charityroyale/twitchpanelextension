// References to https://blog.agney.dev/styled-components-&-typescript/
const customMediaQuery = (minWidth: number): string => `@media (min-width: ${minWidth}px)`

const responsiveMaxSizeThreshold = {
	phone: 576,
	tablet: 910,
}

export const theme = {
	color: {
		primary: 'black',
		secondary: 'white',
		background: '#c9dded',
	},
	fontSize: {
		s: 12,
		m: 14,
		l: 18,
		xl: 24,
	},
	gridGrap: {
		phone: 8,
		tablet: 24,
		desktop: 28,
	},
	space: {
		xs: 4,
		s: 8,
		m: 12,
		l: 16,
		xl: 24,
		xxl: 36,
	},
	media: {
		desktop: customMediaQuery(responsiveMaxSizeThreshold.tablet),
		tablet: customMediaQuery(responsiveMaxSizeThreshold.phone),
		phone: customMediaQuery(0),
	},
}

export type Theme = typeof theme
