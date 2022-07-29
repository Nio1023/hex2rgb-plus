import "./style.css"
import { setupCounter } from "./counter"
import hex2rgb from "../lib/hex2rgb.es"

console.log(hex2rgb.rgb2hex(0, 130, 195))

console.log(hex2rgb.rgb2hex("rgba(0, 130, 195,1)"))

console.log(hex2rgb.rgb2hex("rgb(0, 130, 195)"))

console.log(hex2rgb.hex2rgb("#0082c3"))

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://www.typescriptlang.org/" target="_blank">
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!)
