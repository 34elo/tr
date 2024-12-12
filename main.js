console.log("hello world");

function f(number) {
    for (let i = 0; i < 5; ++i) {
        console.log(i)
    }
    console.log('hello, world');
    return number;
}
console.log(f(1))