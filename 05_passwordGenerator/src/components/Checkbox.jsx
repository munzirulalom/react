import React from 'react'

export default function Checkbox({ name, label, checked = false }) {
  return (
    <div className='flex items-center gap-x-1'>
      <input type='checkbox' id={name} name={name} defaultChecked={checked} />
      <label htmlFor={name}>{label}</label>
    </div>
  )
}
