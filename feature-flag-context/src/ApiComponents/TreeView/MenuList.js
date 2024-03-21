import React from 'react'
import MenuItem from './MenuItem'


const MenuList = ({list = []}) => {
    // console.log(list[2].children)
  return (
    <ul className='menu-list-container'>
        {
            list && list.length  ? 
            list.map(listItem => <MenuItem item = {listItem} />)
            :null
        }
    </ul>
  )
}

export default MenuList