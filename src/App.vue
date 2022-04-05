<template>
  <div class="container" v-if="!isConnected">
    <h2>Web3 Modal Demo</h2>
    <button class="button" v-on:click="connectToMeta">
      Connect with Metamask
    </button>
  </div>
  <div class="container" v-if="isConnected">
    <!-- <h3>Wallet Address : {{ selectedAccount }}</h3> -->
    <button id="#btnMaticWidget" 
    @click="showWidget" 
    class="button"
    >
      Open Widget
    </button>
  </div>
</template>

<script>
import Web3 from "web3/dist/web3.min.js";
import Web3Modal from "web3modal";
import { widget } from "./constants/index";

export default {
  name: "App",
  data() {
    return {
      isConnected: false,
      // selectedAccount: null,
    };
  },
  methods: {
    //Login method
    async connectToMeta() {
      if (typeof window.ethereum !== "undefined") {
        // MetaMask is installed
        try {
          const web3Modal = new Web3Modal({
            // network: "testnet", // optional
            cacheProvider: true, // optional
            providerOptions: {}, // required
          });
          const provider = await web3Modal.connect();
          const web3 = new Web3(provider);
          console.log(web3);
          this.isConnected = true;
          // this.selectedAccount = "demo";
          console.log("widget created");
          await widget.create();
          
        } catch (err) {
          // User denied access
          console.error("Error while connecting to Metamask");
        }
      } else {
        alert("Unable to detect MetaMask");
      }
    },
    async showWidget() {
      widget.show();
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 10px;
}

* {
  box-sizing: border-box;
}

body {
  background-color: rgb(185, 194, 248);
}
.container {
  display: inline-block;
  margin: 2rem 3rem;
}
.button {
  padding: 0.5rem 1rem;
  border-radius: 5px;
  background-color: blueviolet;
  color: aliceblue;
  font-weight: 600;
  font-size: 1rem;
}
.login_button:hover {
  background-color: darkorchid;
}
</style>
