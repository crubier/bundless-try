import React, { useLayoutEffect, useState, useRef } from "react";

import "ol/ol.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";

import "cesium/Build/Cesium/Widgets/widgets.css";
import * as Cesium from "cesium";

import { Canvas } from "react-three-fiber";

import { Button } from "@chakra-ui/react";

import { Box } from "./box";
interface AppProps {}

export function Ces({}: AppProps) {
  const [count, setCount] = useState(0);
  const mapRef = useRef<Map>();
  const viewerRef = useRef<Cesium.Viewer>();
  const olContainerRef = useRef<HTMLDivElement>(null);
  const cesiumContainerRef = useRef<HTMLDivElement>(null);
  const creditContainerRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    if (!!olContainerRef.current && !mapRef.current) {
      const map = new Map({
        target: olContainerRef.current,
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({
          center: [0, 0],
          zoom: 0,
        }),
      });

      mapRef.current = map;
    }
  });

  useLayoutEffect(() => {
    if (
      !!cesiumContainerRef.current &&
      !!creditContainerRef.current &&
      !viewerRef.current
    ) {
      const container = cesiumContainerRef.current;
      const viewer = new Cesium.Viewer(container, {
        terrainProvider: Cesium.createWorldTerrain(),
        imageryProvider: new Cesium.OpenStreetMapImageryProvider({
          // url: 'https://a.tile.openstreetmap.org/',
          // url: 'https://a.tile.opentopomap.org/',
          url: "http://a.tile.stamen.com/toner/",
        }),
        homeButton: false,
        fullscreenButton: false,
        skyAtmosphere: false,
        skyBox: false,
        timeline: false,
        geocoder: false,
        projectionPicker: false,
        baseLayerPicker: false,
        navigationHelpButton: false,
        sceneModePicker: false,
        animation: false,
        creditContainer: creditContainerRef.current,
        // shadows: true,
        // terrainShadows:Cesium.ShadowMode.ENABLED,
        contextOptions: {
          webgl: {
            alpha: true,
            antialias: true,
          },
        },
      });
      viewer.scene.backgroundColor = new Cesium.Color(0, 0, 0, 0);

      viewer.shadowMap.size = 4096;
      // viewer.postProcessStages.fxaa.enabled = true;
      viewer.resolutionScale = 2.0;

      var osmBuildings = Cesium.createOsmBuildings({
        defaultColor: new Cesium.Color(0xffffff),
        style: new Cesium.Cesium3DTileStyle({}),
      });
      osmBuildings.maximumScreenSpaceError = 4;
      viewer.scene.primitives.add(osmBuildings);
      // Remove outline
      // https://github.com/CesiumGS/cesium/issues/8959#issuecomment-706048376
      ((Cesium as unknown) as {
        ModelOutlineLoader: { hasExtension: Function };
      }).ModelOutlineLoader.hasExtension = function () {
        return false;
      };

      viewer.clock.currentTime = Cesium.JulianDate.fromIso8601(
        "2020-10-08T16:00:00Z"
      );

      viewer.scene.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(-9.14, 38.711, 300),
        orientation: {
          heading: Cesium.Math.toRadians(20),
          pitch: Cesium.Math.toRadians(-20),
        },
      });

      viewerRef.current = viewer;
    }
  });
  setTimeout(() => setCount(count + 1), 1000);
  return (
    <div className="App">
      <header className="App-header">
        <div ref={olContainerRef} style={{ width: 640, height: 480 }}></div>
        <div ref={cesiumContainerRef} style={{ width: 640, height: 480 }}></div>
        <div ref={creditContainerRef} style={{ display: "none" }}></div>
        <Canvas style={{ width: 640, height: 480 }}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box position={[-1.2, 0, 0]} />
          <Box position={[1.2, 0, 0]} />
        </Canvas>
        <p>
          Page has been open for <code>{count}</code> seconds.
        </p>
        <Button>Ok</Button>
      </header>
    </div>
  );
}
