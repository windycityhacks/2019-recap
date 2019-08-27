import { Image } from 'rebass'

export default ({ size = 32, bright = false, ...props }) => (
  <Image
    {...props}
    src={`https://windyhacks.com/flag-${bright ? 'bright' : 'alt-teal'}.png`}
    alt="Windy Hacks avatar"
    width={size}
    height={size}
    sx={{ borderRadius: 'circle', overflow: 'hidden', ...props.sx }}
  />
)
