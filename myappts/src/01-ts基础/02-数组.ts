const list1: string[] = ['1', '2', '3']

for (let i in list1) {
  list1[i].substring(0, 1)
}

list1.push('a')

const list2: number[] = [1, 2, 3]
list2.push(4)

const list3: (number | string)[] = [1, 2, 'a', 'b']
list3.push('a')

// -----------------------------------
const mylist1: Array<string> = ['a', 'b', 'c']
mylist1.push('d')

const mylist2: Array<string | number> = [1, 2, 'a', 'b']
mylist2.push(3)
mylist2.push('c')

export default {}
