# type-toolkit

<p align="center">
  <a href="https://npmjs.com/package/type-toolkit"><img src="https://img.shields.io/npm/v/type-toolkit.svg?style=flat-square" alt="npm downloads"></a>
  <a href="https://npmjs.com/package/type-toolkit"><img src="https://img.shields.io/npm/dt/type-toolkit.svg?style=flat-square" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/type-toolkit"><img src="https://img.shields.io/npm/l/type-toolkit.svg?style=flat-square" alt="License"></a>
</p>

[English](./README.md) | 简体中文

使用 [TypeZen](https://www.github.com/xlboy/type-zen) 语言编写的 TypeScript 类型工具库，定位——**“功能丰富、体验极佳”**

## 特性

- 使用 [TypeZen](https://www.github.com/xlboy/type-zen) 开发，内部实现的类型简单易懂，易维护，易扩展

- 极佳的使用体验：

  - 文档系统——**JSDoc、[在线 API 文档](https://type-toolkit-docs.vercel.app/)**
  - 使用时可查看源码旁的测试用例，方便参考

- 丰富的 API，复刻 **原生 JS**、`lodash` 等（开发中）

- 完善的测试用例，确保每个 API 的正确性

## 安装

```bash
npm install type-toolkit -D
```

## 使用

```typescript
import type tt from 'type-toolkit';

type T0 = tt.S.Repeat<'a', 3>; // 'aaa'
type T1 = tt.S.Split<'a-b-c', '-'>; // ['a', 'b', 'c']
type T2 = tt.S.Substring<'0123456789', 3, 5>; // '34'
type T3 = tt.S.Trim<'  abc  '>; // 'abc'
type T4 = tt.N.Range<0, 10>; // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## 文档

- [API 参考](https://type-toolkit-docs.vercel.app/)

## 诞生动机

- 实践 [TypeZen](https://www.github.com/xlboy/type-zen)

- 补足同类市场上空缺的定位——**“十分丰富 & 体验极佳”**

## 致谢

- [type-fest](https://github.com/sindresorhus/type-fest)

- [ts-toolbelt](https://github.com/millsp/ts-toolbelt)

- [type-challenges](https://github.com/type-challenges/type-challenges)

- ...

没有这些优秀的项目，可能也没有这个项目的诞生，十分感谢为这些项目默默付出的开发者们💛

以及给予过支持的朋友们~💛

## License

MIT License © 2023-PRESENT  [xlboy](https://github.com/xlboy)
