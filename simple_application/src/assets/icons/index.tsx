import React, { CSSProperties, ReactElement } from 'react'

type IconProps = {
  name: 'chacha' | 'errorFace'
  // | 'phone'
  // | 'arrowDownGreen'
  // | 'checkGreen'
  // | 'checkGray'
  // | 'checkWhite'
  // | 'videoPlayer'
  // | 'storeReport'
  style?: CSSProperties
  click?: () => void
}

function Icon({ name }: IconProps): ReactElement | null {
  switch (name) {
    // Your switch cases here...
    case 'chacha':
      return (
        <svg
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="9.5" cy="9.5" r="9.5" fill="#FF0000" />
          <path
            d="M4.6814 4.27881L14.8184 15.2214"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M14.6487 4L4 15"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      )
    case 'errorFace':
      return (
        <svg
          width="48"
          height="44"
          viewBox="0 0 48 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="5.48571" cy="6.34277" r="5.48571" fill="#D9D9D9" />
          <circle cx="42.514" cy="6.34265" r="5.48571" fill="#D9D9D9" />
          <path
            d="M5.79321 42C12.0001 37.0038 28.138 30.0093 43.0346 42"
            stroke="#D9D9D9"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      )
    default:
      return null
  }
}

export default Icon
