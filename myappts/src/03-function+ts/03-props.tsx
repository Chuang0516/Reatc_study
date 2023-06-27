import React from 'react'

export default function APP() {
  return (
    <div>
      <Child name='aaa' />
    </div>
  )
}

interface IProps {
  name: string
}

// function Child(props: IProps) {
//   return <div>child-{props.name}</div>
// }

const Child: React.FC<IProps> = (props) => {
  return <div>child-{props.name}</div>
}
