import React from 'react'

const PropertyDetailDes = () => {
  const format1=[{
    title:'Bathroom',
    description:'20*16 sq feet'
  },
  {
    title:'Living Room',
    description:'20*16 sq feet'
  },
  {
    title:'Dinning Area',
    description:'20*16 sq feet'
  }
  ,
  {
    title:'Garden',
    description:'30*30 sq feet'
  }
]
const format2 =[{
  title:'Garage',
  description:'20*16 sq feet'
},
{
  title:'Bedroom',
  description:'20*16 sq feet'
},
{
  title:'Gym Area',
  description:'20*16 sq feet'
},
{
  title:'parking',
  description:'20*16 sq feet'
}]
  return (
    <div className='   '>
    <h1 className=' m-1 p-2 text-3xl border-l-4 border-red-600 pb-5 font-bold'>Property Detail</h1>
    
      <div className='flex justify-evenly bg-gray-300 '>
        <div className='flex flex-col p-5'>
          <ul>
             { format1.map((formats) =><li className='space-x-10 pb-10' >
                  <label>{formats.title} :</label>
                  <span>{formats.description}</span>
              </li>)}
          
              </ul>
              </div>
              <div className='flex border-l-2  flex-col'></div>
              <div className='flex p-5 flex-col'>
                <ul>
                { format2.map((formats) =><li className='space-x-10 pb-10' >
                  <label>{formats.title} :</label>
                  <span>{formats.description}</span>
              </li>)}
              </ul> 
              </div>
              </div>
  </div>
  )
}

export default PropertyDetailDes
