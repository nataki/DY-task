import React, {Component} from 'react';
//TODO

const withContent =  ({getContent}) => WrappedComponent => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.getContent = getContent;
        }
        render() {
            return <WrappedComponent {...this.props} />;
        }
    }
}

export default withContent;