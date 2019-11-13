import React from 'react';
import Button from "../Button";

function FilmList(props) {
    return (
        <div>
            <Button {...props}/>
            <div>Пропсы от App до FilmList==> {props.pr.a}</div>
        </div>
    )
}

export default FilmList;