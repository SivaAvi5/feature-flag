import React, { useEffect, useState } from 'react'

const RandomColor = () => {
    const[typeOfColor,setTypeOfColor] = useState('hex')
    const[color,setColor] = useState('#000000')
    const[toggleText,setToggleText] = useState('true')

    const randomColorUtility = (length) => {
        return Math.floor(Math.random()*length)
    }

    const handleCreateRandomHexColor = () => {
        const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
        let hexColor = '#'
        for(let i=0; i<6; i++){
            hexColor += hex[randomColorUtility(hex.length)]
        }
        setColor(hexColor)
    }
    const handleCreateRandomRgbColor = () => {
        const r = randomColorUtility(256)
        const g = randomColorUtility(256)
        const b = randomColorUtility(256)

        setColor(`rgb(${r},${g},${b})`)
    }

    useEffect(() => {
        if(typeOfColor === 'rgb'){
            handleCreateRandomRgbColor()
        }else{
            handleCreateRandomHexColor()
        }
    },[typeOfColor])

  

  return (
    <div 
        style={{
            width:'100vw',
            height:'100vh',
            background: color,
            display:'flex',
            flexDirection:'column',
            justifyContent:'flex-start',
            alignItems:'center',
        }}
    >
        <div
            style={{
                marginTop:'40px'
            }}
        >
            <button onClick={() => setTypeOfColor('hex')}>Create HEX Color</button>
            <button onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button>
            <button onClick={typeOfColor === 'hex' ? () => handleCreateRandomHexColor(): () => handleCreateRandomRgbColor()}>Generate Random Color</button>
            <button onClick={() => setToggleText(!toggleText)}>Toggle Text</button>
        </div>
        <div
        style={{
            marginTop:'20%',
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center',
            color: toggleText? 'white':'black',         
            fontSize:'2rem',  
        }}
        >
            <h3>
                {
                    typeOfColor === 'rgb' ? 'RGB Color' : "HEX Color"
                }
            </h3>
            <h1>{color}</h1>

        </div>
    </div>
  )
}

export default RandomColor