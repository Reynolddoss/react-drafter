

import {Editor,EditorState,RichUtils} from "draft-js";
import 'draft-js/dist/Draft.css';
import {Button} from "react-bootstrap";

import React, { Component } from 'react';

class EditorPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            editorState : EditorState.createEmpty()
        }
    }
    
    onEditChange(editorState){
        this.setState({editorState});
    }

    onButtons(command){
        const newState = RichUtils.handleKeyCommand(this.state.editorState,command)   ;
        if(newState){
            this.onEditChange(newState);
            return "handled";
        }else{
            return "not-handled";
        }   
    }

    onBtn = (cmd) =>{
        this.onEditChange(RichUtils.toggleInlineStyle(this.state.editorState,cmd))
    }

    render() {
        return (
            <div className="editor-container" >
                <Button onClick={()=>this.onBtn("UNDERLINE")}>Underline</Button>
                <Button onClick={()=>this.onBtn("ITALIC")}>Italic</Button>
                <Button onClick={()=>this.onBtn("BOLD")}>Bold</Button>
                <Button >Image</Button>
                <Editor
                    placeholder="Start Here !!"                     
                    editorState={this.state.editorState} 
                    onChange={this.onEditChange.bind(this)} 
                    handleKeyCommand = {this.handleKeyCommand}
                />
            </div>
        );
    }
}

export default EditorPage;
