import { useState, useEffect } from 'react'
import { MakeAWishInfoJsonDTO } from '../dto/MakeAWishInfoDTO'

export const useMakeAWish = () => {
	const [data, setData] = useState<null | MakeAWishInfoJsonDTO>(null)

	useEffect(() => {
		const fetchData = () => {
			fetch('https://streamer.make-a-wish.at/charityroyale2021/info.json')
				.then(async (response) => {
					const data = await response.json()

					// basic flicker fix for short loading times
					window.setTimeout(() => {
						setData(data)
					}, 275)
				})
				.catch((e) => {
					console.error(e)
				})
		}
		fetchData()
	}, [])

	return { data }
}
