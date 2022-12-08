import React from 'react'
import Counter from './counter'
import CounterHooks from './counterHooks'

function App() {
  return (
    <>
    Class Component Counter
    <Counter initialCount = {0} />

    Function Component Counter
    <CounterHooks initialCount = {27} />
    </>
  )
}

export default App;
