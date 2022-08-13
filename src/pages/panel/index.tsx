import React from 'react'
import { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import { CharityRoyale } from '../../components/CharityRoyale'
import PageWithLayoutType from '../../app/layout/PageWithLayout'
import MainLayout from '../../app/layout/Layout'

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
			<div>{title}</div>
			<div>
				<CharityRoyale />
			</div>
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
;(PanelPage as PageWithLayoutType).layout = MainLayout

export default PanelPage
