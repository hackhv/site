import React from 'react'
import { LargeButton } from '@hackclub/design-system'
import Link from 'gatsby-link'

const Action = LargeButton.withComponent(Link).extend`
  padding: ${props => props.theme.space[3] * 1.25}px ${props =>
  props.theme.space[4]}px ${props => props.theme.space[3]}px;
  line-height: 1;
  transition: transform 0.125s ease-out;
  will-change: transform;
  transform: scale(1);
  &:hover,
  &:focus {
    transform: scale(1.06);
  }
  @media (prefers-reduced-motion: reduce) {
    transform: none !important;
  }
`

export default Action
