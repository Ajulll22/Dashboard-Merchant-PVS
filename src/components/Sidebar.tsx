import React, { useState } from 'react'
import { IoIosArrowDropdown } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { Menus } from '../app/Menus';
import Avatar from './Avatar';

interface SidebarProps {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Sidebar = (props: SidebarProps) => {
    const [subOpen, setSubOpen] = useState(-1)
    const navigate = useNavigate()

    const handleClickMenu = (index: number) => {
        if (Menus[index].sub == undefined) {
            props.setOpen(false)
            navigate(Menus[index].path)
            return
        }

        if (subOpen == index) {
            setSubOpen(-1)
            return
        }
        setSubOpen(index)
        return
    }

    return (
        <div
            className={`${props.open ? "" : "-translate-x-60 lg:translate-x-0 "
                }w-60 bg-primary h-screen p-5  pt-8 duration-300 fixed z-50 lg:relative`}
        >
            <Avatar />
            <div className='mt-6 overflow-auto h-[68vh]'>
                <ul className="">
                    {Menus.map((Menu, index) => (
                        <li
                            key={index}
                            className={`rounded-md cursor-pointer hover:bg-blue-700 text-gray-300 text-sm 
                            ${Menu.gap ? "mt-9" : "mt-2"} ${subOpen == index && "bg-blue-700"} `}
                        >
                            <div onClick={() => handleClickMenu(index)} className='flex px-2 py-2 items-center gap-x-4'>
                                <img className='h-[22px] w-[22px]' src={`/src/assets/img/${Menu.src}.png`} />
                                <div className={` flex justify-between w-full duration-200`}>
                                    <span>{Menu.title}</span>
                                    {Menu.sub && <IoIosArrowDropdown className={`my-auto duration-200 ${subOpen == index && "-rotate-180"}`} />}
                                </div>
                            </div>
                            <div style={{ maxHeight: `${subOpen != index ? "0px" : Menu.sub && (Menu.sub.length * 41) + "px"}` }} className={`mt-2 overflow-hidden duration-500 ${subOpen != index ? "mt-0" : `pb-2`}`} >
                                {Menu.sub && Menu.sub.map((SubMenu, i) => (
                                    <div key={i} className={`hover:bg-blue-500 px-4 py-2 pr-0 flex gap-x-4 ${SubMenu.active && "border-r-2"}`}>
                                        <div className='my-auto w-4 flex justify-center' >
                                            <div className={`bg-gray-300 rounded-md my-auto h-1 ${SubMenu.active ? "w-4" : "w-1"}`}></div>
                                        </div>
                                        <div className='ml-1'>{SubMenu.subTitle}</div>
                                    </div>
                                ))}
                            </div>
                        </li>
                    )
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar