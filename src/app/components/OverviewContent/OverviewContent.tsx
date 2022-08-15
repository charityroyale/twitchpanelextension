import styled from 'styled-components'
import { OverlayLoader } from '../OverlayLoader/OverlayLoader'
import { useMakeAWish } from '../../hooks/useMakeAWish'

export const OverviewContent = () => {
	const { data } = useMakeAWish()

	return (
		<div>
			{data ? (
				<LinkWithButtonStyle href="https://charityroyale.at" target="_blank" rel="noopener">
					donate
				</LinkWithButtonStyle>
			) : (
				<OverlayLoader />
			)}
		</div>
	)
}

const LinkWithButtonStyle = styled.a`
	background-color: ${(p) => p.theme.color.tertiary};
	color: ${(p) => p.theme.color.primary};
	text-transform: uppercase;
	text-decoration: none;
	padding: 6px 12px;
	border-radius: 4px;
`
