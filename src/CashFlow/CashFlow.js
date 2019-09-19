import React from 'react'
import {
    FlexibleWidthXYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    VerticalBarSeries,
    VerticalBarSeriesCanvas,
    DiscreteColorLegend
} from 'react-vis';


class CashFlow extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            useCanvas: false,
            rawData: [{ "date": "February-2018", "debit": 39.42, "credit": 557.6899999999999 }, { "date": "March-2018", "debit": 1920.17, "credit": 3194.79 }, { "date": "April-2018", "debit": 3286.84, "credit": 2438.92 }, { "date": "May-2018", "debit": 2060.3100000000004, "credit": 3524.4999999999995 }, { "date": "June-2018", "debit": 2168.84, "credit": 2940.66 }, { "date": "July-2018", "debit": 2427.4, "credit": 3206.7000000000003 }, { "date": "August-2018", "debit": 2743.7799999999997, "credit": 2420.83 }, { "date": "September-2018", "debit": 3043.6, "credit": 1643.33 }, { "date": "October-2018", "debit": 2674.18, "credit": 2732.83 }, { "date": "November-2018", "debit": 2345.98, "credit": 2159.25 }, { "date": "December-2018", "debit": 2259.21, "credit": 6158.599999999999 }, { "date": "January-2019", "debit": 2117.95, "credit": 3204.6400000000003 }, { "date": "February-2019", "debit": 1483.8999999999999, "credit": 3336.23 }, { "date": "March-2019", "debit": 1866.26, "credit": 5835.31 }, { "date": "April-2019", "debit": 2209.9199999999996, "credit": 3854.5499999999997 }, { "date": "May-2019", "debit": 2151.0399999999995, "credit": 2987.58 }, { "date": "June-2019", "debit": 2117.3, "credit": 7033.31 }, { "date": "July-2019", "debit": 1939.15, "credit": 2977.7599999999998 }, { "date": "August-2019", "debit": 4590.66, "credit": 2977.08 }],
            debitData: [],
            creditData: [],
            netData: [],
            showNet: true,
            showCD: false,
        }
    }

    componentDidMount() {
        this.prepDebitData();
        this.prepCreditData();
        this.prepNetData();
        console.log(this.state.debitData);
        console.log(this.state.creditData);
        console.log(this.state.netData);
    }

    prepDebitData() {
        this.state.rawData.map(x => this.state.debitData.push({ 'x': x.date, 'y': x.debit }))
    }

    prepCreditData() {
        this.state.rawData.map(x => this.state.creditData.push({ 'x': x.date, 'y': x.credit }))
    }

    prepNetData() {
        this.state.rawData.map(x => this.state.netData.push({ 'x': x.date, 'y': x.credit - x.debit, color: x.credit - x.debit > 0 ? '#000000' : '#FF0000' }))
    }

    render() {
        const { useCanvas, debitData, creditData, showCD, showNet, netData} = this.state;
        const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries;

        return (
            <div>
                { showCD ? <div className='mx-5' id="cdChart">
                    <FlexibleWidthXYPlot
                        className="clustered-stacked-bar-chart-example"
                        xType="ordinal"
                        height={700}
                        margin={{ left: 100, right: 100, bottom: 100 }}
                    >
                        <DiscreteColorLegend
                            style={{ position: 'absolute', left: '50px', top: '10px' }}
                            orientation="horizontal"
                            items={[
                                {
                                    title: 'Credit',
                                    color: '#12939A'
                                },
                                {
                                    title: 'Debit',
                                    color: '#79C7E3'
                                }
                            ]}
                        />
                        <VerticalGridLines />
                        <HorizontalGridLines />
                        <XAxis tickLabelAngle={-45} />
                        <YAxis />
                        <BarSeries
                            color="#12939A"
                            data={creditData}
                        />
                        <BarSeries
                            color="#79C7E3"
                            data={debitData}
                        />
                    </FlexibleWidthXYPlot>
                </div> : null }
                { showNet ? <div className='mx-5' id="netChart">
                     <FlexibleWidthXYPlot
                        className="clustered-stacked-bar-chart-example"
                        xType="ordinal"
                        height={700}
                        margin={{ left: 100, right: 100, bottom: 100 }}
                    >
                        <VerticalGridLines />
                        <HorizontalGridLines />
                        <XAxis tickLabelAngle={-45} />
                        <YAxis />
                        <BarSeries
                            colorType="literal"
                            data={netData}
                        />
                    </FlexibleWidthXYPlot>
                </div> : null}
            </div>
        );
    }
}

export default CashFlow;