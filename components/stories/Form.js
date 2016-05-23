import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import Form from '../Form'

storiesOf('Form', module)
	.add('normal', () => (
	<Form />
	))