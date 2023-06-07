import { createRoot } from 'react-dom/client'
import App from './08-antd-mobile/App'
import { Provider } from 'react-redux'
import { store, persistor } from './08-antd-mobile/redux/store'
import { PersistGate } from 'redux-persist/integration/react'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor} >
            <App />
        </PersistGate>
    </Provider>
)