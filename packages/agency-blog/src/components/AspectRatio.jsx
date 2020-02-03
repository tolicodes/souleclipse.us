import * as React from "react"
import styled from "styled-components"

export const OuterWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  /**
   * For human readability, the ratio is expressed as
   * width / height, so we need to invert it.
   */
  padding-bottom: ${props => (1 / props.ratio) * 100}%;
`
export const innerWrapperMaker = component => styled(component)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export default ({ children, ratio, component = "div", ...props }) => {
  const InnerWrapper = innerWrapperMaker(component)
  return (
    <OuterWrapper ratio={ratio}>
      <InnerWrapper {...props}></InnerWrapper>
      {children}
    </OuterWrapper>
  )
}
