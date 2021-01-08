import React from 'react'
import { Flex, Box, Heading, Text } from '@hackclub/design-system'
import Icon from '@hackclub/icons'
import PropTypes from 'prop-types'

const Module = ({ icon, heading, body, ...props }) => (
  <Flex flexDirection={['row', 'column']} {...props}>
    <Icon
      size={48}
      glyph={icon}
      color={props.color || 'inherit'}
      style={{ marginRight: 8, flexShrink: 0 }}
    />
    <Box>
      <Heading.h3 mt={2} mb={1} f={3} children={heading} />
      <Text m={0} f={2} children={body} />
    </Box>
  </Flex>
)

Module.displayName = 'Module'

Module.propTypes = {
  icon: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  body: PropTypes.string
}

export default Module
