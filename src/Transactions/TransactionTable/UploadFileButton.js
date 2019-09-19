import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

class UploadFileButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            show: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }

    handleSubmit(event) {
        console.log(this.state.value);
        this.saveToDB(this.state.value)
        this.props.handleJson(this.state.value);
        event.preventDefault();
    }

    setShow(status) {
        this.setState({
            show: status
        });
    }

    handleClose() {
        this.setShow(false);
    }
    handleShow() {
        this.setShow(true);
    }

    saveToDB(event){
        fetch("http://localhost:8080/batchTransactions", {
            mode: 'cors',
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: event
          })
            .then(res => res.json())
            .then((result) => {
              console.log(result);
            },
              (error) => {
                alert("Error in setting transactions")
              }
            )
    }

    render() {
        return (
            <div>
                <Button color="primary" onClick={this.handleShow}>
                    Upload File
        </Button>
                <Dialog open={this.state.show} onClose={this.handleClose}>
                    <DialogTitle>Upload Transactions</DialogTitle>
                    <DialogContent>
                        <TextField
                            id="outlined-full-width-textarea"
                            fullWidth
                            autoFocus
                            margin="dense"
                            label="Transactions"
                            type="textarea"
                            multiline
                            rowsMax="500"
                            helperText="Enter transaction formated in json"
                            onChange={this.handleChange}
                        />
                    </DialogContent>

                    <DialogActions>
                        <Button color="secondary" onClick={this.handleClose}>
                            Close
            </Button>
                        <Button color="primary" onClick={this.handleSubmit}>
                            Upload
            </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default UploadFileButton;