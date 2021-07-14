/** @jsx jsx */
import { jsx, Container, Box, Image } from 'theme-ui'
import TextFeature from 'components/text-feature'

import FeatureThumb from 'assets/esscor/ademcoToby.png'
import shapePattern from 'assets/shape-pattern2.png'

const data = {
  subTitle: 'VERIFSUITE™',
  title: `Changes how security and essential services work`,
  description:
    'Unlike traditional upfront investment or outsourcing procurement models, VERIFSUITETM operates on a Pay-as-You-Use model. This way, customers are assured of top quality, technical support, and sustainability. Customers have no systems to manage, no hidden costs to deal with, and minimum to no requirements for recruitment of in-house administrators, support staff, and operators. All these equate to lower and more certain Total Costs of Operation.',
  btnName: 'Get Started',
  btnURL: '#',
}

export default function CoreFeature() {
  return (
    <section sx={{ variant: 'section.coreFeature' }}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle={data.subTitle}
            title={data.title}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
          />
        </Box>
        <Box sx={styles.thumbnail}>
          <Image src={FeatureThumb} alt="Thumbnail" />
          <Box sx={styles.shapeBox}>
            <Image src={shapePattern} alt="Shape" />
          </Box>
        </Box>
      </Container>
    </section>
  )
}

const styles = {
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
    pb: [0, 7, 0, null, 7],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', '80%', null, 340, 400, 430, null, 485],
    pb: ['50px', '60px', null, 0],
    mx: ['auto', null, null, 0],
    '.description': {
      pr: [0, null, 6, 7, 6],
    },
  },
  thumbnail: {
    display: 'inline-flex',
    position: 'relative',
    mr: 'auto',
    ml: ['auto', null, null, null, 7],
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto'],
      borderRadius: '13px',
    },
  },
  shapeBox: {
    position: 'absolute',
    bottom: -65,
    right: -165,
    zIndex: -1,
    display: ['none', 'inline-block', 'none', null, 'inline-block'],
  },
}
