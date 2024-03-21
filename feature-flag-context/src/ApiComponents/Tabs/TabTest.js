import React from 'react'
import Tabs from './Tabs'

const RandomComponent = () =>{
    return <h1>Some random component</h1>
}

const TabTest = () => {
    const tabs = [
        {
            label: 'Tab 1',
            content: <div>This is content for tab 1</div>,
        },
        {
            label: 'Tab 2',
            content: <div>This is content for tab 2</div>,
        },
        {
            label: 'Tab 3',
            content: <RandomComponent />,
        },
    ]

    const handleChange = (currentTabIndex) => {
        console.log(currentTabIndex)
    }

  return (
    <Tabs tabsContent = {tabs} onChange={handleChange} />
  )
}

export default TabTest