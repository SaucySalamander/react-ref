import React from 'react'
import { RadialChart } from 'react-vis'

class CategoryChart extends React.Component {

    render() {
        return (
                <RadialChart 
                    data={this.props.chartModifiedTrans}
                    animation
                    width={300}
                    height={300}
                    className="align-middle"
                    showLabels={true}
                    labelsAboveChildren={false}
                />
        );
    }
}

export default CategoryChart;