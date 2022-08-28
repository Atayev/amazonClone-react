import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

function Slider() {
    const items = [
        {
            url:'https://m.media-amazon.com/images/I/717OO5QwJnL._SX3000_.jpg'
        },
        {
            url:'https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg'
        },
        {
            url:'https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg'
        }
    ]
  return (
      <div>
          <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
          </Carousel>
    </div>
  )
}

function Item(props)
{
    return (
        <Paper style={{background:'transparent',borderBottom:'none', boxShadow:'none'}}>
            <img className='homeImage' src={props.item.url} alt="" />
        </Paper>
    )
}


export default Slider