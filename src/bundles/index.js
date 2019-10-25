import { composeBundles, onlineBundle } from 'redux-bundler'

import viewportBundle from './viewport'

export default composeBundles(onlineBundle, viewportBundle)
