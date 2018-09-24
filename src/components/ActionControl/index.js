import React, {Component} from 'react';
import Button from '@material-ui/core/Button';

//some generic component that could be decorated with HOC to get Text/Video controls and provide corresponding content
//To be done

class ActionControl extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onLoadContent(this.content);
    }

    render() {
        return <Button variant="raised" color="primary" onClick={this.handleClick}>
            {this.props.children}
        </Button>
    }
}

export default ActionControl;