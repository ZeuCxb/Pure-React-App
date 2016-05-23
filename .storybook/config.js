import { configure } from '@kadira/storybook'

function loadStories() {
  require('../components/stories/Title')
  require('../components/stories/ValueBox')
  require('../components/stories/ValueBoxList')
  require('../components/stories/Form')
}

configure(loadStories, module)