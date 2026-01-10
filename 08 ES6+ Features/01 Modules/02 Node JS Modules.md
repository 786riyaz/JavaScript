**CommonJS Modules (require)**
Old style (default in Node.js):

const fs = require("fs");
module.exports = function() {}

Synchronous loading.
===================================================================
**ES Modules (import)**
Modern JavaScript

import fs from "fs";
export default function() {}

Asynchronous loading.
---
# Differences:
| CommonJS         | ES Modules    |
| ---------------- | ------------- |
| require()        | import        |
| Synchronous      | Asynchronous  |
| Older            | Modern        |
| Can't tree-shake | Tree-shakable |