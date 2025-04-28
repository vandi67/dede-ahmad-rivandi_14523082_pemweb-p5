import { Component } from "react";

class Main extends Component{
    constructor(){
        super()
        this.state = {
            tittle : 'Menu Makanan',
        }
        this.rubahData = this.rubahData.bind(this)
    }
    rubahData(){
        this.setState({tittle : "Pilih Makanan"})
    }
    remder(){
        return(
            <div>
                <h3>{this.state.tittle}</h3>
                <button onClick={ this.rubahData }>ubah Makanan</button>

            </div>
            
        )
    }
}
export default Main