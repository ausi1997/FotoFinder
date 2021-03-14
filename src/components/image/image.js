import React , {Component} from "react";
import PropTypes from "prop-types";
import {GridList , GridTile} from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
import ZoomIn from "material-ui/svg-icons/action/zoom-in";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";


class Image extends Component{
    state = {
        open:false,
        currentImg:""
    }
    handleOpen = (img)=>{
        this.setState({open:true, currentImg:img})
    }
    handleClose = ()=>{
        this.setState({open:false})
    }
    render(){
        let imageList;
        const {images} = this.props;

        if(images){
       imageList = (
           <GridList cols={4}>
           {
               images.map(img=>{
                   return<GridTile title={img.tags} key={img.id} actionIcon={
                       <IconButton onClick={()=>this.handleOpen(img.largeImageURL)}>
                       <ZoomIn color="white"></ZoomIn>
                       </IconButton>
                    }>
                    <img src={img.largeImageURL} alt="Loading..."></img>
                    </GridTile>
               })
           }</GridList>
       )
        }
        else{
            imageList=null;
        }
        const action = [<FlatButton label="Close" primary={true} onClick={this.handleClose}>
            </FlatButton>]
            
        return(
            <div style = {{marginLeft:50,marginRight:50,marginTop:20}}>
            {imageList}
            <Dialog actions={action} modal={false} open={this.state.open} onRequestClose={this.handleClose}></Dialog>
            <img src={this.state.currentImg} alt="..." style = {{width:"100&"}}></img>
            </div>
        )
    }
}

Image.propTypes = {
    images:PropTypes.array.isRequired
};

export default Image;