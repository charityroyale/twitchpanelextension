import styled from 'styled-components'

export const CharityRoyale = () => {
	return <StyledTitle>CharityRoyale</StyledTitle>
}

const StyledTitle = styled.h1`
	color: ${(p) => p.theme.color.secondary};
`
