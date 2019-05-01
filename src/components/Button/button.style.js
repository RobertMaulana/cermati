import styled from 'styled-components'

export const Button = styled.button`
	border-radius: 3px;
	color: #fff;
	font-size: 14px;
	cursor: pointer;
	&:focus {
		outline: none;
	}
	${({type}) => {
		if (type === 'btn-notif') {
			return `
				background-color: #007bc1;
				width: 70px;
				height: 30px;
			`
		}
		if (type === 'btn-hero') {
			return `
				background-color: transparent;
				text-transform: uppercase;
				padding: 10px 20px;
				border: 2px solid #fff;
				font-weight: bold;
				&:hover {
					background-color: #fff;
					color: #007bc1;
				}
			`
		}
		if (type === 'btn-submit-form') {
			return `
				background-color: #ff8000;
				color: #fff;
				padding: 10px;
				border: none;
				cursor: pointer;
				width: 100%;
				margin-bottom:10px;
				font-weight: bold;
			`
		}
	}}
`