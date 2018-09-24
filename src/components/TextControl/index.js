import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

class TextControl extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onLoadContent(<div>{this.props.dataText}</div>);
    }

    render(){
        return <Button variant="raised" color="primary" onClick={this.handleClick}>
                {this.props.children}
            </Button>
    }
}

TextControl.propTypes = {
    dataText: PropTypes.string.isRequired,
    onLoadContent: PropTypes.func.isRequired,
};

export default TextControl;
