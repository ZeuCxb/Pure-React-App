import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
	contentValue: {
		display: 'flex',
		justifyContent: 'space-around'
	},
	valueBox: {
		marginTop: '15px',
		padding: '20px',
		color: '#FFF',
		textAlign: 'center',
		borderRadius: '10px'
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

const ValueBox = ({ value, sign }) => {
	let signStyle = sign ? styles.plus : styles.minus

	return <div className={css(styles.contentValue)}>
		<div className={css(styles.valueBox, signStyle)}>
			R$ { value }
		</div>
	</div>
}

export default ValueBox