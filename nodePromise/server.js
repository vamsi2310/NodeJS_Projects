console.log('Synchronous 1');

setTimeout(() => console.log('Timeout 2'), 100);

Promise.resolve().then(() => console.log('Promise'));

console.log('Synchronous 4');

