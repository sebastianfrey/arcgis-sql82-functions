import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import FeatureFilter from "@arcgis/core/layers/support/FeatureFilter";

import "./style.css";

const layer = new FeatureLayer({
  portalItem: {
    id: "f9e348953b3848ec8b69964d5bceae02",
  },
  outFields: ["SEASON"],
});

const map = new Map({
  basemap: "gray-vector",
  layers: [layer],
});

const view = new MapView({
  map: map,
  container: "viewDiv",
  center: [-98, 40],
  zoom: 4,
});

view.whenLayerView(layer).then((layerView) => {
  layerView.filter = new FeatureFilter({
    where: `LOWER (Season) LIKE LOWER ('%SUM%')`,
  });
  console.info(layerView);
});
