/** @jsx jsx */
import { jsx, NavLink as MenuLink, Link as A } from 'theme-ui'
import NextLink from 'next/link'

export function NavLink({ path, label, children, ...rest }) {
  return <h1>NavLink</h1>
}

export function Link({ path, label, children, ...rest }) {
  return (
    <A {...rest} href={path}>
      {children || label}{' '}
      {/* display logo if there is logo or display text if there is label */}
    </A>
  )
}
