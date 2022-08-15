import React from 'react'
import { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import { CharityRoyale } from '../../app/components/CharityRoyale/CharityRoyale'
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
			<MainLayout main={<CharityRoyale />}></MainLayout>
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
