import React from 'react';
import { Link, withRouter } from "react-router-dom";
import { BottomNavigation } from '@material-ui/core';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';




class AppRouter extends React.Component {
    state = {
        value: 0
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const value = this.state;

        return (
            <div>
                <BottomNavigation
                    value={value}
                    onChange={this.handleChange}
                    showLabels
                    className="nav primary">

                    <BottomNavigationAction label="Home" component={Link} to="/" />
                    <BottomNavigationAction label="About" component={Link} to="/about/"  />
                    <BottomNavigationAction label="Accounts" component={Link} to="/accounts/"  />
                    <BottomNavigationAction label="Transactions" component={Link} to="/transactions/" />
                    <BottomNavigationAction label="Budget" component={Link} to="/budget/" />
                    <BottomNavigationAction label="Cash Flow" component={Link} to="/cashFlow/" />

                </BottomNavigation>
            </div>
        );
    }
}

export default withRouter(AppRouter);