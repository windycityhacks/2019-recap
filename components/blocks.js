import { Box } from 'rebass'

export const Banner = props => (
  <Box
    sx={{
      backgroundImage:
        'linear-gradient(rgba(0,0,0,.25), rgba(0,0,0,0.375)), url(https://cdn.glitch.com/9f68e7eb-cbc8-4d6e-b977-6d54e27ebcf6%2F2.jpg?v=1565835456523)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      textShadow: '0 2px 4px rgba(0,0,0,.I 75)',
      py: [4, 5, 6, 7],
      mb: [4, 5]
    }}
  >
    <Box
      {...props}
      variant="container"
      sx={{
        maxWidth: 'wide',
        textAlign: 'center',
        h1: {
          fontSize: [5, 6, 7],
          fontFamily: 'heading',
          fontWeight: 'heading',
          lineHeight: 'tight',
          mt: [0, -2, -4, -5],
          mb: 3
        },
        h2: {
          fontSize: [2, 3, 4],
          fontFamily: 'body',
          fontWeight: 'body',
          lineHeight: 'body',
          mb: 2,
          a: {
            color: 'red'
          }
        },
        p: {
          mb: 4
        },
        ul: {
          listStyle: 'none',
          display: 'flex',
          p: 0,
          m: 0
        },
        li: {
          mr: 3
        }
      }}
    />
  </Box>
)

export const Container = ({ wide, ...props }) => (
  <Box
    {...props}
    variant="container"
    sx={{
      maxWidth: wide ? 'wide' : 'container',
      h2: {
        fontSize: [3, 4, 5],
        fontFamily: 'heading',
        fontWeight: 'heading',
        lineHeight: 'tight',
        mt: [4, 5],
        mb: [2, 3]
      },
      h3: {
        fontSize: [2, 3, 4],
        fontFamily: 'heading',
        fontWeight: 'heading',
        lineHeight: 'tight',
        mt: [3, 4],
        mb: [2, 3]
      },
      ...props.sx
    }}
  />
)

export const Callout = props => (
  <Box
    {...props}
    sx={{
      bg: 'elevated',
      px: [3, 4],
      py: [2, 3, 4],
      borderRadius: 'extra',
      boxShadow: 'sheet',
      fontSize: [2, 3],
      mb: [4, 5],
      ...props.sx,
      a: {
        color: 'primary'
      }
    }}
  />
)

export const List = props => (
  <Box
    {...props}
    sx={{
      ul: {
        p: 0,
        m: 0,
        listStyle: 'none',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(256px, 1fr))',
        gridGap: [3, 4]
      },
      a: {
        fontWeight: 'bold',
        color: 'primary',
        textDecoration: 'none'
      },
      em: {
        display: 'block',
        color: 'muted',
        fontFamily: 'body',
        fontWeight: 'body',
        fontStyle: 'normal',
        fontSize: [0, 1]
      },
      ...props.sx
    }}
  />
)

export const Gallery = props => (
  <Box
    {...props}
    sx={{
      display: 'grid',
      gridTemplateColumns: ['auto', null, 'repeat(2, 1fr)'],
      gridGap: [3, 4, null, 4],
      width: '100%',
      alignItems: 'center',
      px: [3, 4, null, null],
      mb: [3, 4, 5, 6],
      'ul, ol': {
        textAlign: [null, 'right'],
        listStyle: 'none',
        pl: 0
      },
      'p, ol, ul': {
        maxWidth: 1080 / 2,
        p: [3, 4]
      },
      'p, li': {
        color: 'muted',
        fontFamily: 'body',
        fontSize: [2, 3],
        mt: 0,
        mb: 2
      },
      ...props.sx
    }}
  />
)

export const Team = props => (
  <Box
    {...props}
    sx={{
      ul: {
        p: 0,
        m: 0,
        listStyle: 'none',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(256px, 1fr))',
        gridGap: [3, 4]
      },
      li: {
        display: 'flex',
        alignItems: 'center'
      },
      p: {
        my: 0,
        '&:first-child': {
          lineHeight: 0
        }
      },
      strong: {
        fontFamily: 'heading',
        fontWeight: 'heading',
        fontSize: [1, 2],
        lineHeight: 'body',
      },
      em: {
        display: 'block',
        color: 'muted',
        fontFamily: 'body',
        fontWeight: 'body',
        fontStyle: 'normal',
        fontSize: [0, 1],
        my: 0,
        a: {
          color: 'primary'
        }
      },
      img: {
        flexShrink: 'none',
        borderRadius: 'circle',
        width: [64, 72],
        height: [64, 72],
        mr: 3
      },
      ...props.sx
    }}
  />
)
