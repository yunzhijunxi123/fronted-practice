import React from "react";
import { root } from "../../index"
//类式组件
/*  class Demo extends React.Component {
  state = { count: 0 };
  myRef = React.createRef()  

  add = () =>{
    this.setState(state=>({count:state.count+1}))
  }
  unmount = ()=>{
    root.unmount()
  }
  componentDidMount(){
    this.timer = setInterval(()=>{
      this.setState(state=>{
        return {count:state.count+1}
      })
    },1000)
  }
  componentWillUnmount(){
    clearInterval(this.timer)
  }
  
  show = ()=>{
    alert(this.myRef.current.value)
  }

  render() {
    return (
      <div>
        <input type="text" ref= {this.myRef} />
        <h2>当前求和为{this.state.count}</h2>
        <button onClick={this.add}>点我+1</button>
        <button onClick={this.unmount}>卸载</button>
        <button onClick={this.show}>点我提示数据</button>
      </div>
    );
  }
}
 */



//函数式组件


        
function Demo() {
  
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState("smith");
  const myRef = React.useRef()
  //不加空数组 检测所有人
  //加空数组 谁也不检测
  React.useEffect(() => {

    let timer = setInterval(()=>{
      setCount((count)=>{
        return count + 1
      })
    },1000)
    return ()=>{
      clearInterval(timer)
    }
  },[]);

  function add() {
    // setCount(count+1)
    setCount((count) => {
      return count + 1;
    });
  }
  function updateName(){
    setName((name)=>{
      return "jack"
    })
  }

  function unmount(){
      root.unmount()
  }

  function show(){
    alert(myRef.current.value)
  }
  return (
    <div>
      <h2>当前求和为{count} 姓名为{name}</h2>
      <input type="text" ref={myRef}/>
      <button onClick={add}>点我+1</button>
      <button onClick={updateName}>点我改名</button>
      <button onClick={unmount}>卸载</button>
      <button onClick={show}>点我提示数据</button>

    </div>
  );
}

export default Demo;
