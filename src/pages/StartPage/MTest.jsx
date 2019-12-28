import React from "react";
import { observer, inject } from "mobx-react";

let MTest = props => {
  return (
    <div className="MTest">
      TEST<div>{props.dataStore.colors}</div>
      <div
        style={{ color: "purple" }}
        onClick={() => props.dataStore.addColor("Pink")}
      >
        CLICK
      </div>
    </div>
  );
};

MTest = observer(MTest);
MTest = inject("dataStore")(MTest);
export default MTest;
