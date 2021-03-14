import React , {Component} from "react";
import PropTypes from "prop-types";
import {GridList , GridTile} from "material-ui/GridList";
import IconButton from "material-ui/IconButton";
import ZoomIn from "material-ui/svg-icons/action/zoom-in";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";


class Image extends Component{
    render(){
        let imageList;
        const {images} = this.props;

        if(images){
       imageList = (
           <GridList cols={4}>
           {
               images.map(img=>{
                   return<GridTile title={img.tags} key={img.id} actionIcon={
                       <IconButton>
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
        return(
            <div>
            {imageList}
            </div>
        )
    }
}

Image.propTypes = {
    images:PropTypes.array.isRequired
};

export default Image;