//引入Count的UI组件
import CountUI from "../../components/Count";
//引入Action
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from "../../redux/count_action";
//引入connect用于连接UI组件与redux
import { connect } from "react-redux";

//mapStateToProps函数的返回值作为状态传递给了UI组件
//返回的对象中的key作为传递给UI组件props的key
//value作为UI组件的props的value———— 传递状态
function mapStateToProps(state) {
  return { xyz: state };
}
//mapDispatchToProps函数的返回值作为状态传递给了UI组件
//返回的对象中的key作为传递给UI组件props的key
//value作为UI组件的props的value————操作状态的方法
function mapDispatchToProps(dispatch) {
  return {
    add: (number) => {
      //通知redux执行加法
      dispatch(createIncrementAction(number));
    },
    sub: (number) => {
      //通知redux执行加法
      dispatch(createDecrementAction(number));
    },
    addAsync: (number, time) => {
      dispatch(createIncrementAsyncAction(number, time));
    },
  }; /*  */
}

//创建并暴露一个Count的容器组件 核心！！！
export default connect(mapStateToProps, mapDispatchToProps)(CountUI);
// const CountContainer = connect()(CountUI)
// export default CountContainer
