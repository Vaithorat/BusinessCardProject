import React from 'react'
import Photo from "./Images/photo.jpg"
export default function Nav (){
    return (
        <>
        <div className='photo'>
            <img className='me' src={Photo} width="317px" height="317px" alt="" />
        </div>
        </>
    )
}