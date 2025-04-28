import React, { Component } from "react";

class Images extends Component {

    render() {
        return(
            <img src={this.props.linkGambar}
            alt="foto" width='200px' height='100px' />
        )
    }
}
export default Images;