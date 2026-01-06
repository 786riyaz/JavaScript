try {
  let x = y + 10;   // y is not defined
} catch (error) {
  console.log(error);
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
}
/*
Output:
 ReferenceError: y is not defined
    at Object.<anonymous> (e:\OneDrive - Government Engineering College, Modasa\000 Riyaz Learning\04 JavaScript\tempCodeRunnerFile.javascript:2:11)
    at Module._compile (node:internal/modules/cjs/loader:1734:14)
    at Object..js (node:internal/modules/cjs/loader:1899:10)
    at Module.load (node:internal/modules/cjs/loader:1469:32)
    at Function._load (node:internal/modules/cjs/loader:1286:12)
    at TracingChannel.traceSync (node:diagnostics_channel:322:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:151:5)
    at node:internal/main/run_main_module:33:47
ReferenceError
y is not defined
ReferenceError: y is not defined
    at Object.<anonymous> (e:\OneDrive - Government Engineering College, Modasa\000 Riyaz Learning\04 JavaScript\tempCodeRunnerFile.javascript:2:11)
    at Module._compile (node:internal/modules/cjs/loader:1734:14)
    at Object..js (node:internal/modules/cjs/loader:1899:10)
    at Module.load (node:internal/modules/cjs/loader:1469:32)
    at Function._load (node:internal/modules/cjs/loader:1286:12)
    at TracingChannel.traceSync (node:diagnostics_channel:322:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:151:5)
    at node:internal/main/run_main_module:33:47
*/