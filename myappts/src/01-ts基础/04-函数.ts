function test1(a: string, b: string): string {
  return a.substring(0, 1) + b.substring(0, 1)
}

const myname: string = test1('aaa', 'bbb')
console.log(myname)

// --------------------

interface IFunc {
  (a: string, b: string, c?: number): string
}

const myfunc2: IFunc = function test1(
  a: string,
  b: string,
  c?: number
): string {
  return a.substring(0, 1) + b.substring(0, 1)
}

interface Iobj {
  name: string
  age: number
  getName: (name: string) => string
}

const obj: Iobj = {
  name: 'createcoder',
  age: 18,
  getName(name: string): string {
    return name
  },
}

const name: string = obj.getName('createcoder')

export default {}
