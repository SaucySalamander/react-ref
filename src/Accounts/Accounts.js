import React from 'react'
import { Card, CardContent, Typography, List, Paper, ListItem } from '@material-ui/core';
import './Accounts.css'
import { green } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

class Accounts extends React.Component {

    constructor(){
        super();
        this.state={
            theme: createMuiTheme({
                palette: {
                  primary: green.500,
                  secondary: green,
                }
            }),
        }
    }

    render() {

        const { theme } = this.state;

        return (
            <div>
                <List>
                    <ListItem >
                        <Card className="account">
                            <Paper>
                                <CardContent>
                                    <Typography>
                                        Checking
                            </Typography>
                                    <Typography>
                                        $1,000
                            </Typography>
                                    <Typography>
                                        YTD Change : <ThemeProvider theme={theme}><Typography display="inline" color="primary">+20%</Typography></ThemeProvider>
                            </Typography>
                                </CardContent>
                            </Paper>
                        </Card>
                    </ListItem>
                    <ListItem>
                        <Card className="account">
                            <Paper>
                                <CardContent>
                                    <Typography>
                                        Savings
                            </Typography>
                                    <Typography>
                                        $1,000
                            </Typography>
                                    <Typography>
                                        YTD Change : <Typography display="inline" color="primary">+20%</Typography>
                            </Typography>
                                </CardContent>
                            </Paper>
                        </Card>
                    </ListItem>
                </List>
            </div>
        )
    }
}

export default Accounts;