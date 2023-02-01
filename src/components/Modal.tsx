import React from 'react'

interface ModalProps {
    children: React.ReactNode
    isShow: boolean
    setIsShow: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal = (props: ModalProps) => {
    return (
        <>
            <div
                className={`duration-500 ${props.isShow ? "-translate-y-0" : "-translate-y-full"} justify-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none`}
            >
                <div className="relative w-1/2 my-6 mx-auto">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="modal-content py-4 text-left px-6">
                            <div className="flex justify-end items-center pb-3">
                                <div onClick={() => props.setIsShow(false)} className="cursor-pointer z-50 p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 dark:text-gray-300" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M6 18L18 6M6 6l12 12"></path>
                                    </svg>
                                </div>
                            </div>

                            {props.children}

                        </div>
                    </div>
                </div>
            </div>
            {props.isShow ? (
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            ) : null}
        </>
    )
}

export default Modal