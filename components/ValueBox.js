import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
	contentValue: {
		display: 'flex',
		justifyContent: 'space-around'
	},
	valueBox: {
		marginBottom: '15px',
		padding: '20px',
		color: '#FFF',
		textAlign: 'center',
		borderRadius: '10px',
		cursor: 'pointer'
	},
	plus: {
		backgroundColor: '#070',
		border: '1px solid #030'
	},
	minus: {
		backgroundColor: '#700',
		border: '1px solid #300'
	}
})

// const ValueBox = ({ value, sign }) => {
// 	let signStyle = sign ? styles.plus : styles.minus

// 	return <div className={css(styles.contentValue)}>
// 		<div className={css(styles.valueBox, signStyle)}>
// 			R$ { parseFloat(value).toFixed(2) }
// 		</div>
// 	</div>
// }

class ValueBox extends React.Component {
	constructor(props) {
		super(props)
	}

	show() {
		alert(this.props.desc)
	}

	render() {
		let signStyle = this.props.sign ? styles.plus : styles.minus

		return <div className={css(styles.contentValue)}>
			<div className={css(styles.valueBox, signStyle)} onClick={this.show.bind(this)}>
				R$ { parseFloat(this.props.value).toFixed(2) }
			</div>
		</div>
	}
}

export default ValueBox