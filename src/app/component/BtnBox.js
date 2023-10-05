'use client'

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react"

export function BtnBox() {
    let [isAlpha, setIsAlpha] = useState(true);
    let [isShow, setIsShow] = useState(true);

    const pathName = usePathname();
    useEffect(() => {
        if(pathName.includes('/use/')) {
            setIsShow(false);
        } else {
            setIsShow(true);
        }
    }, [pathName]);

    const router = useRouter();
    console.log(router)
    return (
        <div id='btnBox'>
            <Link 
                href='/report/ALPHA'
                id='ALPHA' 
                className={isShow ? isAlpha ? 'active' : '' : 'disNone'} 
                onClick={() => { 
                    setIsAlpha(true);
                }} 
            > ALPHA</Link>
            <Link 
                href='/report/AMARANCE'
                id='AMARANCE' 
                className={isShow ? !isAlpha ? 'active' : '' : 'disNone'} 
                onClick={() => { 
                    setIsAlpha(false)
                }} 
            > AMARANCE</Link>

            <div 
                onClick={() => {
                    router.back();
                    // 조회 API 호출
                }} 
                id="backBtn"
                className={!isShow ? '' : 'disNone'} 
            > BACK </div>
        </div>
    )
}