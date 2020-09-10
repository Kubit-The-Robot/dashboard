import App from './App';
import { connect } from '../../core/overdux/connect';

export default connect(
  ({ test }) => {
    console.log(test);
    return test;
  },
  () => {}
)(App);
