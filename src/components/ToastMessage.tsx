import React from 'react'
import { Toaster } from 'react-hot-toast';

const ToastMessage = () => {
  return (
    <Toaster position='top-right' 
        toastOptions={
            { 
                style: {
                    padding: '16px',
                },
            }}
     />
  )
}

export default ToastMessage