import styled from 'styled-components'

export const Button = styled.button`
	${({type}) => {
		if (type === 'primary') {
			return `
				background-color: #007bc1;
				width: 100px;
				height: 30px;
				border-radius: 3px;
				color: #000;
			`
		}
	}}
`