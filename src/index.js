import initStore from './bundles'
import { Provider } from 'redux-bundler-preact'

import App from './components/app'
import './style'

const store = initStore()
export default () => (
  <Provider store={store}>
    <App />
  </Provider>
)
