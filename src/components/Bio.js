import React from 'react'
import { Card, Flex, Box, Heading, Text, Badge } from '@hackclub/design-system'

const Bio = ({ bg, name, role, text, ...props }) => (
  <Card p={3} bg={`${bg}.0`} my={3} {...props}>
    <Flex align="center" wrap style={{ lineHeight: '1.25' }}>
      <Heading.h3 f={3} m={0} mr={2} color="black" children={name} />
      <Badge px={2} f={1} bg={`${bg}.6`} children={role} />
    </Flex>
    <Text f={2} mt={1} mb={0} color="black" children={text} />
  </Card>
)

export default Bio
