import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
	total: {
		textAlign: 'center',
		paddingTop: '10px',
		marginBottom: '20px'
	},
	positive: {
		color: '#070'
	},
	negative: {
		color: '#700'
	}
})

// const Total = ({values}) => {
	// let total = values.reduce((total, value) => {
	// 	if(value.sign) {
	// 		return parseFloat(total) + parseFloat(value.value)
	// 	}

	// 	return parseFloat(total) - parseFloat(value.value)
	// }, 0)

// 	return <h3 className={css(styles.total, status)}> Total: R$ { total.toFixed(2) } </h3>
// }

class Total extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			status: styles.positive,
			total: 0
		}
	}

	componentWillMount() {
		this.calc(this.props.values)
	}

	componentWillReceiveProps(nextProps) {
		this.calc(nextProps.values)
	}

	calc(values) {
		let total = values.reduce((total, value) => {
			if(value.sign) {
				return parseFloat(total) + parseFloat(value.value)
			}

			return parseFloat(total) - parseFloat(value.value)
		}, 0)

		if(total < 0) {
			this.setState({status: styles.negative, total})
		} else {
			this.setState({status: styles.positive, total})
		}
	}

	render() {
		return <h3 className={css(styles.total, this.state.status)}> Total: R$ { this.state.total.toFixed(2) } </h3>
	}
}

export default Total