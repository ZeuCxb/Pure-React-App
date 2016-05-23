import React from 'react'
import Title from './components/Title'
import Total from './components/Total'
import Form from './components/Form'
import ValueBoxList from './components/ValueBoxList'

import values from './values'

class App extends React.Component {
	constructor() {
		super()

		this.id = 3

		this.state = {
			values
		}
	}

	render() {
		const add = (value, sign) => {
			this.id++
			this.setState({values: [...this.state.values, {_id: this.id, value, sign: sign}]})
		}

		return <div>
			<Title title="Controle Financeiro" />
			<Total values={ this.state.values } />
			<Form action={ add } />
			<ValueBoxList values={ this.state.values } />
		</div>
	}
}

export default App