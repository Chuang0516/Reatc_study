import { createRoot } from 'react-dom/client'
import App from './10-mobx/mobx案例/App'
import { Provider } from 'mobx-react'
import store from './10-mobx/mobx案例/mobx/store'

createRoot(document.getElementById('root')).render(
    <Provider myStore={store}>
        <App></App>
    </Provider>
)