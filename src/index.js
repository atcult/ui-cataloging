import PropTypes from 'prop-types';
import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Settings from './Search';
import Navigator from './Navigator';

const temp = () => {
  return (<div><h1>ciao</h1></div>);
};

class Cataloging extends React.Component {
  static propTypes = {
    stripes: PropTypes.shape({
      connect: PropTypes.func.isRequired,
      intl: PropTypes.object.isRequired,
    }).isRequired,
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    showSettings: PropTypes.bool,
  };


  constructor(props) {
    super(props);
    this.connectedApp = props.stripes.connect(temp);
  }

  NoMatch() {
    return (
      <div>
        <h2>Uh-oh!</h2>
        <p>
          How did you get to <tt>{this.props.location.pathname}</tt>?
        </p>
      </div>
    );
  }

  render() {
    if (this.props.showSettings) {
      return <Settings {...this.props} />;
    }
    return (
      <div>
        <Navigator />
        <Switch>
          <Route
            path={`${this.props.match.path}`}
            render={() => <this.connectedApp {...this.props} />}
          />
          <Route
            component={() => {
              this.NoMatch();
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default Cataloging;
