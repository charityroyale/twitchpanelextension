import React from 'react'
import styled from 'styled-components'
import { Header } from '../components/Header/Header'
import { Navigation } from '../components/Navigation/Navigation'

const StyledGrid = styled.div`
	display: grid;
	grid-template-rows: 50px 1fr 50px;
	grid-template-areas:
		'header'
		'main'
		'navigation';
	height: 100vh;
`

const HeaderGridWrapper = styled.header`
	grid-area: header;
	padding: 6px;
`

const MainGridWrapper = styled.main`
	grid-area: main;
`

const NavigationGridWrapper = styled.div`
	grid-area: navigation;
`

interface MainLayoutProps {
	main: React.ReactNode
}

const MainLayout: React.FunctionComponent<MainLayoutProps> = ({ main }: MainLayoutProps) => {
	return <LayoutGrid main={main}></LayoutGrid>
}

const LayoutGrid: React.FunctionComponent<MainLayoutProps> = ({ main }: MainLayoutProps) => {
	return (
		<StyledGrid>
			<HeaderGridWrapper>
				<Header />
			</HeaderGridWrapper>
			<MainGridWrapper>
				<OverViewContent>
					<LinkWithButtonStyle href="https://charityroyale.at" target="_blank" rel="noopener">
						donate
					</LinkWithButtonStyle>
				</OverViewContent>
			</MainGridWrapper>
			<NavigationGridWrapper>
				<Navigation />
			</NavigationGridWrapper>
		</StyledGrid>
	)
}

const OverViewContent = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`

const LinkWithButtonStyle = styled.a`
	background-color: ${(p) => p.theme.color.tertiary};
	color: ${(p) => p.theme.color.primary};
	text-transform: uppercase;
	text-decoration: none;
	padding: 6px 12px;
	border-radius: 4px;
`

export default MainLayout
