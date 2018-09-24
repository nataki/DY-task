import React, {Component} from 'react';
import Button from "@material-ui/core/Button/Button";
import { withStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';

import config from '../../config';
import styles from './styles';
import VideoControl from "../VideoControl";
import TextControl from "../TextControl";

//ReactSticky could be used
//TODO: set buttons active/inactive depending on current selection

class StickyWidget extends Component {
    constructor(props) {
        super(props);
        this.state = {isOpen: false, content: null};
        this.handleClick = this.handleClick.bind(this);
        this.onLoadContent = this.onLoadContent.bind(this);
    }

    handleClick() {
        this.setState({isOpen: !this.state.isOpen});
    }

    onLoadContent(content){
        this.setState({content});
    }

    render(){
        const {isOpen, content} = this.state;
        const { classes } = this.props;
        return <div>
            {isOpen && content &&
                <div className={classes.content_area}>
                    {content}
                </div>
            }
            {isOpen && <ul className={classes.buttons_form}>
                <li>
                    <VideoControl dataUrl={config.videoUrl} onLoadContent={this.onLoadContent}>
                        Boost Revenue
                    </VideoControl>
                </li>
                <li>
                    <TextControl dataText={config.textData1} onLoadContent={this.onLoadContent}>
                        Personalize Site
                    </TextControl>
                </li>
                <li>
                    <TextControl dataText={config.textData2} onLoadContent={this.onLoadContent}>
                        Getting Started
                    </TextControl>
                </li>
            </ul>}
            <Button
                variant="fab"
                color="primary"
                aria-label="Add"
                onClick={this.handleClick}
                className={classes.sticky_button}
            >
                <AddIcon />
            </Button>
        </div>
    }
}

export default withStyles(styles)(StickyWidget);