import { Widget } from '@maticnetwork/wallet-widget'

// export const widget = new Widget({
//   target: '',
//   appName: 'pranjay_wallet_widget_expolrer',
//   autoShowTime: 0,
//   position: 'center',
//   height: 620,
//   width: 540,
//   overlay: false,
//   network: 'mainnet',
//   closable: true,
// });

//Testnet
export const widget = new Widget({
  target: '',
  appName: 'pranjay_demo_widget',
  autoShowTime: 0,
  position: 'center',
  height: 630,
  width: 540,
  overlay: false,
  network: 'testnet',
  closable: true,
});

Widget.assetsUrl = "http://localhost:8081/dist/";