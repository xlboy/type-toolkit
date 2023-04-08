# type-toolkit

A TypeScript type utility library developed using the [TypeZen](https://www.github.com/xlboy/type-zen) language

## Installation

```bash
npm install type-toolkit -D
```

## Usege

```typescript
import type tt from 'type-toolkit';

type Test1 = tt.O.Pick<{ a: 1, b: 2 }, 'a'>;
//        ^? type Test1 = { a: 1 }
```

## Documentation

- [API Reference](https://type-toolkit-docs.vercel.app/api/category/object)
