import { render, screen } from '@testing-library/react'
import { OverviewContent } from '../app/components/OverviewContent/OverviewContent'

test('OverviewContent', () => {
	render(<OverviewContent />)

	const charityRoyale = screen.getByText('CharityRoyale')
	expect(charityRoyale).toBeInTheDocument()
})
