interface Ifunc {
  getName: () => string
  getAge: () => number
}

class A implements Ifunc {
  a1() {}

  a2() {}

  getName() {
    return 'AAA'
  }
  getAge() {
    return 18
  }
}

class B implements Ifunc {
  b1() {}

  b2() {}

  getName() {
    return 'BBB'
  }
  getAge() {
    return 18
  }
}

function init(obj: Ifunc) {
  obj.getName()
}

const objA = new A()
const objB = new B()

init(objA)
init(objB)

export default {}
