// @flow
import PropTypes from 'prop-types'
import React from 'react'
import { cpus } from 'os';

const Logo = ( {color, width} ) => (
  <svg viewBox="0 0 800 800" width={width} height='100%' fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask
      id="a"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
    >
      <circle cx="400" cy="400" r="400" fill="white" />
    </mask>
    <g mask="url(#a)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M800 0H0v800h800V0zM640 400c0 132.548-107.452 240-240 240V160c132.548 0 240 107.452 240 240z"
        fill={color}
      />
    </g>
  </svg>
)

export default Logo