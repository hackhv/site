import React from 'react'
import { LargeButton } from '@hackclub/design-system'
import Link from 'gatsby-link'
import { css } from 'styled-components'
import track from 'track'

const styles = css`
  padding: ${props => props.theme.space[3] * 1.25}px
    ${props => props.theme.space[4]}px ${props => props.theme.space[3]}px;
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

const LinkC = LargeButton.withComponent(Link).extend([], styles)
const C = LargeButton.extend([], styles)

const Action = ({ is = 'link', analytics, ...props }) => {
  const Component = is === 'a' ? C : LinkC
  return (
    <Component
      onClick={e => analytics && track('user', 'clicked', analytics)}
      {...props}
    />
  )
}

export default Action
