import React from 'react'
import { Flex, Box, Heading, Link as A } from '@hackclub/design-system'
import Icon from '@hackclub/icons'
import { urls } from 'data.json'

const Service = ({ href, icon, ...props }) => (
  <A
    target="_blank"
    rel="noopener"
    href={href}
    mx={3}
    color="muted"
    aria-label={icon}
    {...props}
  >
    <Icon
      glyph={icon}
      width={32}
      height={32}
      fill="currentColor"
    />
  </A>
)

const Footer = ({ children }) => (
  <Box.footer p={[4, 5]} bg="snow" color="muted" align="center">
    {children}
    <Heading.h3 f={2} mb={3} align="center" caps>
      Follow Us
    </Heading.h3>
    <Flex justify="center" align="center" wrap>
      <Service href={urls.twitter} icon="twitter" ml={0} />
      <Service href={urls.instagram} icon="instagram" />
      <Service href={urls.facebook} icon="facebook" />
      <Service href={urls.messenger} icon="messenger" />
      <Service href="mailto:lachlan@hackpenn.com" icon="email" />
    </Flex>
  </Box.footer>
)

export default Footer
