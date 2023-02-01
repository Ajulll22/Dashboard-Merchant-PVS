import React from 'react'

interface SidebarProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Sidebar = (props:SidebarProps) => {
  const Menus = [
    { title: "Dashboard", src: "Chart_fill", sub:"coba ajaa" },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User", gap: true },
    { title: "Schedule ", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files ", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
  ];

  return (
    <div
      className={` ${props.open ? "side-open" : "lg:w-20 -translate-x-48 lg:translate-x-0 "
        } bg-blue-900 h-screen p-5  pt-8 duration-300 fixed z-50 lg:relative`}
    >
      <img
        src="./src/assets/img/control.png"
        className={`lg:block hidden absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
       border-2 rounded-full  ${!props.open && "rotate-180"}`}
        onClick={() => props.setOpen(!props.open)}
      />
      <div className="flex gap-x-4 items-center">
        <img
          src="./src/assets/img/logo.png"
          className={`cursor-pointer duration-500 ${props.open && "rotate-[360deg]"
            }`}
        />
        <h1
          className={`text-white origin-left font-medium text-xl duration-200 ${!props.open && "scale-0"
            }`}
        >
          Designer
        </h1>
      </div>
      <ul className="pt-6">
        {Menus.map((Menu, index) => (
          <li
            key={index}
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-blue-700 text-gray-300 text-sm items-center gap-x-4 
          ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-blue-700"
              } `}
          >
            <img src={`./src/assets/img/${Menu.src}.png`} />
            <span className={`${!props.open && "hidden"} origin-left duration-200`}>
              {Menu.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar