import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
	div: {
		textAlign: 'center',
		paddingTop: '10px'
	},
	input: {
		padding: '5px',
		border: '1px solid #222'
	},
	button: {
		padding: '5px',
		marginLeft: '-1px',
		color: '#FFF',
		border: '1px solid #222',
		cursor: 'pointer',
		':hover': {
			backgroundColor: '#FFF'
		}
	},
	cred: {
		backgroundColor: '#070',
		':hover': {
			color: '#070'
		}
	},
	deb: {
		backgroundColor: '#700',
		':hover': {
			color: '#700'
		}
	},
	err: {
		backgroundColor: '#C00',
		color: '#FFF',
	}
})

class Form extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			status: ''
		}
	}

	add(sign) {
		let num = document.getElementById('num')

		if (num.value != '') {
			this.props.action(num.value, sign)
			num.value = ''
			this.setState({status: ''})
		} else {
			this.setState({status: styles.err})
		}
	}

	render() {
		return <div className={css(styles.div)}>
			<input className={css(styles.input, this.state.status)} placeholder="Insira um valor" type="number" id="num" />
			<button className={css(styles.button, styles.cred)} onClick={this.add.bind(this, true)}>Creditar</button>
			<button className={css(styles.button, styles.deb)} onClick={this.add.bind(this, false)}>Debitar</button>
		</div>
	}
}

export default Form