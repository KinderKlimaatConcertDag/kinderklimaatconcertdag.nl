import { extendTheme } from '@chakra-ui/react'
import { theme } from '@chakra-ui/theme'
import '@fontsource-variable/inter'

const fonts = {
  body: "'Neue Haas Grotesk', 'Inter Variable', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
  heading: "'Champ Black', 'Inter Variable', 'Work Sans', system-ui, sans-serif",
}

export const customTheme = extendTheme(
  {
    colors: { ...theme.colors, brand: theme.colors.blue },
    fonts: fonts,
    components: {
      Text: {
        baseStyle: {
          fontSize: 'lg',
          lineHeight: 'tall',
        },
      },
    },
    textStyles: {
      paragraphBlock: {
        display: 'block',
        mb: 4,
      },
    },
    styles: {
      global: {
        '@font-face': [
          {
            fontFamily: 'Champ Black',
            src: "url('/fonts/Champ-Black.otf') format('opentype')",
            fontWeight: '900',
            fontStyle: 'normal',
            fontDisplay: 'swap',
          },
          {
            fontFamily: 'Neue Haas Grotesk',
            src: "url('/fonts/NeueHaasDisplayRoman.ttf') format('truetype')",
            fontWeight: '400',
            fontStyle: 'normal',
            fontDisplay: 'swap',
          },
        ],
        html: { scrollBehavior: 'smooth' },
      },
    },
  },
  theme,
)
