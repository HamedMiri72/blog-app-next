import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

export default function BlogTableItem({authorImg, title, author,date}) {

    const BlogDate = new Date(date);
  return (
    <tr className='bg-white border-b'>
        <th scope='row' className='items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>

            <Image src={authorImg?authorImg:assets.profile_icon} width={40} height={40} alt=''/>
            <p>{author?author:"no author"}</p>
        </th>
        <td className='px-6 py-4'>
            {title?title:"no title"}
        </td>
        <td className='px-6 py-4'>
            {BlogDate.toDateString()}
        </td>
        <td className='cursor-pointer'>
            x
        </td>

    </tr>
  )
}
