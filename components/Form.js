import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
	div: {
		textAlign: 'center',
		paddingTop: '10px'
	},
	input: {
		padding: '5px',
		border: '1px solid #222',
		marginBottom: '5px',
		width: '150px'
	},
	button: {
		padding: '5px',
		marginBottom: '30px',
		color: '#FFF',
		backgroundColor: '#333',
		border: '1px solid #222',
		cursor: 'pointer',
		width: '50px',
		':hover': {
			backgroundColor: '#FFF',
			color: '#333'
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

	add() {
		let num = document.getElementById('num')

		if (num.value != '' && num.value != 0) {
			var sign

			if(num.value > 0) {
				sign = true
			} else {
				num.value = num.value.toString().substr(1)

				sign = false
			}

			let desc = document.getElementById('desc').value

			if(desc === '') {
				desc = 'Sem descrição'
			}

			this.props.action(num.value, sign, desc)

			num.value = ''
			document.getElementById('desc').value = ''

			this.setState({status: ''})
		} else {
			num.value = ''

			this.setState({status: styles.err})
		}
	}

	render() {
		return <div className={css(styles.div)}>
			<div>
				<input className={css(styles.input, this.state.status)} placeholder="Insira um valor" type="number" id="num" />
			</div>

			<div>
				<input className={css(styles.input)} placeholder="Insira uma descrição" id="desc" />
			</div>

			<button className={css(styles.button)} onClick={this.add.bind(this)}>Enviar</button>
		</div>
	}
}

export default Form