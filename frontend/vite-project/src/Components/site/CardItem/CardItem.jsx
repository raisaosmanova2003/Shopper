import React, { Fragment } from 'react'
import Card from '../Card/Card'

const CardItem = ({data}) => {
  return (
    <Fragment>
        {
        data.map((item,index)=>{
            return(
                <Card item={item} key={index}/>
            )
        })
    }
    </Fragment>
    
  )
}

export default CardItem
