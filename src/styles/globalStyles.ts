import { globalCss } from '@stitches/react'

const globalStyles = globalCss({
  '*': { margin: 0, padding: 0, fontFamily: 'Montserrat', colorScheme: 'dark' },
  '#tsparticles': { zIndex: -1 },
})

export default globalStyles
