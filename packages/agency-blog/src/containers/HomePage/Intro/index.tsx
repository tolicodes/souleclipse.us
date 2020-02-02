import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SocialProfile from "../../../components/SocialProfile/SocialProfile"
import {
  IntroWrapper,
  IntroTitle,
  Desciption,
  BgText,
  IntroContentWrapper,
} from "./style"
import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
} from "react-icons/io"

type IntroProps = {}

const SocialLinks = [
  {
    icon: <IoLogoFacebook />,
    url: "http://facebook.com/tolicodes",
    tooltip: "Facebook",
  },
  {
    icon: <IoLogoInstagram />,
    url: "http://instagram.com/tolicodes",
    tooltip: "Instagram",
  },
  {
    icon: <IoLogoGithub />,
    url: "http://github.com/tolicodes/soueclipse.us",
    tooltip: "Github",
  },
]

const Intro: React.FunctionComponent<IntroProps> = props => {
  const Data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          about
        }
      }
    }
  `)

  const { about } = Data.site.siteMetadata

  return (
    <IntroWrapper>
      <BgText>ABOUT</BgText>
      <IntroContentWrapper>
        <IntroTitle>Soul Eclipse</IntroTitle>
        <Desciption>{about}</Desciption>
        <SocialProfile items={SocialLinks} />
      </IntroContentWrapper>
    </IntroWrapper>
  )
}

export default Intro
