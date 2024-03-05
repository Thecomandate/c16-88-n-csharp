import React from 'react'

export default function Repositorios() {
  return (
    <div className="flex flex-col items-start w-full pr-16 pt-20 pl-5 gap-3">
      <div>
        <p className="text-xl">Repositorios</p>
      </div>

      <div className="flex flex-col w-full justify-start">
        <p>Url</p>
        <input className="bg-[#f2f2f2] p-1 rounded-xl" type="text" />
      </div>

      <div className="flex flex-col w-full justify-start">
        <p>Url</p>
        <input className="bg-[#f2f2f2] p-1 rounded-xl" type="text" />
      </div>
    </div>
  )
}
