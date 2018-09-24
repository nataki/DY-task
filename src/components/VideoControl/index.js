import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from "prop-types";

class VideoControl extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onLoadContent(
            <video width="500" height="200" controls>
                <source src={this.props.dataUrl} />
                  Your browser does not support the video tag.
            </video>
        );
    }

    render(){
        return <Button variant="raised" color="primary" onClick={this.handleClick}>
            {this.props.children}
        </Button>
    }
}

VideoControl.propTypes = {
    dataUrl: PropTypes.string.isRequired,
    onLoadContent: PropTypes.func.isRequired,
};

export default VideoControl;