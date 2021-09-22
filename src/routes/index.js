import { Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from "./privateRoute";
import { HomePage, LoginPage } from '../pages';

const Routes = ({authenticated}) => {
    return (
        <Switch>
            {!authenticated && <Route exact path="/login" component={LoginPage} />}
            <PrivateRoute exact path="/home" authenticated={authenticated} component={HomePage} />
            {authenticated
                ? <Redirect to="/home" />
                : <Redirect to="/login" />
            }
        </Switch>
    )
}

export default Routes;

