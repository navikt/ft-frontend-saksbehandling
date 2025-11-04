import{j as e,F as R,A as f,G as j,I as N,u as A,J as v,H as x}from"./iframe-CPmh237e.js";import{r as b}from"./formUtils-DABjV5vL.js";import{R as T}from"./RhfDatepicker-BfSuG0Az.js";import{R as y}from"./RhfTextField-PpZYXGWS.js";import"./preload-helper-PPVm8Dsz.js";import"./customParseFormat-Kt4e9Th7.js";import"./ReadOnlyField-Dg2kshbo.js";const c=({fields:r,readOnly:n=!0,titleText:l,addButtonText:a,emptyTemplate:d,children:i,remove:s,append:o,size:t="small"})=>e.jsxs(R,{legend:l,size:t,children:[r.map((m,F)=>i(m,F,e.jsx(h,{index:F,remove:s,size:t,skjul:n}))),e.jsx(g,{append:o,emptyTemplate:d,size:t,skjul:n,children:a})]}),h=({index:r,remove:n,size:l,skjul:a})=>r>0&&!a?e.jsx(f,{icon:e.jsx(j,{"aria-hidden":!0}),title:"Fjern element",type:"button",variant:"tertiary-neutral",size:l,onClick:()=>{n(r)}}):null,g=({append:r,size:n,skjul:l,emptyTemplate:a,children:d})=>l?null:e.jsx(f,{onClick:()=>r(a),type:"button",tabIndex:0,variant:"tertiary",icon:e.jsx(N,{"aria-hidden":!0}),size:n,children:d});c.__docgenInfo={description:"",methods:[],displayName:"RhfFieldArray",props:{children:{required:!0,tsType:{name:"signature",type:"function",raw:`(
  field: FieldArrayWithId<TFieldValues, TFieldArrayName>,
  index: number,
  removeButton?: ReactNode,
) => ReactNode`,signature:{arguments:[{type:{name:"FieldArrayWithId",elements:[{name:"TFieldValues"},{name:"TFieldArrayName"}],raw:"FieldArrayWithId<TFieldValues, TFieldArrayName>"},name:"field"},{type:{name:"number"},name:"index"},{type:{name:"ReactNode"},name:"removeButton"}],return:{name:"ReactNode"}}},description:""},fields:{required:!0,tsType:{name:"Array",elements:[{name:"FieldArrayWithId",elements:[{name:"TFieldValues"},{name:"TFieldArrayName"}],raw:"FieldArrayWithId<TFieldValues, TFieldArrayName>"}],raw:"FieldArrayWithId<TFieldValues, TFieldArrayName>[]"},description:""},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},titleText:{required:!1,tsType:{name:"string"},description:""},addButtonText:{required:!0,tsType:{name:"string"},description:""},emptyTemplate:{required:!0,tsType:{name:"FieldArray",elements:[{name:"TFieldValues"},{name:"TFieldArrayName"}],raw:"FieldArray<TFieldValues, TFieldArrayName>"},description:""},remove:{required:!0,tsType:{name:"UseFieldArrayRemove"},description:""},append:{required:!0,tsType:{name:"UseFieldArrayAppend",elements:[{name:"TFieldValues"},{name:"TFieldArrayName"}],raw:"UseFieldArrayAppend<TFieldValues, TFieldArrayName>"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:"",defaultValue:{value:"'small'",computed:!1}}}};h.__docgenInfo={description:"",methods:[],displayName:"RhfFieldArrayRemoveButton",props:{index:{required:!0,tsType:{name:"number"},description:""},remove:{required:!0,tsType:{name:"UseFieldArrayRemove"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:""},skjul:{required:!1,tsType:{name:"boolean"},description:""}}};g.__docgenInfo={description:"",methods:[],displayName:"RhfFieldArrayAppendButton",props:{append:{required:!0,tsType:{name:"UseFieldArrayAppend",elements:[{name:"TFieldValues"},{name:"TFieldArrayName"}],raw:"UseFieldArrayAppend<TFieldValues, TFieldArrayName>"},description:""},emptyTemplate:{required:!0,tsType:{name:"FieldArray",elements:[{name:"TFieldValues"},{name:"TFieldArrayName"}],raw:"FieldArray<TFieldValues, TFieldArrayName>"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},skjul:{required:!1,tsType:{name:"boolean"},description:""}}};const w={component:c,decorators:b({test:[{periodeFom:"",periodeTom:""}],personer:[{fornavn:"Ola",etternavn:"Nordmann",adresse:"Karl Johans Gate 1"},{fornavn:"Sven",etternavn:"Svensen",adresse:"Slottsbacken 1"}]}),args:{readOnly:!1,size:"small",titleText:"Perioder",addButtonText:"Legg til periode",emptyTemplate:{periodeFom:"",periodeTom:""},children:()=>e.jsx(e.Fragment,{}),fields:[],remove:()=>{},append:()=>{}}},p={render:({size:r,readOnly:n,...l})=>{const{control:a}=A(),{fields:d,remove:i,append:s}=v({control:a,name:"test"});return e.jsx(c,{...l,fields:d,append:s,remove:i,emptyTemplate:{periodeFom:"",periodeTom:""},titleText:"Perioder",addButtonText:"Legg til periode",size:r,readOnly:n,children:(o,t,m)=>e.jsxs(x,{gap:"2",align:"end",children:[e.jsx(T,{size:r,readOnly:n,name:`test.${t}.periodeFom`,label:"Fra og med",control:a}),e.jsx(T,{size:r,readOnly:n,name:`test.${t}.periodeTom`,label:"Til og med",control:a}),m]},o.id)})}},u={render:({size:r,readOnly:n,...l})=>{const{control:a}=A(),{fields:d,remove:i,append:s}=v({control:a,name:"personer"});return e.jsx(c,{...l,fields:d,append:s,remove:i,titleText:"Personer",addButtonText:"Legg til person",size:r,readOnly:n,emptyTemplate:{fornavn:"",etternavn:"",adresse:""},children:(o,t,m)=>e.jsxs(x,{gap:"2",align:"end",children:[e.jsx(y,{name:`personer.${t}.fornavn`,control:a,label:"Fornavn",size:r,readOnly:n}),e.jsx(y,{name:`personer.${t}.etternavn`,control:a,label:"Etternavn",size:r,readOnly:n}),e.jsx(y,{name:`personer.${t}.adresse`,control:a,label:"Adresse",size:r,readOnly:n}),m]},o.id)})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: ({
    size,
    readOnly,
    ...rest
  }) => {
    const {
      control
    } = useFormContext<StoryFormValues>();
    const {
      fields,
      remove,
      append
    } = useFieldArray({
      control,
      name: 'test'
    });
    return <RhfFieldArray {...rest} fields={fields} append={append} remove={remove} emptyTemplate={{
      periodeFom: '',
      periodeTom: ''
    }} titleText="Perioder" addButtonText="Legg til periode" size={size} readOnly={readOnly}>
        {(field, index, removeButton) => <HStack gap="2" key={field.id} align="end">
            <RhfDatepicker size={size} readOnly={readOnly} name={\`test.\${index}.periodeFom\`} label="Fra og med" control={control} />
            <RhfDatepicker size={size} readOnly={readOnly} name={\`test.\${index}.periodeTom\`} label="Til og med" control={control} />
            {removeButton}
          </HStack>}
      </RhfFieldArray>;
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: ({
    size,
    readOnly,
    ...rest
  }) => {
    const {
      control
    } = useFormContext<StoryFormValues>();
    const {
      fields,
      remove,
      append
    } = useFieldArray({
      control,
      name: 'personer'
    });
    return <RhfFieldArray {...rest} fields={fields} append={append} remove={remove} titleText="Personer" addButtonText="Legg til person" size={size} readOnly={readOnly} emptyTemplate={{
      fornavn: '',
      etternavn: '',
      adresse: ''
    }}>
        {(field, index, removeButton) => <HStack gap="2" key={field.id} align="end">
            <RhfTextField name={\`personer.\${index}.fornavn\`} control={control} label="Fornavn" size={size} readOnly={readOnly} />
            <RhfTextField name={\`personer.\${index}.etternavn\`} control={control} label="Etternavn" size={size} readOnly={readOnly} />
            <RhfTextField name={\`personer.\${index}.adresse\`} control={control} label="Adresse" size={size} readOnly={readOnly} />
            {removeButton}
          </HStack>}
      </RhfFieldArray>;
  }
}`,...u.parameters?.docs?.source}}};const I=["Default","MedAnnenType"];export{p as Default,u as MedAnnenType,I as __namedExportsOrder,w as default};
