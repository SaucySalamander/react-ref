import React from 'react'
import TransTable from './TransactionTable/TransTable';
import CategoryChart from './CategoryChart';

class Transactions extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            transactions: [],
            chartModifiedTrans: []
        }
        this.handleJson = this.handleJson.bind(this);
        this.updateTrans = this.updateTrans.bind(this);
        this.retrieveTransactions = this.retrieveTransactions.bind(this);
    }
   
    componentDidMount(){
        this.retrieveTransactions();
    }

    handleJson(inputJson) {
        this.setState({
            transactions: this.state.transactions.concat(JSON.parse(inputJson))
        }, () => this.updateTrans())
    }

    retrieveTransactions() {
        fetch("http://localhost:8080/transactions", {
          mode: 'cors',
          headers: {
            'Access-Control-Allow-Origin': '*'
          }
        })
          .then(res => res.json())
          .then((result) => {
            console.log(result);
            this.setState({
                transactions: result
            })
            this.updateTrans();
          },
            (error) => {
              alert("Error in setting transactions")
            }
          )
      }


    updateTrans() {
        var result = [];
        var { transactions, chartModifiedTrans } = this.state;
        transactions.reduce((res, value) => {
            console.log(value);
            console.log(res);    
            if (!res[value.category]) {
                  res[value.category] = { category: value.category, amount: 0 };
                  result.push(res[value.category])
                }
                res[value.category].amount += value.amount;
                
                return res;
              });
        console.log(result);
        chartModifiedTrans = result.map(group => {
            var chartObj = {};
            chartObj.angle = group.amount;
            chartObj.label = group.category;
            return chartObj;
        });
        console.log(result);
        this.setState({
            chartModifiedTrans: chartModifiedTrans
        })

    }

    render() {
        return (
            <div className='mx-5'>
                <div className="align-middle myChart">
                    <CategoryChart chartModifiedTrans={this.state.chartModifiedTrans}/>
                </div>
                <TransTable handleJson={this.handleJson.bind(this)} transactions={this.state.transactions} />
            </div>
        );
    }
}

export default Transactions;