import React from 'react'
import {toHex} from 'color2k'
import './CSSTokenSwatch.css'

export type CSSTokenSwatchProps = {
  color?: string
}

export const CSSTokenSwatch = ({color}: CSSTokenSwatchProps) => {
  const ref = React.useRef<HTMLDivElement | null>(null)
  const [hex, setHex] = React.useState<string | null>(null)

  React.useEffect(() => {
    if (ref.current === null) {
      return
    }

    const style = getComputedStyle(ref.current)
    const rgb = style.getPropertyValue('background-color')
    setHex(toHex(rgb))
  }, [color])

  if (color === undefined) {
    return null
  }
  return (
    <div className="TokenSwatch">
      <div className="TokenSwatch--color" style={{backgroundColor: `var(--${color})`}} ref={ref}></div>
      {color ? <p data-token-name>{color}</p> : null}
      {hex ? <p data-token-name>{hex}</p> : <p>---</p>}
    </div>
  )
}

export default CSSTokenSwatch

CSSTokenSwatch.displayName = 'CSSTokenSwatch'
