import React from "react";
import "./App.css";
import Modal from "./components/Modal";
import Comp from "./components/Comp";
import ThreeLayOut from "./components/ThreeLayout";
import CheckBoxGroup from "./components/CheckBoxGroup";

import { getAllStudent } from "./services/student";
import RadioBoxGroup from "./components/RadioBoxGroup";
import SelectList from "./components/SelectList";

class App extends React.Component {
  state = {
    showModal: false,
    checkBoxGropDatas: {
      datas: [
        { value: "football", text: "足球" },
        { value: "basketball", text: "篮球" },
        { value: "movie", text: "电影" },
        { value: "music", text: "音乐" },
        { value: "game", text: "游戏" },
        { value: "other", text: "其他" }
      ],
      name: "loves",
      chooseDatas: ["football"]
    },
    radioBoxGroup: {
      datas: [
        { value: "football", text: "足球" },
        { value: "basketball", text: "篮球" },
        { value: "movie", text: "电影" },
        { value: "music", text: "音乐" },
        { value: "game", text: "游戏" },
        { value: "other", text: "其他" }
      ],
      chooseData: "",
      name: "abcradio"
    },
    selectListData: {
      datas: [
        { value: "shanghai", text: "上海" },
        { value: "beijing", text: "北京" },
        { value: "shenzhen", text: "深圳" },
        { value: "guangdong", text: "广东" },
        { value: "xiamen", text: "厦门" }
      ],
      chooseData: "shanghai",
      name: "abcselectlist"
    }
  };
  componentDidMount() {
    // const stus = await getAllStudent();
    // console.log(stus);
    // const tempObj = stus.map(it => ({value: it.id.toString(), text: it.name}));
    // this.setState({
    //   checkBoxGropDatas: Object.assign({}, this.state.checkBoxGropDatas, {datas: tempObj})
    // })
  }

  render() {
    return (
      <div className="App">
        <ThreeLayOut
          leftGap="10"
          rightGap="20"
          left={<div>左边栏</div>}
          right={<div>右边栏</div>}
        >
          <h1>主区域</h1>
          {this.state.showModal ? (
            <Modal
              // children={<Comp click={this.change}></Comp>}
              show={this.state.showModal}
              clickShadow={this.change}
            >
              {this.getMain()}
            </Modal>
          ) : null}

          <button onClick={this.change}>SHOW</button>
        </ThreeLayOut>
      </div>
    );
  }
  getMain() {
    return (
      <>
        <CheckBoxGroup
          datas={this.state.checkBoxGropDatas.datas}
          name={this.state.checkBoxGropDatas.name}
          chooseDatas={this.state.checkBoxGropDatas.chooseDatas}
          onChange={this.handleCheckBoxChange}
        ></CheckBoxGroup>
        <RadioBoxGroup
          datas={this.state.radioBoxGroup.datas}
          name={this.state.radioBoxGroup.name}
          chooseData={this.state.radioBoxGroup.chooseData}
          onChange={this.handleRadioBoxChange}
        ></RadioBoxGroup>
        <SelectList
          {...this.state.selectListData}
          onChange={this.handleSelectListChange}
        ></SelectList>
      </>
    );
  }
  handleCheckBoxChange = newArr => {
    // console.log("handleCheckBoxChange", newArr)
    var tempObj = Object.assign({}, this.state.checkBoxGropDatas, {
      chooseDatas: newArr
    });
    this.setState({
      checkBoxGropDatas: tempObj
    });
  };
  handleRadioBoxChange = newValue => {
    const tempObj = Object.assign({}, this.state.radioBoxGroup, {
      chooseData: newValue
    });
    this.setState({
      radioBoxGroup: tempObj
    });
  };
  handleSelectListChange = newValue => {
    const tempObj = Object.assign({}, this.state.selectListData, {
      chooseData: newValue
    });
    this.setState({
      selectListData: tempObj
    });
  };
  change = params => {
    // console.log("App.change", params);
    this.setState({
      showModal: !this.state.showModal
    });
  };
}

export default App;
