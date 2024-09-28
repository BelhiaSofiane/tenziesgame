import React from 'react'

const Die = ({value, isHeld, holdDice}, props) => {

  return (
    <div onClick={()=> holdDice()} key={props.key} className="grid-item" style={isHeld ? {backgroundColor: "#59E391"}:{backgroundColor: "white"} }>
      <h2 className='dice'>{value}</h2>
    </div>
  )
}

export default Die