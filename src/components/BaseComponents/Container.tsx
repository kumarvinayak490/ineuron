import React, {ReactNode, ReactElement} from 'react'

const Container = ({children, className, ...rest} : {children :ReactNode , className:string}):ReactElement => {
  return (
    <div className={`px-2 ${className}`} {...rest}>{children}</div>
  )
}

export default Container