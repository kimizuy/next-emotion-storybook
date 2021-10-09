import { css } from '@emotion/react'
import HelloWorld from './HelloWorld'

export default {
  title: 'components/HelloWorld',
  component: HelloWorld,
}

const Template = () => {
  return <HelloWorld color="red" propCss={style} />
}

const style = css`
  background-color: aliceblue;
`

export const Default = Template.bind({})
