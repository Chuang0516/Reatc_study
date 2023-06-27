import React, { useState } from 'react'

export default function APP() {
  // 约束状态
  const [name, setname] = useState<string>('createcoder')
  return (
    <div>
      APP-{name.substring(0, 1).toUpperCase() + name.substring(1)}
      <button
        onClick={() => {
          setname('xiaoming')
        }}
      >
        click
      </button>
    </div>
  )
}
