import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import ValueBoxList from '../ValueBoxList'
import values from '../../values'

storiesOf('ValueBoxList', module)
	.add('With no items', () => (
		<ValueBoxList />
	))
	.add('With items', () => (
		<ValueBoxList values={ values } />
	))