import React from 'react';
import '../console.css'



class Console extends React.Component{
constructor(props){
    super(props)
    this.state= {
        action : '',


    }
}

render(){
return (
    <body>
    {/* <div className="bb">     */}
    <div className="console">
    <div className="head"></div>
    <div className="terminal"></div>



    </div>
    
     {/* </div> */}
<h1>hello world</h1>
</body>
)

}




}



export default Console