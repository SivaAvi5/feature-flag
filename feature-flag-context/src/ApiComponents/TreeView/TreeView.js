import React from 'react'
import MenuList from './MenuList'
import './style.css'

const TreeView = ({datas = []}) => {
  return (
    <div className='tree-view-container'>
        <MenuList list = {datas} />
    </div>
  )
}

export default TreeView