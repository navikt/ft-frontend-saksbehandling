import{_ as u,s as g,u as x}from"./index-3e88b910.js";import{r as a}from"./index-ebeaab24.js";function E(e,t){var n=e.values,s=u(e,["values"]),o=t.values,i=u(t,["values"]);return g(o,n)&&g(s,i)}function v(e){var t=x(),n=t.formatMessage,s=t.textComponent,o=s===void 0?a.Fragment:s,i=e.id,f=e.description,M=e.defaultMessage,F=e.values,l=e.children,d=e.tagName,m=d===void 0?o:d,h=e.ignoreTag,y={id:i,description:f,defaultMessage:M},r=n(y,F,{ignoreTag:h});return typeof l=="function"?l(Array.isArray(r)?r:[r]):m?a.createElement(m,null,a.Children.toArray(r)):a.createElement(a.Fragment,null,r)}v.displayName="FormattedMessage";var c=a.memo(v,E);c.displayName="MemoizedFormattedMessage";const A=c;export{A as F};
//# sourceMappingURL=message-c02f1551.js.map
