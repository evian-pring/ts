/// <reference path="index.d.ts"/>

import { MyModuleObject } from 'npmModule';

import { LocalModuleObject } from './module';



// Without the "reference path" line, TS complains in line 3 that it could not find a declaration file for 'npmModule'.
// In this case, the import has type any, so TS does not complain about the call below to an inexistent method.
// When we uncomment line 1, we get a TS error on line 8: property 'test' does not exist on type { method: ... }
MyModuleObject.test();


// TS complains that test does not exist on type { method: ... }
// Here we did not need to have a `declare` statement in a type definitions file for TS to know this because here TS is
// using contextual typing:
LocalModuleObject.test();