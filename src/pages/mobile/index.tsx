import React from 'react'
import { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import { CharityRoyale } from '../../components/CharityRoyale'
import PageWithLayoutType from '../../app/layout/PageWithLayout'
import MainLayout from '../../app/layout/Layout'

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
			<div>{title}</div>
			<div>
				<CharityRoyale />
			</div>
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
;(MobilePage as PageWithLayoutType).layout = MainLayout

export default MobilePage
