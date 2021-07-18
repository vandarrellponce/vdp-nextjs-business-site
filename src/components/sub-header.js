/** @jsx jsx */
import { jsx, Container, Flex, Button } from 'theme-ui'
import { keyframes } from '@emotion/core'
import { Link } from 'react-scroll'

const SubHeader = ({ subItems, showSubHeader, toggleShowSubHeader }) => {
  return (
    <header
      sx={styles.subHeader}
      className={showSubHeader ? 'show' : ''}
      id="header"
      onMouseLeave={toggleShowSubHeader}
    >
      <Container sx={styles.container}>
        <Flex as="nav" sx={styles.subHeader.nav}>
          {subItems.map((item, i) => {
            return (
              <Link
                activeClass="active"
                to={item.path}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                key={i}
              >
                {item.label}
              </Link>
            )
          })}
        </Flex>
      </Container>
    </header>
  )
}

export default SubHeader

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  subHeader: {
    height: '40px',
    color: 'text',
    fontWeight: 'body',
    py: 4,
    width: '100%',
    position: 'absolute',
    top: 80,
    left: 0,
    display: 'none',
    transition: 'all 0.4s ease',
    backgroundColor: '#58595B',
    color: '#000000',
    animation: `${positionAnim} 0.4s ease`,
    '.donate__btn': {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ['auto', null, null, null, 0],
    },
    '&.show': {
      display: 'flex',
    },
    nav: {
      mx: 'auto',
      display: 'none',
      '@media screen and (min-width: 1024px)': {
        display: 'block',
      },
      a: {
        fontSize: '13px',
        fontWeight: 'body',
        px: 2,
        cursor: 'pointer',
        lineHeight: '1.2',
        color: 'white',
        transition: 'all 0.15s',
        '&:hover': {
          color: 'primary',
        },
        '&.active': {
          color: 'primary',
        },
      },
    },
  },
}
