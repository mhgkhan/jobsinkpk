"use client";

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { CgClose } from 'react-icons/cg';
import { MdMenu } from 'react-icons/md'

const Header = () => {

    const [openedMenu, setOpenedMenu] = useState(false)

    return (

        <header className='bg-[#0daf87] md:rounded-none rounded-md'>
            <nav className="container mx-auto flex items-end justify-between flex-wrap gap-5 py-1 px-1 ">
                <div className="Logo flex items-end justify-between gap-5 md:w-auto w-full">
                    <Link href="/" className='flex items-center justify-center gap-2 text-xl underline text-white font-bold'><Image src="/logo.png" alt='Jobs in KPK Logo' width="100" height={100} className='rounded-full w-[80px] h-[80px] ' /> JOBSINKPK</Link>
                    <button className='p-1 border border-1 border-white rounded-md bg-white cursor-pointer md:hidden flex' onClick={() => setOpenedMenu(!openedMenu)}>
                        {
                            openedMenu ? <CgClose className='text-3xl font-bold' /> : <MdMenu className='text-3xl font-bold' />
                        }
                    </button>

                </div>
                <ul className={`flex items-center justify-center gap-5 md:flex-row flex-col md:w-auto w-full md:h-auto ${openedMenu ? "h-auto" : "h-[0px] overflow-hidden"} `}>
                    <li className='md:w-auto w-full text-center'>
                        <Link href={"/"} className='text-white font-bold text-lg'>Home</Link>
                    </li>
                    {/* <li className='md:w-auto w-full text-center'>
                        <Link href={"/"} className='text-white font-bold text-lg'>Govt Jobs</Link>
                    </li>
                    <li className='md:w-auto w-full text-center'>
                        <Link href={"/"} className='text-white font-bold text-lg'>Private Jobs</Link>
                    </li> */}
                    <li className='md:w-auto w-full text-center'>
                        <Link href={"/contactus"} className='text-white font-bold text-lg'>Contact us </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
