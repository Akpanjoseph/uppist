import React,{useContext,useState} from 'react'
import CartContext from '../CardContext'

export function Checkout() {
    
    const {items} = useContext(CartContext)
  

    return (
        <>

        <div className='flex justify-center items-center w-full py-10 bg-red-700 text-white text-2xl font-bold mb-20'>
            <p>Carts</p>
        </div>
          {
            <div className=' flex flex-wrap  justify-center h-full w-screen items-cente mx-auto container space-x-4 my-auto space-y-8 '>
           {
             items.map(e =>{

                return(
                 <div className='flex  flex-col  text-center px-4 py-4 shadow-xl rounded-md items-center justify-center md:mx-7 transform-gpu  hover:scale-110   md:my-4 ' key={e.id}>
                 <img src={e.image} alt="" />
                     <p>{e.name}</p>
                 <p>${e.price}</p>
                    
                   
                 </div>
                )
             })
           }
            </div>
          }
        </>
    )
}
