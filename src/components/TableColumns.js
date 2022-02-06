import React from "react";
import '../App.css'
import Tooltip from '@material-ui/core/Tooltip';

function TableColumns(props) {

    const rows = [];
    for (let i = 0; i < props.weight; i++) {
        (rows.push(
            <td>
                <Tooltip title='Тут что-то будет'>
                    <input className='Button' type='button'/>
                </Tooltip>
            </td>
        ))
    }
    ;
    const columns = []
    for (let i = 0; i < props.height; i++) {
        (columns.push(<tr>{rows}</tr>))
    }
    ;
    return (
        <div>
            {columns}
        </div>
    )
}

export default TableColumns;
