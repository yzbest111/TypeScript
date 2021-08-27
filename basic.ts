const arrayOfNumber: number[] = [1, 2, 3]
const arrayOfString: string[] = ['a', 'b', 'c']

type adder = (a: number, b: number) => number
const add: adder = (a, b) => (a + b)

// 显示指定this指向
interface Person {
  name: string;
  say(this: Person): void
}

// 函数重载
// 函数重载列表的各个成员（即示例中的 14 ~ 16 行）必须是函数实现（即示例中的第 17 行）的子集
function convert(x: string): number
function convert(x: number): string
function convert(x: null): -1
function convert(x: string|number|null): number|string|-1 {
  if (typeof x === 'string') return Number(x)
  if (typeof x === 'number') return String(x)
  return -1
}