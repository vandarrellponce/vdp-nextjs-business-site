/** @jsx jsx */
import { jsx, Image } from 'theme-ui'
import { Link } from 'components/link'

export default function Logo({ src, ...rest }) {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
        display: 'flex',
        cursor: 'pointer',
        height: ['35px', '35px', '50px', '50px', '50px'],
        mr: 15,
      }}
      {...rest}
    >
      <Image src={src} alt="Esscor Cebu Logo" />
    </Link>
  )
}
