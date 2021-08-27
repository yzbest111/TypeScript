interface ProgramLanguage {
  name: string;
  age: () => void;
}

type StudyLanguageType = (language: ProgramLanguage) => void

// 索引签名，约定索引的类型
// 通过[索引名： 类型]的格式约束索引的类型
interface LanguageRankInterface {
  [rank: number]: string;
}
let LanguageRankMap: LanguageRankInterface = {
  1: 'TypeScript', // ok
  2: 'JavaScript', // ok
  'WrongINdex': '2012' // WrongINdex的类型错误
};
interface StringMap {
  [prop: string]: number|string;
  age: number;
  name: string;
}
let person: StringMap = { age: 10, name: 'zane'}

// 类型别名和接口类型在很多情况下效果等价，但在某些特定的场景下两者还是有很大区别。
// 比如重复定义接口类型，它的属性会叠加，这个特性使得我们可以及其方便的对全局变量、第三方库的类型做扩展
{
  // 接口类型属性可以叠加
  interface Language {
    id: number;
  }
  interface Language {
    name: string;
  }
  const lang: Language = {
    id: 1,
    name: 'zane'
  }
}
{
  // 类型别名属性不能叠加, 会报错
  type Language = {
    id: number
  }
  type Language = {
    name: string;
  }
  const lang: Language = {
    id: 1,
    name: 'zane'
  }
}