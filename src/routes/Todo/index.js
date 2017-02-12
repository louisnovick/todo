import Todo from './components/Todo'
import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'todo',
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Container = require('./containers/TodoContainer').default
      const reducer = require('./modules/todo').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'todo', reducer })

      /*  Return getComponent   */
      cb(null, Container)

    /* Webpack named bundle   */
    }, 'todo')
  }
})
