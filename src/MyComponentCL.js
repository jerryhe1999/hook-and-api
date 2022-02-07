/*
 * @Author: your name
 * @Date: 2022-02-07 01:52:02
 * @LastEditTime: 2022-02-07 01:53:04
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \cs499\hook-and-api\src\MyComponentCL.js
 */

import React from 'react';

class MyComponentCL extends React.Component{
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount(){
      fetch("https://api.github.com/search/repositories?q=${query}")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result.items
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, items } = this.state;
      if( error ){
        return <div>Error: {error.message}</div>;
      }
      else if (!isLoaded){
        return <div>Loading</div>
      }
      else {
        return (
          <ul>
            {Object.keys(items).map( key=>(
             <div key={key}>
               <li>
                 <p>
                   {items[key].id}
                 </p>
                 <p>
                    {items[key].name}
                 </p>
                 <p>
                    {items[key].full_name}
                 </p>
                 <p>
                    {items[key].private ? 'is private' : 'is public'}
                 </p>
               </li>
             </div> 
            ))}
          </ul>
        )
      }
    }
  }

  export default MyComponentCL;
