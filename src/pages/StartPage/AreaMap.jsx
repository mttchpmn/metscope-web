import React from "react";
import { DataContext } from "../../DataWrapper";
import AreaMapMobile from "../../area-map_mobile.png";
import { Container } from "@material-ui/core";

const Area = ({ value, coords }) => {
  const data = React.useContext(DataContext);

  return (
    <area
      title={value.toUpperCase()}
      alt={value.toUpperCase()}
      shape="poly"
      coords={coords}
      onClick={() => {
        console.log("Area clicked");
        const currentVal = data[value];
        data.updateProp(value, !currentVal);
      }}
    />
  );
};

const AreaMap = props => {
  return (
    <Container align="center">
      <img src={AreaMapMobile} alt="Areas Map" useMap="#area-map" />
      <map name="area-map">
        <Area
          value="fd"
          coords="14,297,61,334,45,352,41,373,9,418,0,363,0,311,2,292"
        />
        <Area value="cy" coords="62,333,92,352,73,373,41,374,46,353" />
        <Area
          value="ge"
          coords="91,351,73,373,41,375,5,428,36,444,115,435,131,377"
        />
        <Area value="ww" coords="13,295,61,332,134,273,139,264,99,233" />
        <Area value="al" coords="62,332,134,274,141,280,112,315,91,350" />
        <Area
          value="pl"
          coords="141,280,173,273,203,292,134,378,92,350,113,316"
        />
        <Area
          value="ka"
          coords="138,265,135,273,141,279,172,274,189,282,184,262,170,247"
        />
        <Area value="tn" coords="99,230,137,263,171,247,185,213,132,193" />
        <Area
          value="st"
          coords="172,247,184,262,206,264,206,236,217,217,185,212"
        />
        <Area
          value="dv"
          coords="206,264,207,236,232,188,230,181,239,172,278,181,250,259"
        />
        <Area
          value="sa"
          coords="174,175,229,181,231,188,217,216,186,212,142,195"
        />
        <Area
          value="tk"
          coords="161,173,211,178,217,147,226,126,224,113,156,135"
        />
        <Area value="cp" coords="217,146,253,156,229,181,211,179" />
        <Area value="mh" coords="239,171,279,181,294,174,299,119,287,119" />
        <Area
          value="ed"
          coords="295,106,254,156,217,144,227,126,220,89,241,71"
        />
        <Area value="ta" coords="220,90,222,112,157,134,148,97,224,58,240,71" />
        <Area value="fn" coords="224,58,148,97,103,29,124,9,165,9" />
      </map>
    </Container>
  );
};

export default AreaMap;
