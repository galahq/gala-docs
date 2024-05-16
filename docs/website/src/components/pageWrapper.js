//wrapper to add some nice margins for JSX pages

import React from 'react'
import wrapper from './pageWrapper.module.css'

export default function Wrapper(props) {

  return <div className={props.wide ? wrapper.wide : wrapper.narrow}>{props.children}</div>
}
