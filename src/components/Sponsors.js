import React from 'react'
import { Container, Box } from '@hackclub/design-system'

const Base = Container.extend`
  display: grid;
  grid-gap: ${props => props.theme.space[3]}px;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  align-items: center;
  justify-content: center;
`

const Sponsor = Box.withComponent('img').extend`
  max-width: 16rem;
`

const Sponsors = props => (
  <Base maxWidth={48} {...props}>
    <Sponsor alt="Mike’s Video" src="/sponsors/mikes.png" />
    <Sponsor alt="Minitab" src="/sponsors/minitab.png" />
    <Sponsor alt="Sketch" src="/sponsors/sketch.png" />
    <Sponsor alt="Ben Franklin" src="/sponsors/ben-franklin.jpg" />
    <Sponsor alt="Comcast" src="/sponsors/comcast.jpg" />
    <Sponsor alt="Balsamiq" src="/sponsors/balsamiq.png" />
  </Base>
)

export default Sponsors
