import React from 'react'
import { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import { CharityRoyale } from '../../app/components/CharityRoyale/CharityRoyale'
import { MainLayout } from '../../app/components/Layout/Layout'

export interface MobilePageProps {
	title?: string
}

const MobilePage: NextPage<MobilePageProps> = (props: MobilePageProps) => {
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

export const getStaticProps: GetStaticProps<MobilePageProps> = async () => {
	return {
		props: {
			title: 'Charity Royale Mobile Panel',
		},
	}
}

export default MobilePage
