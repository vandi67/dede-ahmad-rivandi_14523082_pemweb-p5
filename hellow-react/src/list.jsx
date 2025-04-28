import React, { Component } from "react";
import Images from './images.jsx';

class List extends Component {

    render() {
        return(
            <div>
                <ol>
                    <li>1 <Images linkGambar='https://1.bp.blogspot.com/-VmwZMAtwxpg/Xn3awuFmaEI/AAAAAAAAD44/RrUZCnhLztsOZ76jVEXE35XxKi7WQ5DIACPcBGAYYCw/s1600/Komposisi+pada+food+Photography+yang+indah+dan+menawan.jpg'/></li>
                    <li>2 <Images linkGambar='https://jsp.co.id/wp-content/uploads/2019/09/tips-dasar-fotografi-makanan.jpg'/></li>
                    <li>3 <Images linkGambar='https://th.bing.com/th/id/OIP.bo1gn_f6Bp12jIMEX41HpgHaE7?rs=1&pid=ImgDetMain'/></li>
                    <li>4 <Images linkGambar='https://th.bing.com/th/id/OIP.3_GAwYVuN0AqP6vOWj6AJQHaHa?rs=1&pid=ImgDetMain'/></li>
                </ol>
            </div>
        );
    }
}
export default List;