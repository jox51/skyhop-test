const ClockIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="black"
        strokeWidth="1"
        fill="none"
      />

      <line
        x1="12"
        y1="12"
        x2="12"
        y2="6"
        stroke="black"
        strokeWidth="1"
        transform="rotate(280,12,12)"
      />
      <line
        x1="12"
        y1="12"
        x2="12"
        y2="5"
        stroke="black"
        strokeWidth="1"
        transform="rotate(120,12,12)"
      />
    </svg>
  )
}

export default ClockIcon
