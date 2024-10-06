'use client';
import { useEffect } from 'react';

export default function RootLayoutClient({children}:{children:React.ReactNode}){

    useEffect(()=>{
        if('serviceWorker' in navigator){
            navigator.serviceWorker.register('/sw.js').then((registeration)=>{
                console.log('Service Worker registerd with scope:',registeration.scope);
            }).catch((error)=>{
                console.error('Service Worker registration failed:',error);
            })
        }
    },[])

    return (
        <>
            {children}
        </>
    )
}