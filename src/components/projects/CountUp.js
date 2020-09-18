import React from "react";
import AnimateValue from "react-countup";

class CountUp extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <h2>
                Completion: 
                <AnimateValue 
                    start={this.props.currentProgressVal}
                    end={this.props.completionPercentage}
                    duration={2}
                />
                %
            </h2>
        );
    }
}

export default CountUp
