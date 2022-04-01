import { Widget } from "@maticnetwork/wallet-widget";

export const widget = new Widget({
  target: "",
  appName: "pranjay_demo_app",
  autoShowTime: 0,
  position: "center",
  height: 630,
  width: 540,
  overlay: false,
  network: "mainnet",
  closable: true,
});
