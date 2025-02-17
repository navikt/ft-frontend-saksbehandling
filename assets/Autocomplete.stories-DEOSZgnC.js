var q=Object.defineProperty;var F=(a,s,e)=>s in a?q(a,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[s]=e;var g=(a,s,e)=>F(a,typeof s!="symbol"?s+"":s,e);import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{R as _}from"./index-Dxs5m6lS.js";import{S as v}from"./Search-BATYT3qI.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./clsx-B-dksMZM.js";import"./Button-D0flVHf8.js";import"./Loader-BHKWc60O.js";import"./omit-B7stZg_p.js";import"./useId-BdcioVLy.js";import"./Provider-B4A31v_2.js";import"./Label-g0SsZd4P.js";import"./Theme-D6t0sq75.js";import"./create-context-B5rPGqtO.js";import"./useFormField-CUgZtuoq.js";import"./useId-B9cQ8Pho.js";import"./XMark-HQCrC0kG.js";const M="_autocompleteSuggestion__substring_mf7v0_1",A="_autocompleteSuggestion__inner_mf7v0_4",u={autocompleteSuggestion__substring:M,autocompleteSuggestion__inner:A,"autocompleteSuggestion--active":"_autocompleteSuggestion--active_mf7v0_12"};class k extends _.Component{constructor(s){super(s),this.state={value:s.value},this.onClick=this.onClick.bind(this),this.onMouseMove=this.onMouseMove.bind(this)}onClick(){const{onClick:s}=this.props,{value:e}=this.state;s(e)}onMouseMove(){const{setSuggestionIndex:s,index:e}=this.props;s(e)}render(){const{match:s,active:e,avoidBlur:t,id:o}=this.props,{value:n}=this.state.value,r=n.toLowerCase().startsWith(s.toLowerCase());return i.jsx("li",{id:o,role:"option","aria-selected":e,onClick:this.onClick,onMouseMove:this.onMouseMove,onFocus:t,onMouseDown:t,onKeyDown:t,className:"autocompleteSuggestion typo-normal",children:r?i.jsxs("span",{className:`${u.autocompleteSuggestion__inner} ${e?u["autocompleteSuggestion--active"]:""}`,children:[n.substring(0,s.length),i.jsx("span",{className:u.autocompleteSuggestion__substring,children:n.substring(s.length)})]}):i.jsx("span",{className:`${u.autocompleteSuggestion__inner} ${e?u["autocompleteSuggestion--active"]:""}`,children:n})})}}k.__docgenInfo={description:"",methods:[{name:"onClick",docblock:null,modifiers:[],params:[],returns:null},{name:"onMouseMove",docblock:null,modifiers:[],params:[],returns:null}],displayName:"AutocompleteSuggestion",props:{id:{required:!0,tsType:{name:"string"},description:""},index:{required:!0,tsType:{name:"number"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: Suggestion) => void",signature:{arguments:[{type:{name:"Suggestion"},name:"value"}],return:{name:"void"}}},description:""},value:{required:!0,tsType:{name:"Suggestion"},description:""},match:{required:!0,tsType:{name:"string"},description:""},active:{required:!0,tsType:{name:"boolean"},description:""},setSuggestionIndex:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},avoidBlur:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const L="_autocomplete_9dlnp_1",R="_autocomplete__suggestions_9dlnp_27",h={autocomplete:L,autocomplete__suggestions:R,"autocomplete__suggestions--hidden":"_autocomplete__suggestions--hidden_9dlnp_31"};class S extends _.Component{constructor(e){super(e);g(this,"input");g(this,"inputRef");this.state={activeSuggestionIndex:-1,hasFocus:!1,shouldShowSuggestions:!0,setAriaActiveDescendant:!1,shouldBlur:!0,blurDelay:null},this.inputRef=t=>{this.input=t},this.onChange=this.onChange.bind(this),this.onBlur=this.onBlur.bind(this),this.onKeyDown=this.onKeyDown.bind(this),this.onFocus=this.onFocus.bind(this),this.setValue=this.setValue.bind(this),this.setSuggestionIndex=this.setSuggestionIndex.bind(this),this.avoidBlur=this.avoidBlur.bind(this),this.clearBlurDelay=this.clearBlurDelay.bind(this),this.onSearchButtonClick=this.onSearchButtonClick.bind(this)}componentWillUnmount(){const{blurDelay:e}=this.state;e&&(clearTimeout(e),this.setState({blurDelay:null}))}onChange(e){const{onChange:t}=this.props;this.setState({activeSuggestionIndex:-1,shouldShowSuggestions:!0}),t(e)}onSearchButtonClick(e){const{onSearchButtonClick:t}=this.props;e.preventDefault(),t&&t()}onKeyDown(e){const{shouldShowSuggestions:t}=this.state;let{activeSuggestionIndex:o}=this.state;const{suggestions:n}=this.props,r=o>-1;switch(this.setState({setAriaActiveDescendant:e.keyCode===38||e.keyCode===40}),e.keyCode){case 9:r&&t&&this.setValue(n[o]);break;case 13:r&&t?(e.preventDefault(),this.setValue(n[o])):t&&n.length===1?this.setValue(n[0]):this.setState({shouldShowSuggestions:!1});break;case 27:t&&n.length>0&&(e.preventDefault(),this.setState({shouldShowSuggestions:!1}));break;case 38:t&&(e.preventDefault(),o=o-1===-2?-1:o-1,this.setState({activeSuggestionIndex:o}));break;case 40:t&&(e.preventDefault(),o=o+1===n.length?n.length-1:o+1,this.setState({activeSuggestionIndex:o}));break}}onFocus(){this.setState({hasFocus:!0,activeSuggestionIndex:-1})}onBlur(){const e=setTimeout(()=>{const{shouldBlur:o}=this.state;o&&this.setState({hasFocus:!1})},10);this.setState({blurDelay:e});const{onBlur:t}=this.props;t&&t()}setSuggestionIndex(e){this.setState({activeSuggestionIndex:e}),this.clearBlurDelay()}setValue(e){this.setState({shouldShowSuggestions:!1,activeSuggestionIndex:-1},()=>{this.inputRef.focus()}),this.clearBlurDelay();const{onSelect:t}=this.props;t(e)}avoidBlur(){this.setState({shouldBlur:!1})}clearBlurDelay(){const{blurDelay:e}=this.state;e&&(clearTimeout(e),this.setState({blurDelay:null})),this.setState({shouldBlur:!0})}render(){const{suggestions:e,id:t,ariaLabel:o,placeholder:n,value:r,name:x,shouldFocusOnMount:B,isLoading:C}=this.props,{activeSuggestionIndex:d,setAriaActiveDescendant:D,hasFocus:w,shouldShowSuggestions:T}=this.state,m=w&&T&&e.length>0,I=D&&d>-1?`${t}-item-${d}`:void 0;return i.jsxs("div",{className:`${h.autocomplete} autocomplete`,"aria-expanded":m,"aria-owns":`${t}-suggestions`,"aria-haspopup":"listbox",children:[i.jsx(v,{variant:"primary",id:t,name:x,"aria-label":o,"aria-autocomplete":"list","aria-controls":`${t}-suggestions`,"aria-activedescendant":I,placeholder:n,value:r,autoComplete:"off",onChange:this.onChange,onBlur:this.onBlur,onKeyDown:this.onKeyDown,onFocus:this.onFocus,ref:c=>{this.inputRef=c},className:"typo-normal",autoFocus:B,label:o,hideLabel:!0,children:i.jsx(v.Button,{loading:C,onClick:this.onSearchButtonClick})}),i.jsx("ul",{id:`${t}-suggestions`,role:"listbox",className:m?h.autocomplete__suggestions:h["autocomplete__suggestions--hidden"],children:m&&e.map((c,p)=>i.jsx(k,{id:`${t}-item-${p}`,index:p,value:c,match:r,active:p===d,onClick:this.setValue,setSuggestionIndex:this.setSuggestionIndex,avoidBlur:this.avoidBlur},c.key))})]})}}S.__docgenInfo={description:"",methods:[{name:"onChange",docblock:null,modifiers:[],params:[{name:"value",optional:!1,type:{name:"string"}}],returns:null},{name:"onSearchButtonClick",docblock:null,modifiers:[],params:[{name:"event",optional:!1,type:{name:"ReactFormEvent",raw:"React.FormEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}],alias:"React.FormEvent"}}],returns:null},{name:"onKeyDown",docblock:null,modifiers:[],params:[{name:"event",optional:!1,type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent",alias:"React.KeyboardEvent"}}],returns:null},{name:"onFocus",docblock:null,modifiers:[],params:[],returns:null},{name:"onBlur",docblock:null,modifiers:[],params:[],returns:null},{name:"setSuggestionIndex",docblock:null,modifiers:[],params:[{name:"index",optional:!1,type:{name:"number"}}],returns:null},{name:"setValue",docblock:null,modifiers:[],params:[{name:"value",optional:!1,type:{name:"Suggestion",alias:"Suggestion"}}],returns:null},{name:"avoidBlur",docblock:null,modifiers:[],params:[],returns:null},{name:"clearBlurDelay",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Autocomplete",props:{onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: Suggestion) => void",signature:{arguments:[{type:{name:"Suggestion"},name:"value"}],return:{name:"void"}}},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},placeholder:{required:!0,tsType:{name:"string"},description:""},suggestions:{required:!0,tsType:{name:"Array",elements:[{name:"Suggestion"}],raw:"Suggestion[]"},description:""},value:{required:!0,tsType:{name:"string"},description:""},ariaLabel:{required:!0,tsType:{name:"string"},description:""},id:{required:!0,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},shouldFocusOnMount:{required:!1,tsType:{name:"boolean"},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:""},onSearchButtonClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const ee={title:"plattform-komponenter/Autocomplete",component:S},$=()=>i.jsx(S,{value:"Verdi",onChange:a=>a,ariaLabel:"ariaLabel",id:"autocompleteId",placeholder:"",suggestions:[{key:"testItem",value:"Test Item"}],onSelect:()=>console.log("Selected")}),l=$.bind({});l.args={};var y,f,b;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`() => <Autocomplete value="Verdi" onChange={v => v} ariaLabel="ariaLabel" id="autocompleteId" placeholder="" suggestions={[{
  key: 'testItem',
  value: 'Test Item'
}]}
// eslint-disable-next-line no-console
onSelect={() => console.log('Selected')} />`,...(b=(f=l.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const te=["Default"];export{l as Default,te as __namedExportsOrder,ee as default};
