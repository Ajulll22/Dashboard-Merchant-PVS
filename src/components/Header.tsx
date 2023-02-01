import { Input, Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { RxCaretDown } from 'react-icons/rx'
import { useAppDispatch } from '../app/hooks'
import { unsetUser } from '../redux/store/userSlice'
import { toast } from 'react-hot-toast';

interface HeaderProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Header = (props: HeaderProps) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const logoutHandler = () => {
    dispatch(unsetUser())
    toast.success("Logout Success")
    navigate("/")
  }

  return (
    <div className="p-2 bg-white justify-between flex border border-gray-300">
      <div className="flex">
        <div onClick={() => props.setOpen(!props.open)} className={`space-y-1 w-7 my-auto duration-300 mr-3 block lg:hidden ${props.open && "translate-x-60 mt-1 fixed z-50"} `}>
          <div className={`w-full h-1 bg-gray-600 line1 ${props.open && "rotate-[38deg]"}`}></div>
          <div className={`w-full h-1 bg-gray-600 line2 ${props.open && "scale-y-0"}`}></div>
          <div className={`w-full h-1 bg-gray-600 line3 ${props.open && "-rotate-[38deg]"}`}></div>
        </div>
        <Input icon={<img src='/src/assets/img/Search.png' />} autoComplete='off' label='Search' />
      </div>
      <div className='flex'>
        <div className='my-auto text-white rounded-md hover:bg-gray-200 p-2'><img src="/src/assets/img/icn-notif.png" alt="" /></div>
        <Menu placement="bottom-end">
          <MenuHandler>
            <button className='flex my-auto rounded-md hover:bg-gray-200 p-2'>
              <img className='my-auto' src="/src/assets/img/icn-user-rnd.png" alt="" />
              <h3 className='my-auto text-sm text-gray-700 mx-3' >Username</h3>
              <RxCaretDown className='my-auto' />
            </button>
          </MenuHandler>
          <MenuList className='p-2' >
            <MenuItem onClick={logoutHandler} className='stroke-gray-700 hover:stroke-gray-200 hover:bg-primary hover:text-gray-300 flex'>
              <svg className='mr-2' width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="14" height="17" rx="2" strokeWidth={2} />
                <path d="M20.3536 10.3536C20.5488 10.1583 20.5488 9.84171 20.3536 9.64645L17.1716 6.46447C16.9763 6.2692 16.6597 6.2692 16.4645 6.46447C16.2692 6.65973 16.2692 6.97631 16.4645 7.17157L19.2929 10L16.4645 12.8284C16.2692 13.0237 16.2692 13.3403 16.4645 13.5355C16.6597 13.7308 16.9763 13.7308 17.1716 13.5355L20.3536 10.3536ZM8 10.5H20V9.5H8V10.5Z" stroke='#51CBFF' fill="#51CBFF" />
                <circle cx="5" cy="10" r="1" fill="#CCD2E3" />
              </svg>
              <h3 className='text-sm' >Logout</h3>
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
  )
}

export default Header