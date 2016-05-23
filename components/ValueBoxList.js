import React from 'react'
import ValueBox from './ValueBox'

const ValueBoxList = ({ values }) => <div>
	{values.map(obj => <ValueBox key={obj._id} value={obj.value} sign={obj.sign} />)}
</div>

export default ValueBoxList