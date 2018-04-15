import palx from 'palx'
import { theme } from '@hackclub/design-system'

export const base = '#0059ff'

export const palette = palx(base)

export const grays = {
  black: palette.black,
  slate: palette.gray[8],
  silver: palette.gray[7],
  smoke: palette.gray[2],
  snow: palette.gray[0],
  white: '#ffffff'
}

export const brand = {
  primary: palette.pink[5],
  accent: palette.cyan[5],
  success: palette.teal[5],
  info: palette.blue[5],
  warning: palette.orange[5],
  error: palette.red[5],
  muted: grays.silver
}

export const colors = {
  ...brand,
  ...grays,
  ...palette
}

theme.colors = colors

const baseFamily =
  '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif'

const serif = '"Mercury A","Mercury B"'
const serifFamily = `${serif},${baseFamily}`

const sans = '"Whitney A","Whitney B"'
const sansFamily = `${sans},${baseFamily}`

theme.font = sansFamily
theme.serif = serifFamily

theme.styles = {
  serif: { style: { fontFamily: serifFamily } },
  sans: { style: { fontFamily: sansFamily } },
  headline: { f: [5, 6], color: 'black', style: { lineHeight: '1.125' } },
  subhline: {
    f: [3, 4],
    color: 'black',
    regular: true,
    style: { lineHeight: '1.375' }
  },
  subtext: { f: [3, 4], color: 'black', style: { lineHeight: '1.5' } },
  contentContainer: {
    maxWidth: 64,
    w: 1,
    p: [3, 2],
    style: { position: 'relative' }
  },
  content: { maxWidth: 48, mx: 0 }
}

export default theme
