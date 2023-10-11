import React from 'react'

function Message({isSentByMe}) {
  return (

    <div className='flex-utilities flex-row justify-end w-100 parent-relative margin-utilities mt-10'>
        <div className='bg turquoise border-radius-utilities message-bubble padding-utilities padding-sm flex-utilities flex-row items-center justify-center parent-relative w-50 text-xs'>
            Hi! Next week we''ll start a new project. I'll tell you all the details later
        </div>
    </div>
  )
}

export default Message
