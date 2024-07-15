import { PredictAllAgeAndGenderWithFaceAlignmentTask } from 'face-api.js/build/commonjs/globalApi/PredictAgeAndGenderTask'
import React from 'react'

function Typography() {
  return (
    <>
    {/* heading */}
     <h1 className="h5">Hello</h1>

     {/* display */}
    <h1 className="display-1">Hello</h1>

    {/* lead */}
    <p className="lead text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dictum maximus sem ac tempor. Vivamus laoreet ullamcorper condimentum. Nulla et risus felis. Nulla pellentesque metus id dui commodo bibendum. Curabitur a ipsum eget augue lobortis tristique quis sit amet ligula. Nulla ac massa dignissim, efficitur tortor semper, interdum odio. Phasellus ac enim a ante iaculis semper id sed mi.</p>
   
     {/* textAlignment */}
      <h1 className="display-5 text-center">Hello World </h1>
      {/* // text Transform */}
      <h1 className="display-5 text-capitalize">hello world </h1>
     {/* // Font-size */}
    <p className="fs-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dictum maximus sem ac tempor.</p>

    {/* font-weight */}
    <h1 className="fw-bold">Hello World </h1>
    <h1 className="fst-italic">hello world </h1>
    {/* Text-Decoration */}
    <h1 className="text-decoration-underline">hello world </h1>
     </>
  )
}

export default Typography