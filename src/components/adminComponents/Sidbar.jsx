import { assets } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Sidbar() {
  return (
    <div className='flex flex-col bg-slate-100 '>

        <div className='px-2 sm:pl-14 py-3 border border-black'>

            <Image src={assets.logo} width={120} alt=''/>

        </div>
        <div className='sm:w-80 h-[100vh] relative py-12 border border-black'>

            <div className='w-[50%] sm:w-[80%] absolute right-0'>

                <Link href={"/admin/addProduct"} className='flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-md'>

                    <Image src={assets.add_icon} alt='' width={28}/>
                    <p>Add blogs</p>

                </Link>

                <Link href={"/admin/blogList"} className='flex mt-5 items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-md'>

                    <Image src={assets.blog_icon} alt='' width={28}/>
                    <p>Blog list</p>

                </Link>

                <Link href={"/admin/subscriptions"} className='flex mt-5 items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-md'>

                    <Image src={assets.email_icon} alt='' width={28}/>
                    <p>Subscriptions</p>

                </Link>

            </div>

            

        </div>

    </div>
  )
}
