import React from "react";


type HeadBarPropsType = {
    name: string
}

function HeadBar(props: HeadBarPropsType) {
    return (
        <div>
            {props.name}
        </div>
    );
}

export default HeadBar;
