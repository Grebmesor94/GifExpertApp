import React from 'react'
import PropTypes from 'prop-types'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem';



const GifGrid = ({category}) => {

  const {data, loading} = useFetchGifs(category); 

  return (
    <>
      <h3>{category}</h3>
      {loading && <p>Cargando</p>}
      { <div className="card-box">
        <div className="card-box__title">
        </div>
        {
          data.map(img => (
            <GifGridItem 
              {...img}
              key={img.id}
            />
          ))
        }
      </div>
     } 
    
    </>
  )
}

GifGrid.propTypes = {
category: PropTypes.string.isRequired
}

export default GifGrid
