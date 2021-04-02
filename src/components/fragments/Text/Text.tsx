import { memo } from 'react'
import PropTypes, { InferProps } from 'prop-types'

import { color } from '@helpers/styles'

import { TextContainer } from './Text.styled'

function Text({ text, textColor, textSize, bgColor, vertical }: InferProps<typeof Text.propTypes>) {
  return (
    <TextContainer textColor={textColor} textSize={textSize} bgColor={bgColor} vertical={vertical}>
      {text}
    </TextContainer>
  )
}

Text.propTypes = {
  text: PropTypes.string,
  textColor: PropTypes.string,
  textSize: PropTypes.string,
  bgColor: PropTypes.string,
  vertical: PropTypes.bool,
}

Text.defaultProps = {
  text: '',
  textColor: color.text.light,
  textSize: 'body-2',
  bgColor: 'transparent',
  vertical: false,
}

export default memo(Text)
