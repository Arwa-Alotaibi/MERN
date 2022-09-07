import { useState } from "react"

import FirstTab from "./FirstTab";

import SecondTab from "./SecondTab";

import ThirdTab from "./ThridTab";


const Tabs = (props  ) => {
    const[AllTabs]= useState(['tab1' , 'tab2' , 'tab3'])
    const [activeTab, setActiveTab] = useState("");



    const Tab1=()=>{
        setActiveTab('tab1')
    }

    const Tab2=()=>{
        setActiveTab('tab2')
    }

    const Tab3=()=>{
        setActiveTab('tab3')
    }
return (
    <div className="Tabs" >
        <div className="Nav">
            <ul>

            <li className={activeTab=='tab1' ? 'active' : '' } onClick={Tab1}> {AllTabs[0]} </li>

            <li className={activeTab=='tab2' ? 'active' : '' } onClick={Tab2}>{AllTabs[1]} </li>

            <li className={activeTab=='tab3' ? 'active' : '' } onClick={Tab3}>{AllTabs[2]} </li>
            </ul>
        </div>

        <div className="content">
        {activeTab === "tab1" ? <FirstTab /> : activeTab === "tab2"?<SecondTab/>:<ThirdTab/>}

        </div>
    </div>
)



}

export default Tabs;
