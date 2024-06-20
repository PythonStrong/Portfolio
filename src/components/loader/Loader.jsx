import React from 'react'
import './loader.css'
import { logo } from '../../assets'

export default function Loader() {
  return (
    <div className='flex items-center justify-center h-[100vh]'>
      <div class="terminal-loader">
        <div class="terminal-header">
          <div class="terminal-title">Status</div>
          <div class="terminal-controls">
            <div class="control close"></div>
            <div class="control minimize"></div>
            <div class="control maximize"></div>
          </div>
        </div>
        <div className='flex items-center justify-center flex-col h-[35vh] cardd'>
          <img width={160} src={logo} alt="" />
          <div class="content">
            <div class="text">By Hydra_Coder!</div>
          </div>
        </div>
      </div>
    </div>


  )
}
