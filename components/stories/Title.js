import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import Title from '../Title'

storiesOf('Title', module)
	.add('with text', () => (
	<Title title="Controle Financeiro" />
	))
	.add('with no text', () => (
	<Title />
	))