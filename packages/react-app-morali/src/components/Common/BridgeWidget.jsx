import React, { useEffect } from "react";
import { Widget } from "@maticnetwork/wallet-widget";
import { Button, Box } from "@mui/material";

const widget = new Widget({
  target: "#btnOpenWidget",
  appName: "test",
  position: "bottom-right",
  network: "testnet",
  style: {
    color: "#0453F1",
  },
});

const BridgeWidget = () => {
  // subscribe to event onLoad
  const load = () => {
    console.log("widget is loaded");
  };

  const close = () => {
    console.log("widget is closed");
  };

  useEffect(() => {
    widget.on("load", load);
    widget.on("close", close);
    widget.create();
  }, []);

  return (
    <Box>
      <h1>Polygon Bridge</h1>
      <Button variant="contained" id="btnOpenWidget">
        Open Polygon Bridge
      </Button>
    </Box>
  );
};

export default BridgeWidget;
