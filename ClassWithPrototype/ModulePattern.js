// module pattern
const module = {
    state: {
        patron: {
            name: 'John Doe',
            age: 25
        }
    },
    getters: {
        getPatron: state => {
            return state.patron
        }
    },
    setPatron: (state, payload) => {
        state.patron = payload
    },
    setConfig: (payload) => {
        module.state.patron = payload
    }
}