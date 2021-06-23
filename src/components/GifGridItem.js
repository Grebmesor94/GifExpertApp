import React from 'react'

const GifGridItem = ({url, title, id}) => {
  
  return (
    <div className="card">
      <img src={url} alt={title}></img>
    </div>
  )
}

export default GifGridItem
