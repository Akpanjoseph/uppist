import React, { useState, useContext } from 'react'
import CartContext from '../CardContext';
import { useNavigate } from 'react-router-dom'

import item1 from '../img/item1.jpg';
import item2 from '../img/item2.jpg';
import item3 from '../img/item3.jpg';
import item4 from '../img/item4.jpg';
import item5 from '../img/item5.jpg';
import item6 from '../img/item6.jpg';


import cart from '../img/cart.png'
import logo from '../img/logo.png'
import header_img from '../img/header-img4.png'



export function Home() {

  const dataList = [
    {
      id: 1,
      name: 'item1',
      image: item1,
      price: 34
    },
    {
      id: 2,
      name: 'item2',
      image: item2,
      price: 30
    },
    {
      id: 3,
      name: 'item3',
      image: item3,
      price: 4
    },
    {
      id: 4,
      name: 'item4',
      image: item4,
      price: 34
    },
    {
      id: 5,
      name: 'item5',
      image: item5,
      price: 34
    },
    {
      id: 6,
      name: 'item6',
      image: item6,
      price: 34
    },
    {
      id: 7,
      name: 'item7',
      image: item1,
      price: 34
    },
    {
      id: 8,
      name: 'item8',
      image: item5,
      price: 34
    },
    {
      id: 9,
      name: 'item9',
      image: item4,
      price: 34
    },
    {
      id: 10,
      name: 'item10',
      image: item2,
      price: 30
    },

  ]


  const {items,addToCart} = useContext(CartContext)

  // nav function
  let navigate = useNavigate()

  function AddedToCart(check_item) {
    addToCart(check_item.id,check_item.name,check_item.price,check_item.image,1)
  }

  return (
    <>
      {/* nav */}
      <nav className=' flex flex-row justify-around  py-8 shadow-lg w-full  bg-white '>

        {/* logo */}
        <div className='flex '>
          <img src={logo} alt="" className='w-[50px]' />
          {/* name */}
          <p className='font-bold text-3xl'>Bomma</p>
        </div>



        {/* notification */}
        <div className='flex space-x-10' onClick={()=>{navigate('/checkout')}}>
          
            
              <div className='flex space-x-2'>
                <img src={cart} alt="" width='40px' />
                <p className='text-red-500 font-bold'>{items.length}</p>
              </div>
          
        </div>
      </nav>



      {/* header */}
      <header className='mb-[10%] flex flex-col-reverse justify-center items-center text-white bg-black w-full pt-[200px] pb-[50px]  md:pt-[10%] md:flex-row  '  >
        <div className='font-bold md:text-5xl text-3xl tracking-wider capitalize text-center'>
          <p >play sounds like </p>
          <p className='text-2xl'>never before</p>
        </div>

        <div>
          <img src={header_img} alt="" className='md:w-[500px] w-[200px] ' />
        </div>
      </header>


      {/* body */}
      < div className='flex flex-col my-20 '>
        {
          <div className=' flex flex-wrap  justify-center h-full w-screen items-cente mx-auto container space-x-4 my-auto space-y-8 '>
            {
              dataList.map((item) => {
                return (
                  < div className='flex  flex-col  text-center px-4 py-4 shadow-xl rounded-md items-center justify-center md:mx-7 transform-gpu  hover:scale-110   md:my-4 ' key={item.id}>

                    <img src={item.image} alt="" className='' />
                    <p >{item.name}</p>
                    <p>${item.price}</p>
                    <p className='bg-orange-400 px-4 py-2 rounded-md text-white font-bold hover:bg-black' onClick={() => AddedToCart(item)}>Add To cart</p>
                  </div>

                )
              })
            }
          </div>
        }

      </div>

    </>
  )
}
