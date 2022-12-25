import React from 'react'
import Image from 'next/image'
import {
    MagnifyingGlassIcon,
    ShoppingCartIcon,
    Bars3Icon,
} from "@heroicons/react/24/outline"
function Header() {
    return (
        <header>
            {/* 上位のナビゲーション */}
            <div className='flex items-center bg-amazon_blue p-1 flex-grow py-2'>
                <div className='mt-2 flex items-center flex-grow sm:flex-grow-0'>
                    <Image
                        src='https://links.papareact.com/f90'
                        width={150}
                        height={40}
                        style={{ objectFit: "contain" }}
                        className='cursor-pointer' />
                </div>
                {/* 検索バー */}
                <div className='hidden sm:flex m-2 items-center h-10 rounded-md flex-grow bg-yellow-400 hover:bg-yellow-500 cursor-pointer'>
                    <input className='p-5 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4' type="text" />
                    <MagnifyingGlassIcon className='h-12 p-4' />
                </div>
                {/* 右側 */}
                <div className='text-white flex items-center text-xs space-x-6 mx-6'>
                    <div className='link'>
                        <p>こんにちは Sonny Sangha</p>
                        <p className='font-extrabold md:text-sm'>Account & List</p>
                    </div>
                    <div className='link'>
                        <p>Returns</p>
                        <p className='font-extrabold md:text-sm'>& Orders</p>
                    </div>
                    <div className='relative link flex items-center'>

                        <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold'>4</span>
                        <ShoppingCartIcon className='h-10' />
                        <p className='hidden md:inline font-extrabold md:text-sm mt-2'>CARTS</p>
                    </div>
                </div>
            </div>

            {/* 下位のナビゲーション */}
            <div className='flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm'>
                <p className='link flex items-center'>
                    <Bars3Icon className='h-6 mr-1'/>
                    ALL
                </p>
                <p className='link'>Prime Video</p>
                <p className='link'>Amazon Business</p>
                <p className='link'>Today's Deals</p>
                <p className='link hidden lg:inline-flex'>Electronics</p>
                <p className='link hidden lg:inline-flex'>食品 & Grocery</p>
                <p className='link hidden lg:inline-flex'>Prime</p>
                <p className='link hidden lg:inline-flex'>再購入</p>
                <p className='link hidden lg:inline-flex'>Shopper Toolkit</p>
                <p className='link hidden lg:inline-flex'>Health & Personal Care</p>
            </div>
        </header>
    )
}

export default Header