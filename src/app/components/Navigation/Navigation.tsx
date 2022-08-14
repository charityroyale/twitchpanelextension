import React from 'react'
import styled from 'styled-components'

export const Navigation = () => {
	return (
		<NavigationWrapper>
			<NavigationButton>Overview</NavigationButton>
			<NavigationButton>Leaderboard</NavigationButton>
			<NavigationButton>Schedule</NavigationButton>
			<NavigationButton>FAQ</NavigationButton>
		</NavigationWrapper>
	)
}

const NavigationWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	padding: 6px;
	gap: 4px;
`

const NavigationButton = styled.button`
	background-color: ${(p) => p.theme.color.secondary};
	color: ${(p) => p.theme.color.primary};
	outline: none;
	border: none;
	border-radius: 1px;
`
