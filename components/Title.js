import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
	title: {
		textAlign: 'center',
		color: '#FFF',
		backgroundColor: '#222',
		padding: '20px'
	}
})

const Title = ({ title }) => <h3 className={css(styles.title)}>
	{ title }
</h3>

export default Title