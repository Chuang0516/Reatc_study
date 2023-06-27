interface IObj {
  name: string
  age: number
  // 可选的 location
  location?: string
  // 其它任意类型的数据
  [propName: string]: any
}

const obj1: IObj = {
  name: 'createcoder',
  age: 18,
  location: '西安',
  grade: '10',
}

console.log(obj1.grade)

export default {}
