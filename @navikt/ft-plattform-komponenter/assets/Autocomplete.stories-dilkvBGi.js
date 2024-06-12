var Z=Object.defineProperty;var ee=(n,s,t)=>s in n?Z(n,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[s]=t;var N=(n,s,t)=>(ee(n,typeof s!="symbol"?s+"":s,t),t);import{j as v}from"./jsx-runtime-_e34SzbC.js";import{r as l,R as r}from"./index-DVXBtNgz.js";import{c as k,L as te,B as ne,E as oe}from"./Label--N9K7HfV.js";import{u as se,B as ae,c as ie,a as re,o as le}from"./Button-DodJf6BP.js";import{u as P}from"./useId-Bn1dgn6J.js";var ue=function(n,s){var t={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&s.indexOf(e)<0&&(t[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(n);o<e.length;o++)s.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(n,e[o])&&(t[e[o]]=n[e[o]]);return t};const ce=l.forwardRef((n,s)=>{var{title:t,titleId:e}=n,o=ue(n,["title","titleId"]);let a=P();return a=t?e||"title-"+a:void 0,l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:s,"aria-labelledby":a},o),t?l.createElement("title",{id:a},t):null,l.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M10.5 3.25a7.25 7.25 0 1 0 4.569 12.88l5.411 5.41a.75.75 0 1 0 1.06-1.06l-5.41-5.411A7.25 7.25 0 0 0 10.5 3.25M4.75 10.5a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0",clipRule:"evenodd"}))}),V=ce;var de=function(n,s){var t={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&s.indexOf(e)<0&&(t[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(n);o<e.length;o++)s.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(n,e[o])&&(t[e[o]]=n[e[o]]);return t};const me=l.forwardRef((n,s)=>{var{title:t,titleId:e}=n,o=de(n,["title","titleId"]);let a=P();return a=t?e||"title-"+a:void 0,l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24",focusable:!1,role:"img",ref:s,"aria-labelledby":a},o),t?l.createElement("title",{id:a},t):null,l.createElement("path",{fill:"currentColor",d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94z"}))}),ge=me,pe=l.createContext(null),he=(n,s)=>{var t,e,o;const{size:a,error:c,errorId:f}=n,i=l.useContext(pe),g=se(),b=(t=n.id)!==null&&t!==void 0?t:`${s}-${g}`,y=f??`${s}-error-${g}`,u=`${s}-description-${g}`,_=(i==null?void 0:i.disabled)||n.disabled,d=((i==null?void 0:i.readOnly)||n.readOnly)&&!_||void 0,w=!_&&!d&&!!(c||i!=null&&i.error),p=!_&&!d&&!!c&&typeof c!="boolean",h=Object.assign({},w?{"aria-invalid":!0}:{});return n!=null&&n.required,{showErrorMsg:p,hasError:w,errorId:y,inputDescriptionId:u,size:(e=a??(i==null?void 0:i.size))!==null&&e!==void 0?e:"medium",readOnly:d,inputProps:Object.assign(Object.assign({id:b},h),{"aria-describedby":k(n["aria-describedby"],{[u]:!!(n!=null&&n.description)&&typeof(n==null?void 0:n.description)=="string",[y]:p,[(o=i==null?void 0:i.errorId)!==null&&o!==void 0?o:""]:w&&!!(i!=null&&i.error)})||void 0,disabled:_})}},K=l.createContext(null);var ve=function(n,s){var t={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&s.indexOf(e)<0&&(t[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(n);o<e.length;o++)s.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(n,e[o])&&(t[e[o]]=n[e[o]]);return t};const H=l.forwardRef((n,s)=>{var t,{className:e,children:o,disabled:a,onClick:c}=n,f=ve(n,["className","children","disabled","onClick"]);const i=l.useContext(K);if(i===null)return console.warn("<Search.Button> has to be wrapped in <Search />"),null;const{size:g,variant:b,handleClick:y}=i;return r.createElement(ae,Object.assign({type:"submit"},f,{ref:s,size:g,variant:b==="secondary"?"secondary":"primary",className:k("navds-search__button-search",e),disabled:(t=i==null?void 0:i.disabled)!==null&&t!==void 0?t:a,onClick:ie(c,y),icon:r.createElement(V,Object.assign({},o?{"aria-hidden":!0}:{title:"Søk"}))}),o)});var fe=function(n,s){var t={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&s.indexOf(e)<0&&(t[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,e=Object.getOwnPropertySymbols(n);o<e.length;o++)s.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(n,e[o])&&(t[e[o]]=n[e[o]]);return t};const L=l.forwardRef((n,s)=>{const{inputProps:t,size:e="medium",inputDescriptionId:o,errorId:a,showErrorMsg:c,hasError:f}=he(n,"searchfield"),{className:i,hideLabel:g=!0,label:b,description:y,value:u,clearButtonLabel:_,onClear:d,clearButton:w=!0,children:p,variant:h="primary",defaultValue:E,onChange:B,onSearchClick:j,htmlSize:D,role:T}=n,X=fe(n,["className","hideLabel","label","description","value","clearButtonLabel","onClear","clearButton","children","variant","defaultValue","onChange","onSearchClick","htmlSize","role"]),x=l.useRef(null),J=re(x,s),[M,Q]=l.useState(E??""),$=l.useCallback(m=>{u===void 0&&Q(m),B==null||B(m)},[B,u]),R=l.useCallback(m=>{var S,C;d==null||d(m),$(""),x.current&&((C=(S=x.current)===null||S===void 0?void 0:S.focus)===null||C===void 0||C.call(S))},[$,d]),Y=()=>{j==null||j(`${u??M}`)};return r.createElement("div",{onKeyDown:m=>{var S,C;m.key==="Escape"&&(!((S=x.current)===null||S===void 0)&&S.value&&((C=x.current)===null||C===void 0?void 0:C.value)!==""&&m.preventDefault(),R({trigger:"Escape",event:m}))},className:k(i,"navds-form-field",`navds-form-field--${e}`,"navds-search",{"navds-search--error":f,"navds-search--disabled":!!t.disabled,"navds-search--with-size":!!D})},r.createElement(te,{htmlFor:t.id,size:e,className:k("navds-form-field__label",{"navds-sr-only":g})},b),!!y&&r.createElement(ne,{className:k("navds-form-field__description",{"navds-sr-only":g}),id:o,size:e,as:"div"},y),r.createElement("div",{className:"navds-search__wrapper"},r.createElement("div",{className:"navds-search__wrapper-inner"},h==="simple"&&r.createElement(V,{"aria-hidden":!0,className:"navds-search__search-icon"}),r.createElement("input",Object.assign({ref:J},le(X,["error","errorId","size","readOnly"]),t,{value:u??M,onChange:m=>$(m.target.value),type:"search",role:T??"searchbox",className:k(i,"navds-search__input",`navds-search__input--${h}`,"navds-text-field__input","navds-body-short",`navds-body-short--${e}`)},D?{size:Number(D)}:{})),(u??M)&&w&&r.createElement("button",{type:"button",onClick:m=>R({trigger:"Click",event:m}),className:"navds-search__button-clear"},r.createElement("span",{className:"navds-sr-only"},_||"Tøm"),r.createElement(ge,{"aria-hidden":!0}))),r.createElement(K.Provider,{value:{size:e,disabled:t.disabled,variant:h,handleClick:Y}},p||h!=="simple"&&r.createElement(H,null))),r.createElement("div",{className:"navds-form-field__error",id:a,"aria-relevant":"additions removals","aria-live":"polite"},c&&r.createElement(oe,{size:e},n.error)))});L.Button=H;const be="_autocompleteSuggestion__substring_mf7v0_1",ye="_autocompleteSuggestion__substring_mf7v0_1",_e="_autocompleteSuggestion__inner_mf7v0_4",Se="_autocompleteSuggestion__inner_mf7v0_4",we="_autocompleteSuggestion--active_mf7v0_12",I={autocompleteSuggestion__substring:be,autocompleteSuggestionSubstring:ye,autocompleteSuggestion__inner:_e,autocompleteSuggestionInner:Se,"autocompleteSuggestion--active":"_autocompleteSuggestion--active_mf7v0_12",autocompleteSuggestionActive:we};class G extends r.Component{constructor(s){super(s),this.state={value:s.value},this.onClick=this.onClick.bind(this),this.onMouseMove=this.onMouseMove.bind(this)}onClick(){const{onClick:s}=this.props,{value:t}=this.state;s(t)}onMouseMove(){const{setSuggestionIndex:s,index:t}=this.props;s(t)}render(){const{match:s,active:t,avoidBlur:e,id:o}=this.props,{value:a}=this.state.value,c=a.toLowerCase().startsWith(s.toLowerCase());return v.jsx("li",{id:o,role:"option","aria-selected":t,onClick:this.onClick,onMouseMove:this.onMouseMove,onFocus:e,onMouseDown:e,onKeyDown:e,className:"autocompleteSuggestion typo-normal",children:c?v.jsxs("span",{className:`${I.autocompleteSuggestion__inner} ${t?I["autocompleteSuggestion--active"]:""}`,children:[a.substring(0,s.length),v.jsx("span",{className:I.autocompleteSuggestion__substring,children:a.substring(s.length)})]}):v.jsx("span",{className:`${I.autocompleteSuggestion__inner} ${t?I["autocompleteSuggestion--active"]:""}`,children:a})})}}G.__docgenInfo={description:"",methods:[{name:"onClick",docblock:null,modifiers:[],params:[],returns:null},{name:"onMouseMove",docblock:null,modifiers:[],params:[],returns:null}],displayName:"AutocompleteSuggestion",props:{id:{required:!0,tsType:{name:"string"},description:""},index:{required:!0,tsType:{name:"number"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: Suggestion) => void",signature:{arguments:[{type:{name:"Suggestion"},name:"value"}],return:{name:"void"}}},description:""},value:{required:!0,tsType:{name:"Suggestion"},description:""},match:{required:!0,tsType:{name:"string"},description:""},active:{required:!0,tsType:{name:"boolean"},description:""},setSuggestionIndex:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},avoidBlur:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Ce="_autocomplete_9dlnp_1",ke="_autocomplete__suggestions_9dlnp_27",xe="_autocomplete__suggestions_9dlnp_27",Ie="_autocomplete__suggestions--hidden_9dlnp_31",A={autocomplete:Ce,autocomplete__suggestions:ke,autocompleteSuggestions:xe,"autocomplete__suggestions--hidden":"_autocomplete__suggestions--hidden_9dlnp_31",autocompleteSuggestionsHidden:Ie};let U=class extends r.Component{constructor(t){super(t);N(this,"input");N(this,"inputRef");this.state={activeSuggestionIndex:-1,hasFocus:!1,shouldShowSuggestions:!0,setAriaActiveDescendant:!1,shouldBlur:!0,blurDelay:null},this.inputRef=e=>{this.input=e},this.onChange=this.onChange.bind(this),this.onBlur=this.onBlur.bind(this),this.onKeyDown=this.onKeyDown.bind(this),this.onFocus=this.onFocus.bind(this),this.setValue=this.setValue.bind(this),this.setSuggestionIndex=this.setSuggestionIndex.bind(this),this.avoidBlur=this.avoidBlur.bind(this),this.clearBlurDelay=this.clearBlurDelay.bind(this),this.onSearchButtonClick=this.onSearchButtonClick.bind(this)}componentWillUnmount(){const{blurDelay:t}=this.state;t&&(clearTimeout(t),this.setState({blurDelay:null}))}onChange(t){const{onChange:e}=this.props;this.setState({activeSuggestionIndex:-1,shouldShowSuggestions:!0}),e(t)}onSearchButtonClick(t){const{onSearchButtonClick:e}=this.props;t.preventDefault(),e&&e()}onKeyDown(t){const{shouldShowSuggestions:e}=this.state;let{activeSuggestionIndex:o}=this.state;const{suggestions:a}=this.props,c=o>-1;switch(this.setState({setAriaActiveDescendant:t.keyCode===38||t.keyCode===40}),t.keyCode){case 9:c&&e&&this.setValue(a[o]);break;case 13:c&&e?(t.preventDefault(),this.setValue(a[o])):e&&a.length===1?this.setValue(a[0]):this.setState({shouldShowSuggestions:!1});break;case 27:e&&a.length>0&&(t.preventDefault(),this.setState({shouldShowSuggestions:!1}));break;case 38:e&&(t.preventDefault(),o=o-1===-2?-1:o-1,this.setState({activeSuggestionIndex:o}));break;case 40:e&&(t.preventDefault(),o=o+1===a.length?a.length-1:o+1,this.setState({activeSuggestionIndex:o}));break}}onFocus(){this.setState({hasFocus:!0,activeSuggestionIndex:-1})}onBlur(){const t=setTimeout(()=>{const{shouldBlur:o}=this.state;o&&this.setState({hasFocus:!1})},10);this.setState({blurDelay:t});const{onBlur:e}=this.props;e&&e()}setSuggestionIndex(t){this.setState({activeSuggestionIndex:t}),this.clearBlurDelay()}setValue(t){this.setState({shouldShowSuggestions:!1,activeSuggestionIndex:-1},()=>{this.inputRef.focus()}),this.clearBlurDelay();const{onSelect:e}=this.props;e(t)}avoidBlur(){this.setState({shouldBlur:!1})}clearBlurDelay(){const{blurDelay:t}=this.state;t&&(clearTimeout(t),this.setState({blurDelay:null})),this.setState({shouldBlur:!0})}render(){const{suggestions:t,id:e,ariaLabel:o,placeholder:a,value:c,name:f,shouldFocusOnMount:i,isLoading:g}=this.props,{activeSuggestionIndex:b,setAriaActiveDescendant:y,hasFocus:u,shouldShowSuggestions:_}=this.state,d=u&&_&&t.length>0,w=y&&b>-1?`${e}-item-${b}`:void 0;return v.jsxs("div",{className:`${A.autocomplete} autocomplete`,"aria-expanded":d,"aria-owns":`${e}-suggestions`,"aria-haspopup":"listbox",children:[v.jsx(L,{variant:"primary",id:e,name:f,"aria-label":o,"aria-autocomplete":"list","aria-controls":`${e}-suggestions`,"aria-activedescendant":w,placeholder:a,value:c,autoComplete:"off",onChange:this.onChange,onBlur:this.onBlur,onKeyDown:this.onKeyDown,onFocus:this.onFocus,ref:p=>{this.inputRef=p},className:"typo-normal",autoFocus:i,label:o,hideLabel:!0,children:v.jsx(L.Button,{loading:g,onClick:this.onSearchButtonClick})}),v.jsx("ul",{id:`${e}-suggestions`,role:"listbox",className:d?A.autocomplete__suggestions:A["autocomplete__suggestions--hidden"],children:d&&t.map((p,h)=>v.jsx(G,{id:`${e}-item-${h}`,index:h,value:p,match:c,active:h===b,onClick:this.setValue,setSuggestionIndex:this.setSuggestionIndex,avoidBlur:this.avoidBlur},p.key))})]})}};const W=U;U.__docgenInfo={description:"",methods:[{name:"onChange",docblock:null,modifiers:[],params:[{name:"value",optional:!1,type:{name:"string"}}],returns:null},{name:"onSearchButtonClick",docblock:null,modifiers:[],params:[{name:"event",optional:!1,type:{name:"ReactFormEvent",raw:"React.FormEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}],alias:"React.FormEvent"}}],returns:null},{name:"onKeyDown",docblock:null,modifiers:[],params:[{name:"event",optional:!1,type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent",alias:"React.KeyboardEvent"}}],returns:null},{name:"onFocus",docblock:null,modifiers:[],params:[],returns:null},{name:"onBlur",docblock:null,modifiers:[],params:[],returns:null},{name:"setSuggestionIndex",docblock:null,modifiers:[],params:[{name:"index",optional:!1,type:{name:"number"}}],returns:null},{name:"setValue",docblock:null,modifiers:[],params:[{name:"value",optional:!1,type:{name:"Suggestion",alias:"Suggestion"}}],returns:null},{name:"avoidBlur",docblock:null,modifiers:[],params:[],returns:null},{name:"clearBlurDelay",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Autocomplete",props:{onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: Suggestion) => void",signature:{arguments:[{type:{name:"Suggestion"},name:"value"}],return:{name:"void"}}},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},placeholder:{required:!0,tsType:{name:"string"},description:""},suggestions:{required:!0,tsType:{name:"Array",elements:[{name:"Suggestion"}],raw:"Suggestion[]"},description:""},value:{required:!0,tsType:{name:"string"},description:""},ariaLabel:{required:!0,tsType:{name:"string"},description:""},id:{required:!0,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},shouldFocusOnMount:{required:!1,tsType:{name:"boolean"},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:""},onSearchButtonClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Ne={title:"Autocomplete",component:W},Oe=()=>v.jsx(W,{value:"Verdi",onChange:n=>n,ariaLabel:"ariaLabel",id:"autocompleteId",placeholder:"",suggestions:[{key:"testItem",value:"Test Item"}],onSelect:()=>console.log("Selected")}),O=Oe.bind({});O.args={};var q,F,z;O.parameters={...O.parameters,docs:{...(q=O.parameters)==null?void 0:q.docs,source:{originalSource:`() => <AutocompleteComponent value="Verdi" onChange={v => v} ariaLabel="ariaLabel" id="autocompleteId" placeholder="" suggestions={[{
  key: 'testItem',
  value: 'Test Item'
}]} onSelect={() => console.log('Selected')} />`,...(z=(F=O.parameters)==null?void 0:F.docs)==null?void 0:z.source}}};const Ae=["Autocomplete"];export{O as Autocomplete,Ae as __namedExportsOrder,Ne as default};
