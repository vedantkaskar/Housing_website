import {useEffect,useState} from 'react';
const key='housing-demo-state',initial={saved:[],collection:'All saved',requests:[]};
export function useDemoStore(){const [state,setState]=useState(()=>{try{return {...initial,...JSON.parse(localStorage.getItem(key))}}catch{return initial}});useEffect(()=>localStorage.setItem(key,JSON.stringify(state)),[state]);return {state,setState};}
