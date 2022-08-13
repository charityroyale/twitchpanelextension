import React from 'react'
import styled from 'styled-components'

const StyledLayout = styled.div`
	color: ${(p) => p.theme.color.primary};
`

interface MainLayoutProps {
	children: React.ReactNode
}

const MainLayout: React.FunctionComponent<MainLayoutProps> = ({ children }: MainLayoutProps) => {
	return <StyledLayout>{children}</StyledLayout>
}

export default MainLayout
