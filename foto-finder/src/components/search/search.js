import React , {Component} from "react";
import axios from "axios";
class Search extends Component{
    state = {
        searchText : '',
        apiUrl : "https://pixabay.com/api/",
        apiKey : "19039698-70d84fc349952a4a57cf2d93d",
        images :[]
    };

    onTextChange = (e)=>{
        this.setState({[e.target.name]:e.target.value},()=>{
            axios.get(
                `${this.state.apiUrl}/key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&safesearch=true`
            ).then((res)=>{
                this.setState({images:res.data.hits})
            }).catch(err=>{
                console.log(err);
            })
        }
        )
    }

    render(){
        console.log(this.state.images);
        return(
            <div>
            <input type="text" style = {{backgroundColor:"black",
                 color:"white",
                  marginLeft:420,
                  marginTop:100,
                  paddingTop:20,
                  paddingLeft:70,
                  fontSize:30,
                borderTopStyle:"hidden",
                borderRightStyle:"hidden",
                borderLeftStyle:"hidden",
                outline:"none",
                borderBottomStyle:"groove"}} placeholder= "Search for images..." name = "searchText" value={this.state.searchText}
                onChange = {this.onTextChange} ></input>
                {this.state.images.length>0?(<Image images={this.state.images}></Image>):null}
            </div>
          
        )
    }
}
export default Search;