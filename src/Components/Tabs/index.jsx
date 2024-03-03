import React, { useState } from "react";
import { TabWrap, Button } from "./Tabs.styles";
const Tabs = ({ tabs }) => {
  const [showTab, setShowTabs] = useState(0);
  const clickHandler = (ind) => {
    setShowTabs(ind);
  };
  return (
    <>
      <TabWrap>
        <div className="container">
          {tabs.map((val, ind) => (
            <div key={ind}>
              <Button
                $active={ind === showTab}
                onClick={() => clickHandler(ind)}
              >
                {val.label}
              </Button>
            </div>
          ))}
        </div>
      </TabWrap>
      {tabs.map((val, ind) => (
        <div key={ind}>{ind === showTab && val.component}</div>
      ))}
    </>
  );
}; 

export default Tabs;
