import React from 'react'

const Tags = (props) => {
  return (
    <div className="bg-[#EFF4FA] py-2 px-3 rounded-md text-[#346CC4] h-[32px] w-auto flex items-center justify-center">
      {props.Text}
    </div>
  )
}

export default Tags