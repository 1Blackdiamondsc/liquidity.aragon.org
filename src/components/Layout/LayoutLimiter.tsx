import React, { ReactNode } from 'react'

type Sizes = 'extraSmall' | 'small' | 'medium' | 'large'

type LayoutGutterProps = {
  children?: ReactNode
  size?: Sizes
}

const LIMITER_WIDTHS: Record<Sizes, string> = {
  extraSmall: '780px',
  small: '960px',
  medium: '1180px',
  large: '1360px',
}

function LayoutLimiter({
  children,
  size = 'large',
  ...props
}: LayoutGutterProps): JSX.Element {
  const width = LIMITER_WIDTHS[size]

  return (
    <div
      css={`
        margin-left: auto;
        margin-right: auto;
        max-width: ${width};
        width: 100%;
      `}
      {...props}
    >
      {children}
    </div>
  )
}

export default LayoutLimiter
