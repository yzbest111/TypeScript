class Animal {
  weight: number
  type = 'animal'
  constructor(weight: number) {
    this.weight = weight
  }
  say(name: string) {
    console.log('name: ', name)
  }
}

// Dog 继承自 Animal，如果有构造函数constructor，则必须在构造函数中调用super函数
// super函数在这里的作用是调用基类Animal的构造函数，所以需要显示传值，如果不传值
// 则会报类型错误
class Dog extends Animal {
  name: string
  constructor(name: string) {
    super(10)
    this.name = name
  }
}

// 类访问修饰符：public、protected、private
// public: 公有的属性和方法，任何地方可见，（子类和实例中）
// protected: 仅在自身和子类中可见
// private: 仅在自身可见
class Son {
  public firstName: string
  protected lastName: string = 'Stark'
  constructor(firstName: string) {
    this.firstName = firstName
  }
}
class GrandSon extends Son {
  constructor(firstName: string) {
    super(firstName)
    this.lastName
  }
}

// 只读修饰符： readonly
// Son类的public属性修饰符既公开可见又可以更改值。如果我们不希望类的属性被更改，
// 则可以使用readonly只读修饰声明类的属性
class Son1 {
  public readonly firstName: string
  constructor(firstName: string) {
    this.firstName = firstName
  }
}

// 存取器 getter/setter
// 通过get/set方法可以处理一些逻辑
class Father {
  public firstName: string
  protected lastName: string = 'Stark'
  constructor(firstName: string) {
    this.firstName = firstName
  }
}
class Child extends Father{
  constructor(firstName: string) {
    super(firstName)
  }
  get myLastName() {
    return this.lastName
  }
  set myLastName(name: string) {
    if (this.firstName === 'Tony') {
      this.lastName = name
    } else {
      console.error('Unable to change myLastName')
    }
  }
}

// 类的静态属性修饰符
// 类的静态属性只存在于当前修饰的类上，而不会在类的实例上
class MyArray {
  static displayName = 'MyArray'
  static isArray(obj: unknown) {
    return Object.prototype.toString.call(obj).slice(8, -1) === 'Array'
  }
}

// 抽象类
// 抽象类是一种不能被实例化，仅能被子类继承的特殊类
// 抽象类中定义的抽象属性和方法必须要被继承的子类实现，而非抽象属性则可以被子类继承
abstract class Adder {
  abstract x: number
  abstract y: number
  abstract add(): number
  displayName = 'Adder'
  addTwice(): number {
    return (this.x + this.y) * 2
  }
}
class NumberAdder extends Adder {
  x: number
  y: number
  constructor(x: number, y: number) {
    super()
    this.x = x
    this.y = y
  }
  add():number {
    return this.x + this.y
  }
}

// 接口和抽象类的区别在于接口只能定义类的成员
interface IAdder {
  x: number
  y: number
  add(): number
}
class Ader implements IAdder {
  x: number
  y: number
  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }
  add(): number {
    return this.x + this.y
  }
}