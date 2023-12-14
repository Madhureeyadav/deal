import React from 'react'
import Image from 'next/image'


const data=[{
    id: 1,
    image :'/img/icon1.png',
    title:'Living room',
    description:'120 *120 sqft'
},
{
    id: 1,
    image :'/img/icon1.png',
    title:'Living room',
    description:'120 *120 sqft'
},
{
    id: 1,
    image :'/img/icon1.png',
    title:'Living room',
    description:'120 *120 sqft'
},
{
    id: 1,
    image :'/img/icon1.png',
    title:'Living room',
    description:'120 *120 sqft'
},
{
    id: 1,
    image :'/img/icon1.png',
    title:'Living room',
    description:'120 *120 sqft'
},
{
    id: 1,
    image :'/img/icon1.png',
    title:'Living room',
    description:'120 *120 sqft'
},
{
    id: 1,
    image :'/img/icon1.png',
    title:'Living room',
    description:'120 *120 sqft'
},
{
    id: 1,
    image :'/img/icon1.png',
    title:'Living room',
    description:'120 *120 sqft'
},
]
const PropertyFact = () => {
  return (
    <div className='p-4'>  
<h1 className='text-3xl pb-5 p-2 font-bold border-l-4 border-red-600'>Fact and feature</h1>
<div className='flex m-1 w-2/3  md:text-center border-2 flex-wrap'>
        {data.map((datas)=> (
         <div key={datas.id} className='p-10 flex'>
            <div  className='flex flex-row'> <Image
            src={datas.image}
            alt={`Area ${datas.id}`}
            width={100}
            height={100} className='h-10 w-10'
          /></div>
          <div className='flex flex-row'>
            <ul>
                <li>
                    <label>{datas.title}</label>
                    <span>{data.description}</span>
                </li>
            </ul>
          </div>
          </div>
        
        ))};
     </div>
    </div>
  )
}

export default PropertyFact
