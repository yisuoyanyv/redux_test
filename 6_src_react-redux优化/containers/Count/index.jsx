//引入connect用于连接UI组件与redux
import {connect} from 'react-redux'
//引入action
import {
    createDecrementAction,
    createIncrementAction,
    createIncrementAsyncAction
}   from '../../redux/count_action'

import React, { Component } from 'react'

//定义UI组件
class Count extends Component {

    // 加法
    increment =()=>{
        const { value } = this.selectNumber
        this.props.jia(value*1)

    }
    //减法
    decrement =()=>{
        const { value } = this.selectNumber
        this.props.jian(value*1)
    }
    //奇数再加
    incrementIfOdd =()=>{
        const { value } = this.selectNumber
        if(this.props.count % 2 !==0){
            this.props.jia(value*1)
        }
        
    }
    incrementAsync =()=>{
        const { value } = this.selectNumber    
        this.props.jianAsync(value*1,500)     
    }
    render() {
        // console.log('UI组件接收到的props是：',this.props)
        return (
            <div>
                <h1>当前求和为：{this.props.count}</h1>
                <select ref={c => this.selectNumber =c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                &nbsp;&nbsp;
                <button  onClick={this.increment}>+</button> &nbsp;&nbsp;
                <button  onClick={this.decrement}>-</button>&nbsp;&nbsp;
                <button  onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;&nbsp;
                <button  onClick={this.incrementAsync}>异步加</button>&nbsp;&nbsp;
            </div>
        )
    }
}



//使用connect创建并暴露一个容器组件
export default connect(
    state => ({count:state}),
    //mapDispatchToProps的一般写法
    // dispatch=>({
    //     jia:number =>dispatch(createIncrementAction(number)),
    //     jian:number =>dispatch(createDecrementAction(number)),
    //     jianAsync:number =>dispatch(createIncrementAsyncAction(number,500)),  
    // })
    //mapDispatchToProps的简写
    {
        jia:createIncrementAction,
        jian:createDecrementAction,
        jianAsync:createIncrementAsyncAction,
    }
)(Count)
