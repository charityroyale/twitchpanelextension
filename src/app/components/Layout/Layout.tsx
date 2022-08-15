import React from 'react'
import styled from 'styled-components'
import { Header } from '../Header/Header'
import { Navigation } from '../Navigation/Navigation'

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

export const MainLayout: React.FunctionComponent<MainLayoutProps> = ({ main }: MainLayoutProps) => {
	return <LayoutGrid main={main}></LayoutGrid>
}

const LayoutGrid: React.FunctionComponent<MainLayoutProps> = ({ main }: MainLayoutProps) => {
	return (
		<StyledGrid>
			<HeaderGridWrapper>
				<Header />
			</HeaderGridWrapper>
			<MainGridWrapper>
				<OverViewContent>{main}</OverViewContent>
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
