import React from 'react'

function ProgressBar({ containerColor, progressColor, currentValue, maxValue}) {

  const calculateWidth = () => {
    const step = 100 / maxValue;
    const width = step * currentValue;
    return `${width}%`;
  }

  const progressContainer = {
    width: `100%`,
    height: '1.25rem',
    margin: '0.75rem auto',
    backgroundColor: containerColor,
    borderRadius: '8px'
  }

  const progress = {
    transition: 'all 0.5s ease',
    width: calculateWidth(),
    height: '100%',
    backgroundColor: progressColor,
    borderRadius: 'inherit',
    padding: '0.25rem',
    fontSize: '0.75rem',
    textAlign: "right",
    fontWeight: "bold"
  }

  return (
    <div style={progressContainer}>
      <div style={progress}>{currentValue}s</div>
    </div>
  )
}

export default ProgressBar;
