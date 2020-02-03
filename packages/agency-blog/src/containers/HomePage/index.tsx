import * as React from "react"
import PersonalBlogWrapper from "./style"
import Intro from "./Intro"
import Posts from "./Posts"
import FeaturedPosts from "./FeaturedPost"
import YoutubeVideo from "../../components/YoutubeVideo"

type PersonalBlogProps = {}

const PersonalBlog: React.FunctionComponent<PersonalBlogProps> = ({
  ...props
}) => {
  return (
    <PersonalBlogWrapper {...props}>
      <YoutubeVideo
        videoSrcURL="https://www.youtube.com/embed/x5x3WS6Z6d8?autoplay=1&loop=1"
        videoTitle="Asya and Toli Cuddling"
        loop={1}
      >
        <Intro />
      </YoutubeVideo>

      <FeaturedPosts />
      <Posts />
    </PersonalBlogWrapper>
  )
}

export default PersonalBlog
