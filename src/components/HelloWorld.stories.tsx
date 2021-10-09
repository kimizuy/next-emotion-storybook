import { ComponentStory } from '@storybook/react'
import { css } from '@emotion/react'
import HelloWorld from './HelloWorld'

export default {
  title: 'components/HelloWorld',
  component: HelloWorld,
}

const Template: ComponentStory<typeof HelloWorld> = (prop) => {
  return <HelloWorld {...prop} />
}

export const Default = Template.bind({})

Default.args = {
  color: 'red',
  propCss: css`
    background-color: aquamarine;
  `,
}
