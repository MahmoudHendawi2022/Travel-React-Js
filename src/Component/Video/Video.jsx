import React from 'react'

const Video = (props) => {
  return (
    <video src={props.video} autoPlay loop muted></video>
  )
}

export default Video