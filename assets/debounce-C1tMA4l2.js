function a(o,u=166,i=!1){let e;function t(...c){const n=()=>{e=void 0,o.apply(this,c)};!e&&i&&n(),clearTimeout(e),e=setTimeout(n,u)}return t.clear=()=>{clearTimeout(e)},t}export{a as d};
