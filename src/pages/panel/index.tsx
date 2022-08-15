import React from 'react'
import { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import { OverviewContent } from '../../app/components/OverviewContent/OverviewContent'
import { MainLayout } from '../../app/components/Layout/Layout'

export interface PanelPageProps {
	title?: string
}

const PanelPage: NextPage<PanelPageProps> = (props: PanelPageProps) => {
	const { title } = props

	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>
			<MainLayout main={<OverviewContent />}></MainLayout>
		</>
	)
}

export const getStaticProps: GetStaticProps<PanelPageProps> = async () => {
	return {
		props: {
			title: 'Charity Royale Panel',
		},
	}
}

export default PanelPage
