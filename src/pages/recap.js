import React, { Fragment } from 'react'
import {
  Box,
  Text,
  Heading,
  Container,
  Card,
  Link,
  Button
} from '@hackclub/design-system'
import { theme } from 'theme'
import { lowerCase } from 'lodash'
import Helmet from 'react-helmet'
import Nav from 'components/Nav'
import Photo from 'components/Photo'
import Action from 'components/Action'
import Sponsors from 'components/Sponsors'
import Footer from 'components/Footer'

const Grid = Container.extend`
  display: grid;
  grid-gap: ${({ theme }) => theme.space[2]}px;
  width: 100%;
  > div {
    width: 100%;
    box-shadow: ${({ theme }) => theme.boxShadows[2]};
    border-radius: ${({ theme }) => theme.radius};
    max-width: 100%;
    min-height: 24rem;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${({ theme }) => theme.space[4]}px;
  }
`

export default () => (
  <Fragment>
    <Nav />
    <Box px={3} pt={[5, 6]} pb={5} bg="warm">
      <Container maxWidth={48} color="white" align="center" px={3}>
        <Heading.h1 f={[6, 7]} mb={2}>
          Spring 2018 Recap
        </Heading.h1>
        <Heading.h2 f={[3, 4]} m={0}>
          See some photos from our spring event—it was a huge success!
        </Heading.h2>
        <Action to="/register" bg="cool" my={4}>
          Register for fall
        </Action>
      </Container>
    </Box>
    <Grid py={[4, 5]}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(n => (
        <Photo key={n} image={`/spring_recap/${n}.jpg`} />
      ))}
    </Grid>
    <Sponsors pb={5} />
    <Footer />
  </Fragment>
)
