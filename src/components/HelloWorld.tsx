import { css, SerializedStyles } from '@emotion/react'

type Props = { propCss?: SerializedStyles } & StyleProps

export default function HelloWorld({ propCss, ...styles }: Props) {
  return <div css={[style(styles), propCss]}>Hello World</div>
}

type StyleProps = {
  color?: string
}

const style = ({ color }: StyleProps) => css`
  background-color: blanchedalmond;
  color: ${color};
`
