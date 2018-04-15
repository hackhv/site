import React from 'react'
import {
  Flex,
  Box,
  Heading,
  Text,
  Link as A,
  cx
} from '@hackclub/design-system'
import Link from 'gatsby-link'

const c1 = cx('red.5')
const c2 = cx('orange.5')
const c3 = cx('yellow.5')
const c4 = cx('teal.6')
const c5 = cx('blue.6')
const c6 = cx('violet.6')

const Base = Box.footer.extend`
  background-image: linear-gradient(rgba(0,0,0,0.05) 0%, rgba(0,0,0,0) 5%), linear-gradient(105deg, ${c1}, ${c1} 16%, ${c2} 16%, ${c2} 32%, ${c3} 32%, ${c3} 48%, ${c4} 48%, ${c4} 64%, ${c5} 64%, ${c5} 80%, ${c6} 80%, ${c6} 100%);
  display: grid;
  grid-gap: ${props => props.theme.space[3]}px;
  ${props => props.theme.mediaQueries.md} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${props => props.theme.space[4]}px;
  }
`

const icons = {
  twitter:
    'M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.37-1.337.64-2.085.79-.598-.64-1.45-1.04-2.396-1.04-1.812 0-3.282 1.47-3.282 3.28 0 .26.03.51.085.75-2.728-.13-5.147-1.44-6.766-3.42C.83 2.58.67 3.14.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.41-.02-.61-.058.42 1.304 1.63 2.253 3.07 2.28-1.12.88-2.54 1.404-4.07 1.404-.26 0-.52-.015-.78-.045 1.46.93 3.18 1.474 5.04 1.474 6.04 0 9.34-5 9.34-9.33 0-.14 0-.28-.01-.42.64-.46 1.2-1.04 1.64-1.7z ',
  instagram:
    'M8 0C5.827 0 5.555.01 4.702.048 3.85.088 3.27.222 2.76.42c-.526.204-.973.478-1.417.923-.445.444-.72.89-.923 1.417-.198.51-.333 1.09-.372 1.942C.008 5.555 0 5.827 0 8s.01 2.445.048 3.298c.04.852.174 1.433.372 1.942.204.526.478.973.923 1.417.444.445.89.72 1.417.923.51.198 1.09.333 1.942.372.853.04 1.125.048 3.298.048s2.445-.01 3.298-.048c.852-.04 1.433-.174 1.942-.372.526-.204.973-.478 1.417-.923.445-.444.72-.89.923-1.417.198-.51.333-1.09.372-1.942.04-.853.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.04-.852-.174-1.433-.372-1.942-.204-.526-.478-.973-.923-1.417-.444-.445-.89-.72-1.417-.923-.51-.198-1.09-.333-1.942-.372C10.445.008 10.173 0 8 0zm0 1.44c2.136 0 2.39.01 3.233.048.78.036 1.203.166 1.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.01 2.39-.05 3.233c-.04.78-.17 1.203-.28 1.485-.15.374-.32.64-.6.92-.28.28-.55.453-.92.598-.28.11-.71.24-1.49.276-.85.038-1.1.047-3.24.047s-2.39-.01-3.24-.05c-.78-.04-1.21-.17-1.49-.28-.38-.15-.64-.32-.92-.6-.28-.28-.46-.55-.6-.92-.11-.28-.24-.71-.28-1.49-.03-.84-.04-1.1-.04-3.23s.01-2.39.04-3.24c.04-.78.17-1.21.28-1.49.14-.38.32-.64.6-.92.28-.28.54-.46.92-.6.28-.11.7-.24 1.48-.28.85-.03 1.1-.04 3.24-.04zm0 2.452c-2.27 0-4.108 1.84-4.108 4.108 0 2.27 1.84 4.108 4.108 4.108 2.27 0 4.108-1.84 4.108-4.108 0-2.27-1.84-4.108-4.108-4.108zm0 6.775c-1.473 0-2.667-1.194-2.667-2.667 0-1.473 1.194-2.667 2.667-2.667 1.473 0 2.667 1.194 2.667 2.667 0 1.473-1.194 2.667-2.667 2.667zm5.23-6.937c0 .53-.43.96-.96.96s-.96-.43-.96-.96.43-.96.96-.96.96.43.96.96z ',
  facebook:
    'M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.48-1.195 1.18v1.54h2.39l-.31 2.42h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0 '
}

const Service = ({ href, icon, ...props }) => (
  <A
    target="_blank"
    rel="noopener"
    href={href}
    mx={2}
    color="white"
    title={icon}
    {...props}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={32}
      height={32}
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="1.414"
    >
      <path fillRule="nonzero" d={icons[icon]} />
    </svg>
  </A>
)

const Exception = Box.extend`
  grid-column: span 2;
`

const Footer = ({ children }) => (
  <Base p={[4, 5]} color="white">
    {children && <Exception children={children} />}
    <Box>
      <Heading.h3 mb={3} align={['left', null, 'right']}>
        Follow Us
      </Heading.h3>
      <Flex
        align="center"
        justify={['flex-start', null, 'flex-end']}
        mx={-2}
        wrap
      >
        <Service href="https://twitter.com/camplightbulb" icon="twitter" />
        <Service
          href="https://www.instagram.com/camplightbulb"
          icon="instagram"
        />
        <Service
          href="https://www.facebook.com/camplightbulb"
          icon="facebook"
        />
      </Flex>
    </Box>
    <Box>
      <Heading.h3 mb={2}>Camp Lightbulb</Heading.h3>
      <Box>
        <Text mt={0}>
          PO Box 845<br />Hollywood, CA 90078
        </Text>
        <Text mt={2} mb={3}>
          Non-profit EIN number: 45-2643441
        </Text>
        <Text f={1} style={{ opacity: 0.8 }}>
          © {new Date().getFullYear()} Camp Lightbulb
        </Text>
      </Box>
    </Box>
  </Base>
)

export default Footer
