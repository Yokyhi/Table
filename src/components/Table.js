import React from "react";
import TableColumns from "./TableColumns";
import '../App.css'


function Table() {

    return (
        <div className='content'>
            <table>
                <tbody>
                <TableColumns weight={5} height={4}></TableColumns>
                </tbody>
            </table>
        </div>
    );
}

export default Table;
