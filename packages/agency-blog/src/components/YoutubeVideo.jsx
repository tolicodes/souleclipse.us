import React from "react"
import AspectRatio from "./AspectRatio"

const Video = ({ children, videoSrcURL, videoTitle, ...props }) => (
  <AspectRatio
    ratio={16 / 9}
    component="iframe"
    src={videoSrcURL}
    title={videoTitle}
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    frameBorder="0"
    webkitallowfullscreen="true"
    mozallowfullscreen="true"
    allowFullScreen
    width="100%"
    {...props}
  >
    {children}
  </AspectRatio>
)
export default Video
