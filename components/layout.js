import { Box, Flex, Text, Link as A } from 'rebass'
import { Styled, useColorMode } from 'theme-ui'
import Link from 'next/link'
import Icon from './icon'
import Avatar from './avatar'

const ColorButton = ({ mode, ...props }) => (
  <Box
    as="button"
    {...props}
    title="Cycle Color Mode"
    sx={{
      display: 'inline-block',
      appearance: 'none',
      bg: 'transparent',
      color: 'inherit',
      p: 1,
      m: 0,
      border: 0,
      borderRadius: 9999,
      lineHeight: 0,
      ':hover, :focus': {
        color: 'primary',
        boxShadow: '0 0 0 3px',
        outline: 'none'
      }
    }}
  >
    <svg viewBox="0 0 32 32" width="24" height="24" fill="currentcolor">
      <circle
        cx="16"
        cy="16"
        r="14"
        fill="none"
        stroke="currentcolor"
        strokeWidth="4"
      />
      <path d="M 16 0 A 16 16 0 0 0 16 32 z" />
    </svg>
  </Box>
)

export default props => {
  const [mode, setMode] = useColorMode()

  return (
    <>
      <Flex
        as="header"
        variant="container"
        sx={{
          color: 'primary',
          alignItems: 'center',
          px: 3,
          py: 3
        }}
      >
        <Avatar light size={48} sx={{ mr: 3 }} />
        <Link href="/">
          <A variant="styles.navitem">Windy City Hacks</A>
        </Link>
        <Box sx={{ mx: 'auto' }} />
        <A
          href="https://2019.windyhacks.com"
          variant="styles.navitem"
          sx={{ mr: [3, 4] }}
        >
          2019 site
        </A>
        <ColorButton
          onClick={e => {
            const next = mode === 'dark' ? 'light' : 'dark'
            setMode(next)
          }}
        />
      </Flex>
      <Box
        as="main"
        sx={{
          width: '100%',
          mx: 'auto',
          flex: '1 1 auto'
        }}
      >
        {props.children}
      </Box>
      <Box
        as="footer"
        variant="container"
        sx={{
          px: 3,
          py: 5,
          width: '100%',
          maxWidth: 'wide',
          mx: 'auto'
        }}
      >
        <Box
          variant="container"
          sx={{
            // display: 'grid',
            // gridGap: [3, 4],
            // gridTemplateColumns: 'repeat(auto-fit, minmax(256px, 1fr))',
            fontSize: 0,
            py: 3
          }}
        >
          <Flex sx={{ justifyContent: 'center' }}>
            <A
              href="https://twitter.com/windyhacks"
              title="Twitter"
              sx={{ mx: 2 }}
            >
              <Icon glyph="twitter" size={36} />
            </A>
            <A href="https://fb.me/windyhacks" title="Facebook" sx={{ mx: 2 }}>
              <Icon glyph="facebook" size={36} />
            </A>
            <A
              href="https://github.com/windyhacks"
              title="GitHub"
              sx={{ mx: 2 }}
            >
              <Icon glyph="github" size={36} />
            </A>
            <A
              href="https://instagram.com/windycityhacks"
              title="Instagram"
              sx={{ mx: 2 }}
            >
              <Icon glyph="instagram" size={36} />
            </A>
            <A href="mailto:team@windyhacks.com" title="Email" sx={{ mx: 2 }}>
              <Icon glyph="email" size={36} />
            </A>
          </Flex>
          <Box
            sx={{
              mt: [3, 4],
              textAlign: 'center',
              a: { fontSize: 1 }
            }}
          >
            <Text sx={{ fontFamily: 'heading', fontSize: 1 }}>
              Site by{' '}
              <A
                href="https://lachlanjc.me"
                target="_blank"
                variant="styles.navitem"
              >
                @lachlanjc
              </A>{' '}
              &{' '}
              <A
                href="https://matthewstanciu.me"
                target="_blank"
                variant="styles.navitem"
              >
                Matthew Stanciu
              </A>{' '}
              💙
            </Text>
            <Text
              sx={{
                fontFamily: 'body',
                color: 'muted',
                fontSize: 0,
                mt: 2,
                mb: 0
              }}
            >
              Fiscally sponsored by The Hack Foundation.
              <br />
              Nonprofit EIN: 81-2908499.
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  )
}
