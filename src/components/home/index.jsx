import React, { Component } from 'react'
import {inject,observer} from 'mobx-react'
@inject('homeStore')
@observer
 class componentName extends Component {
    render() {
        return (
            <div>
                home
                {this.props.homeStore.num}
                <button onClick={this.clicks}>加一</button>
            </div>
        )
        
    }
    componentDidMount(){
        
    }
    clicks=()=>{
        console.log(111)
        this.props.homeStore.addNum()
    }
}
export default componentName