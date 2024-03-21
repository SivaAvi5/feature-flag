import React, { useContext } from "react";
import LightDarkMode from "../../ApiComponents/LightDarkMode/LightDarkMode";
import TicTac from "../../ApiComponents/TicTacToe/TicTac";
import RandomColor from "../../ApiComponents/RandomColor/RandomColor";
import Accordion from "../../ApiComponents/Accordian/Accordion";
import TreeView from "../../ApiComponents/TreeView/TreeView";
import datas from "../../ApiComponents/TreeView/datas";
import TabTest from "../../ApiComponents/Tabs/TabTest";
import { FeatureFlagContext } from "./FeatureFlagGlobalState";

const FeatureFlags = () => {

    const {loading,enabledFlags} = useContext(FeatureFlagContext)
  const componentsToRender = [
    {
        key:'showLightAndDarkMode',
        component: <LightDarkMode />
    },
    {
        key:'showTicTacToeBoard',
        component: <TicTac />
    },
    {
        key:'showRandomColorGenerator',
        component: <RandomColor />
    },
    {
        key:'showAccordian',
        component: <Accordion />
    },
    {
        key:'showTreeView',
        component: <TreeView datas={datas}/>
    },
    {
        key:'showTabs',
        component: <TabTest />
    }
    
  ];

  const checkEnabledFlags = (getCurrentKey) =>{
    return enabledFlags[getCurrentKey]
  }

  console.log(enabledFlags)
  

  if(loading) return <h1>Loading data ! please wait</h1>

  return <div>
    <h1>Feature Flags</h1>
    {
        componentsToRender.map((componentsItem) =>(
            checkEnabledFlags(componentsItem.key)? 
            <div key={componentsItem.key}>{componentsItem.component}</div>:null
        ))
    }
  </div>;
};

export default FeatureFlags;
