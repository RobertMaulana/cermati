import styled from 'styled-components'

export const TitleStyle = styled.div`
	font-size: 12px;
	a {
		text-decoration: none;
		color: #3f08d6;
	}
	${({type}) => {
		if (type === 'hero-name') {
			return `
				font-size: 26px;
			`
		}
		if (type === 'hero-activity') {
			return `
				font-weight: bold;
				font-size: 20px;
				margin-bottom: 10px;
			`
		}
		if (type === 'hero-subtitle') {
			return `
				line-height: 1.3em;
				font-size: 15px;
				margin-bottom: 20px;
				font-weight: 100;
			`
		}
		if (type === 'hightlight-name') {
			return `
				font-size: 28px;
			`
		}
		if (type === 'hightlight-subtitle') {
			return `
				font-size: 16px;
			`
		}
		if (type === 'box-title') {
			return `
				font-size: 22px;
			`
		}
		if (type === 'footer-copyright') {
			return `
				font-size: 14px;
				font-weight: 100;
			`
		}
		if (type === 'form-description') {
			return `
				font-weight: 100;
				font-size: 14px;
				margin-bottom: 20px;
			`
		}
	}}
`