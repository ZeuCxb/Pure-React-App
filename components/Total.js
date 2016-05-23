import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
	total: {
		textAlign: 'center',
		paddingTop: '10px'
	},
	positive: {
		color: '#070'
	},
	negative: {
		color: '#700'
	}
})

const Total = ({values}) => {
	let total = values.reduce((total, value) => {
		if(value.sign) {
			return parseFloat(total) + parseFloat(value.value)
		}

		return parseFloat(total) - parseFloat(value.value)
	}, 0)

	return <h3 className={css(styles.total, status)}> Total: R$ { total } </h3>
}

export default Total