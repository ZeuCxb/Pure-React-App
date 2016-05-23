import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import ValueBox from '../ValueBox'

storiesOf('ValueBox', module)
	.add('Positive value', () => (
		<ValueBox value="535" sign={ true } />
	))
	.add('Negative value', () => (
		<ValueBox value="780" sign={ false } />
	))