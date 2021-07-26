import React from "react";


type PageTitlePropsType = {
    tittle: string
}

export function PageTitle(props: PageTitlePropsType) {
    console.log('title rendered');
    return <h1>{props.tittle}</h1>
}