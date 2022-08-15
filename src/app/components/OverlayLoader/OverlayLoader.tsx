import styled, { keyframes } from 'styled-components'
import { RiLoaderFill } from 'react-icons/ri'

export const OverlayLoader = () => {
	return (
		<OverlayLoaderWrapper>
			<RiLoaderFill size={125} />
		</OverlayLoaderWrapper>
	)
}

const RotateAnimation = keyframes`
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
`

const OverlayLoaderWrapper = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	animation-name: ${RotateAnimation};
	animation-duration: 1.8s;
	animation-timing-function: linear;
	animation-iteration-count: infinite;
`
