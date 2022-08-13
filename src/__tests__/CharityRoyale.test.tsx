import { render, screen } from '@testing-library/react'
import { CharityRoyale } from '../components/CharityRoyale'

test('CharityRoyale', () => {
	render(<CharityRoyale />)

	const charityRoyale = screen.getByText('CharityRoyale')
	expect(charityRoyale).toBeInTheDocument()
})
