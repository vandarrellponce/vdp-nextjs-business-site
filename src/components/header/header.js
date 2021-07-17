/** @jsx jsx */
import { jsx, Container, Flex, Button } from 'theme-ui'
import { keyframes } from '@emotion/core'
import { Link } from 'react-scroll'
import Logo from 'components/logo'
import LogoDark from 'assets/logo.svg'
import EsscorLogo from 'assets/esscor/esscorLogo3.png'
import MobileDrawer from './mobile-drawer'
import menuItems from './header.data'
import subMenuItemsData from './subheader.data'
import { useState } from 'react'

export default function Header({ className }) {
  const [showSubHeader, setShowSubHeader] = useState(false)
  const [subItems, setSubItems] = useState([])

  const handleStateChange = () => {
    setShowSubHeader((prev) => !prev)
  }
  const handleSubItemsChange = (flag) => {}

  return (
    <div sx={styles.container}>
      <header sx={styles.header} className={className} id="header">
        <Container sx={styles.container}>
          <Logo src={EsscorLogo} />
          <Flex as="nav" sx={styles.nav} onMouseEnter={handleStateChange}>
            {menuItems.map((item, i) => {
              return (
                <Link
                  activeClass="active"
                  to={item.path}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  key={i}
                  onMouseEnter={() => setSubItems(subMenuItemsData[i])}
                >
                  {item.label}
                </Link>
              )
            })}
          </Flex>
          <Button
            className="donate__btn"
            variant="secondary"
            aria-label="Get Started"
          >
            Get Started
          </Button>
          <MobileDrawer />
        </Container>
      </header>

      {/* SUB MENU */}
      <header
        sx={styles.subHeader}
        className={showSubHeader ? 'show' : ''}
        id="header"
        onMouseLeave={handleStateChange}
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

      {/* SUB MENU */}
    </div>
  )
}

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
  header: {
    color: 'text',
    fontWeight: 'body',
    py: 4,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    transition: 'all 0.4s ease',
    animation: `${positionAnim} 0.4s ease`,
    '.donate__btn': {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ['auto', null, null, null, 0],
    },
    '&.sticky': {
      position: 'fixed',
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
      backdropFilter: 'blur(5px)',
      color: '#000000',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)',
      py: 3,
      'nev > a': {
        color: 'text',
      },
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nav: {
    mx: 'auto',
    display: 'none',
    '@media screen and (min-width: 1024px)': {
      display: 'block',
    },
    a: {
      fontSize: 2,
      fontWeight: 'body',
      px: 5,
      cursor: 'pointer',
      lineHeight: '1.2',
      transition: 'all 0.15s',
      '&:hover': {
        color: 'primary',
      },
      '&.active': {
        color: 'primary',
      },
    },
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
