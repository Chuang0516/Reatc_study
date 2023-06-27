class Bus {
  // 私有属性
  private _list: any = []
  // 共有属性
  public name = 'createcoder'
  // 继承属性
  protected age = 18

  subscribe(cb: any) {
    this._list.push(cb)
  }
  dispatch() {
    this._list.forEach((cb: any) => {
      cb && cb()
    })
  }
}

class Child extends Bus {
  constructor() {
    super()
  }

  aaa() {
    console.log()
  }
}

const obj = new Bus()

console.log(obj.name)

export default {}
