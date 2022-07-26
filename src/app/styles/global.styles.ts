import { createGlobalStyle } from 'styled-components'
import { theme } from './Theme'

export const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
		font-family: 'Roboto', sans-serif;
		background-color: ${theme.color.primary};
		color: ${theme.color.secondary};
	}

	* {
		box-sizing: border-box;
	}
`
