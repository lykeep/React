import React, { Component } from 'react'

// 生命周期
export default class Lifecyche extends Component {
    constructor(props){
        super(props);
        console.log('1.构造函数');
        this.state = {msg:'来自属性传递：' + props.prop}
    }
    //组件将要挂载
    componentWillMount(){
        //此时可以访问属性和状态了， 可以进行api调用，但是美办法做dom相关操作
        console.log('2.组件将要挂载阶段');
    }

    //组件已挂载
    componentDidMount(){    //常用
        //组件已挂载，可以进行一些状态的更新操作
        console.log('3.组件已经挂载');
    }

    componentWillReceiveProps(){     //常用
        //父组件传递的属性有变化，做相应响应
        console.log('4.组件属性更新了');
        
    }

    shouldComponentUpdte(){       //常用
        //组建是否需要更新 ， 返回布尔值 ，优化点
        console.log('5.组件是否应该更新');
        return false;
    }

    componentWillUpdata(){
      console.log('6.组件将要更新');
      
    }
    componentWDidUpdata(){
      console.log('7.组件已经更新完'); 
    }
    render() {
        console.log('组件渲染');
        
        return (
            <div>
                组件生命周期探究
            </div>
        )
    }
}
