/*eslint-disable*/ 
'use strict';

function myBind(func, context, ...args) {
  return function (...otherArgs) {
    let allArgs = args.concat(otherArgs);
    return func.apply(context, allArgs);
  }
}