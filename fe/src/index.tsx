import React from 'react'
import ReactDOM from 'react-dom'
import App from '$components/App'

if (process.env.REACT_APP_PROFILE === 'mock') {
    const { worker } = require('./mocks/browser')
    worker.start()
}

ReactDOM.render(<App />, document.getElementById('root'))
