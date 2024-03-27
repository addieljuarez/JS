// this pattern has a public API and a private API

// Revealing module pattern
const module = (function () {
    let state = {
        patron: {
            name: 'John Doe',
            age: 25
        }
    }

    function getPatron() {
        return state.patron
    }

    function setPatron(payload) {
        state.patron = payload
    }

    function setConfig(payload) {
        state.patron = payload
    }

    return {
        getPatron,
        setPatron,
        setConfig
    }
})()

console.log(module.getPatron());
module.setPatron({ name: 'Jane Doe', age: 30 });
console.log(module.getPatron());
module.setConfig({ name: 'Jane Doe', age: 30 });
console.log(module.getPatron());

console.log(module.state); // undefined