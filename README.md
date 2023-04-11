# type-toolkit

<p align="center">
  <a href="https://npmjs.com/package/type-toolkit"><img src="https://img.shields.io/npm/v/type-toolkit.svg?style=flat-square" alt="npm downloads"></a>
  <a href="https://npmjs.com/package/type-toolkit"><img src="https://img.shields.io/npm/dt/type-toolkit.svg?style=flat-square" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/type-toolkit"><img src="https://img.shields.io/npm/l/type-toolkit.svg?style=flat-square" alt="License"></a>
</p>

English | [简体中文](./README.zh.md)

A TypeScript type utility library developed using the [TypeZen](https://www.github.com/xlboy/type-zen) language, Target - **"Super rich and excellent user experience"**

## Features

- Written using [TypeZen](https://www.github.com/xlboy/type-zen), with internally implemented types that are easy to understand, maintain, and extend

- Excellent user experience:

  - Document system - **JSDoc, [Online API](https://type-toolkit-docs.vercel.app/)**
  - Open test cases beside the source file for reference during use

- Abundant API, replicating **Native JS**, `lodash` and others (under development)

- Comes with complete test cases to ensure the accuracy of each API

## Installation

```bash
npm install type-toolkit -D
```

## Usege

```typescript
import type tt from 'type-toolkit';

type T0 = tt.S.Repeat<'a', 3>; // 'aaa'
type T1 = tt.S.Split<'a-b-c', '-'>; // ['a', 'b', 'c']
type T2 = tt.S.Substring<'0123456789', 3, 5>; // '34'
type T3 = tt.S.Trim<'  abc  '>; // 'abc'
type T4 = tt.N.Range<0, 10>; // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## Documentation

- [API Reference](https://type-toolkit-docs.vercel.app/)

## Motivation

- Practice [TypeZen](https://www.github.com/xlboy/type-zen)

- Fill the gap in the market with the positioning of **"very rich & excellent experience"**

## Thanks

- [type-fest](https://github.com/sindresorhus/type-fest)

- [ts-toolbelt](https://github.com/millsp/ts-toolbelt)

- [type-challenges](https://github.com/type-challenges/type-challenges)

- ...

Without these excellent projects, this project may not have been born, and I am very grateful to the developers who have silently contributed to these projects. 💛

And friends who have supported me~ 💛

## License

MIT License © 2023-PRESENT  [xlboy](https://github.com/xlboy)
