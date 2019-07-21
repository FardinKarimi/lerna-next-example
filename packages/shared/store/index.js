import applyAsyncMiddleware from '@company/shared/applyAsyncMiddleware'

export default class Store {
  observers = []
  constructor(initialState, reducer) {
    this.state = initialState
    this.reducer = reducer
  }

  dispatch = applyAsyncMiddleware(action => {
    this.state = this.reducer(this.state, action)
    this.observers.forEach(o => o(this.state))
  })

  subscribe = handler => {
    const unsub = new Array(...this.observers)
    this.observers.push(handler)
    return () => {
      this.observers = unsub
    }
  }

  getState = () => this.state

  waitFor = async (criteria, timeout = 1000) =>
    await new Promise((resolve, reject) => {
      const handleChange = () => {
        if (!criteria || criteria(this.getState())) {
          resolver()
        }
      }

      const resolver = () => {
        clearTimeout(id)
        unsubscribe()
        resolve()
      }

      const id = setTimeout(resolver, timeout)

      const unsubscribe = this.subscribe(handleChange)
    })
}
