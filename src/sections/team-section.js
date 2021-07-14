/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Container, Grid } from 'theme-ui'
import SectionHeader from 'components/section-header'
import TeamCard from 'components/team-card'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'

import Member1 from 'assets/esscor/Slide1.png'
import Member2 from 'assets/esscor/Slide2.png'
import Member3 from 'assets/esscor/Slide3.png'
import Member4 from 'assets/esscor/Slide4.png'
import Member5 from 'assets/esscor/Slide5.png'
import Member6 from 'assets/esscor/Slide6.png'

const data = [
  {
    id: 1,
    imgSrc: Member1,
    altText: 'Dexter Loquinario',
    title: 'Dexter Loquinario',
    designation: 'Senior Account Manager',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 2,
    imgSrc: Member2,
    altText: 'Algin Bacalso',
    title: 'Algin Bacalso',
    designation: 'Project Engineer',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 3,
    imgSrc: Member3,
    altText: 'Paulito Milang',
    title: 'Paulito Milang',
    designation: 'Hardcore Technician',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 4,
    imgSrc: Member4,
    altText: 'Jhon Frederic Getigan',
    title: 'Jhon Frederic Getigan',
    designation: 'Systems Engineer',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 5,
    imgSrc: Member5,
    altText: 'Eleazar Bohol',
    title: 'Eleazar Bohol',
    designation: 'Systems Engineer',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
  {
    id: 6,
    imgSrc: Member6,
    altText: 'Van Darrell Ponce',
    title: 'Van Darrell Ponce',
    designation: 'Solutions Engineer / Web Developer',
    socialProfile: [
      {
        id: 1,
        name: 'facebook',
        path: '#',
        icon: <FaFacebookF />,
      },
      {
        id: 2,
        name: 'twitter',
        path: '#',
        icon: <FaTwitter />,
      },
      {
        id: 3,
        name: 'instagram',
        path: '#',
        icon: <FaInstagram />,
      },
    ],
  },
]

export default function TeamSection() {
  return (
    <section
      style={{
        backgroundColor: 'rgb(250,250,250)',
        paddingTop: '40px',
        marginBottom: '40px',
      }}
    >
      <Container>
        <SectionHeader
          slogan="Meet Our Team"
          title="The most qualified and talented individuals"
        />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <TeamCard
              key={item.id}
              src={item.imgSrc}
              altText={item.altText}
              title={item.title}
              designation={item.designation}
              social={item.socialProfile}
            />
          ))}
        </Grid>
      </Container>
    </section>
  )
}

const styles = {
  grid: {
    mt: [0, null, -6, null, -4],
    gridGap: ['35px 0px', null, 0, null, null, '30px 35px'],
    gridTemplateColumns: [
      'repeat(2,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
}
