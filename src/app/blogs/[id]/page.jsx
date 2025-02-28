'use client';

import { assets, blog_data } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState, use } from 'react'
import axios from 'axios';

export default function page({params: paramsPromise}) {
  const params = use(paramsPromise);
  const [data, setData]  = useState(null);

  const fetchBlogData = async () => {
      const response = await axios.get("/api/blog",{
        params:{
          id : params.id
        }
      })
      setData(response.data);
  }

  useEffect(() => {

    fetchBlogData();

  }, [])
  return ( data?<>
    <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>

      <div className='flex justify-between items-center'>
        <Link href={"/"}>
        <Image
        src={assets.logo}
        alt=''
        width={180} className='w-[130] sm:w-auto'/>
        </Link>
        <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-md '>Get Started <Image src={assets.arrow} alt=''/></button>
        
      </div>

      <div className='text-center my-24'>

        <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
        <Image src={data.authorImg} alt='' width={60} height={60} className='mx-auto mt-6 border border-white rounded-full'/>

        <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>

      </div>
        
    </div>
    <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>

        <Image src={data.image} alt='' width={1280} height={720} className='border-4 border-white'/>
        <h1 className='my-8 text-[26px] font-semibold'>Introduction:</h1>
        <p>{data.description}</p>
        <h3></h3>

    </div>
    </>:<>
    
    </>
  )
}
