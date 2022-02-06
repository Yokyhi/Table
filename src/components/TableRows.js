import React from "react";
import '../App.css'

function TableRows(props) {
    const rows = [];
    for (let i = 0; i < props.height; i++) {
        (rows.push(<tr>Х</tr>))
    }
    ;
    return (
        <div>
            {columns}
        </div>
    )
}

export default TableColumns;
