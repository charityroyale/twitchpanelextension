import React from 'react'
import styled from 'styled-components'

export const Header = () => {
	return (
		<HeaderWrapper>
			<img src="cr_logo_small.png" alt="logo" height="30px" />
			<div>
				<strong>Charity Royale</strong>
			</div>
		</HeaderWrapper>
	)
}

const HeaderWrapper = styled.div`
	display: flex;
	align-items: center;
	border: 1px solid;
	border-radius: 4px;
	justify-content: space-between;
	padding: 2px 4px;
`
