import React from "react";
import AnimateValue from "react-countup";

class CountDown extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <h2>
                Completion: 
                <AnimateValue 
                    start={this.props.completionPercentage}
                    end={0}
                    duration={2}
                />
                %
            </h2>
        );
    }
}

export default CountDown
