import React , {Component} from "react";

class Search extends Component{
    state = {
        searchText : '',
        apiUrl : "https://pixabay.com/api/",
        apiKey : "19039698-70d84fc349952a4a57cf2d93d",
        images :[]
    }
    render(){
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
                borderBottomStyle:"groove"}} placeholder= "Search for images..." name = "searchText" value={this.state.searchText} ></input>
            </div>
          
        )
    }
}
export default Search;