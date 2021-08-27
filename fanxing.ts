// 泛型指的是类型参数化，即将原来某种具体的类型进行参数化。
// 设计泛型的目的在于有效约束类型成员之间的关系

// 给函数定义一个泛型参数
function reflect<P>(param: P): P {
  return param
}

function reflectArray<P>(param: P[]): P[] {
  return param.slice(0)
}

function reflectExtraParams<P, Q>(p1: P, p2: Q): [P, Q] {
  return [p1, p2]
}

class Memory<S> {
  store: S
  constructor(store: S) {
    this.store = store
  }
  set(store: S) {
    this.store = store
  }
  get() {
    return this.store
  }
}
const numMemory = new Memory<number>(1)
numMemory.get()
numMemory.set(3)


const reflectFn: <P>(param: P) => P = reflect