import React,{Component} from 'react'
import login from './login.png'
import './App.css'

//函数型 组件传递
function Welcome1(props){
    return(
        <div>
            你叫什么名字呢？{props.name}
        </div>
    )
}




export default class App extends Component{
    //当需要状态时，需要构造函数
    constructor(props){
        super(props);

        //初始化状态
        this.state = {
            count:0,
            date:new Date()
        }
    }
    componentDidMount(){
        this.timer = setInterval(()=>{
            //实时更新状态
            this.setState({
                date:new Date()
            })
        })
        this.setState((prevState,prevProps)=>({
                count:prevState.count +1
        }),()=>{
            console.log(this.state.count);
        })
    }
    componentWillUnmount(){
        clearInterval(this.timer);
    }
    formatName(user){
        return user.firstName + ',' + user.lastName;
    }
    
    render(){
        const name = 'jerry';
        // jsx 本身也是表达式
        const jsx = <p>同学你s好</p>
        return (
            <div>
                App组件
               {/* 表达式 */}
               <h1>{name}</h1>
               <p>{this.formatName({firstName:'tom',lastName:'jerry'})}</p>
                <img src={login} style={{width:'100px'}} className="img"/>
                {/* jsx */}
                {jsx}
                {/* 组件属性传值：传入属性是只读的 */}
                <Welcome1 name='tom'></Welcome1>
                {/* 使用状态 */}
                <p>{this.state.date.toLocaleTimeString()}</p>
            </div>
        )
    }
}