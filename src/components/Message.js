import React from 'react'

function Message({isSentByMe}) {
  return (
    <>
      {!isSentByMe ?
          (<div className='flex-utilities flex-col justify-end items-end w-100 parent-relative margin-utilities mt-10'>
              <div className='bg turquoise border-radius-utilities message-bubble padding-utilities padding-md flex-utilities flex-col items-center justify-center parent-relative w-50 text-xs'>
                  Hi! Next week we''ll start a new project. I'll tell you all the details later
                  <div className='parent-relative w-100 flex-utilities flex-row justify-end  bottom-50 margin-utilities margin-sm text-xxxs'>9:00</div>
              </div>
          </div>)
          :
          <div className='flex-utilities flex-col justify-end w-100 parent-relative margin-utilities mt-10'>
              <div className='bg grey border-radius-utilities message-bubble-left padding-utilities padding-md flex-utilities flex-col items-center justify-center parent-relative w-50 text-xs'>
                  Hi! Next week we''ll start a new project. I'll tell you all the details later
                  <div className='parent-relative w-100 flex-utilities flex-row justify-end  bottom-50 margin-utilities margin-sm text-xxxs'>9:00</div>
              </div>

          </div>
        }
    </>
  )
}

export default Message
