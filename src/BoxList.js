import React, { Component } from 'react'
import Box from './Box'
import NewBoxForm from './NewBoxForm'
class BoxList extends Component{
    constructor(props){
        super(props)
        this.state={
            boxes: [{
                width: 10,
                height: 30,
                color: 'aliceblue'
            }]
        }
        this.boxInfo=this.boxInfo.bind(this)
        // this.createBox=this.createBox.bind(this)
    }
    boxInfo(newBox){
        this.setState(
            {
                boxes: [...this.state.boxes, newBox]
            }
        )
            
        
        console.log(this.state)
    }
    render(){
        const boxes = this.state.boxes.map(box=>(
            <Box
            color= {box.color}
            width= {box.width}
            height= {box.height}
            />
        ))
        return (
            <div>
                <NewBoxForm info={this.boxInfo}/>
                 {boxes}
            </div>
        )
    }
}
export default BoxList