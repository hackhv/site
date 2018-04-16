import React, { Fragment } from 'react'
import { Box, Flex, Text, Heading, Container } from '@hackclub/design-system'
import { theme } from 'theme'
import Helmet from 'react-helmet'
import Nav from 'components/Nav'
import Action from 'components/Action'
import Footer from 'components/Footer'

const Calendar = Flex.extend`
  flex-direction: column;
  flex-shrink: 0;
  text-align: center;
  width: 96px;
  height: 96px;
  border-color: ${props => props.theme.colors.white};
  border-style: solid;
  border-width: 4px;
  border-radius: 12px;
  font-weight: 700;
`
const Month = Text.extend.attrs({ f: 3, py: 1, bg: 'white', color: 'primary' })`
  line-height: 1;
`
const Day = Text.extend.attrs({ f: 6, color: 'white' })`
  line-height: 1.5;
`

export default () => (
  <Fragment>
    <Nav />
    <Flex
      p={3}
      flexDirection="column"
      justify="center"
      align="center"
      bg="primary"
      style={{ minHeight: '100vh' }}
    >
      <Container color="white" align="center" px={3}>
        <Heading.h1 f={[5, 6, 7]} mb={2}>
          Hack Happy Valley
        </Heading.h1>
        <Heading.h2 f={[3, 4]} mb={4}>
          The first high school hackathon in Central Pennsylvania.
        </Heading.h2>
        <Flex align="center" justify="center" my={4} wrap>
          <Calendar mr={4}>
            <Month children="June" />
            <Day children={2} />
          </Calendar>
          <Text align={['center', 'left']} my={3} f={3}>
            <strong>Time:</strong> noon–noon
            <br />
            <strong>Location:</strong> coming soon
          </Text>
        </Flex>
        <Action to="/register" bg="altLight" f={[3, 4]}>
          Register »
        </Action>
      </Container>
    </Flex>
    <Footer />
  </Fragment>
)
