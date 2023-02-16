import { theme } from '../styles/themes/default'

type ThemeInterface = typeof theme

declare module 'styled-components' {
  // eslint-disable-next-line no-unused-vars
  interface DefaultTheme extends ThemeInterface {}
}
