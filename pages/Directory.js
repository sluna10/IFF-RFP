import React, {useMemo} from "react";
import {useTable} from "react-table";
import { COLUMNS } from "../components/Judgecolumns";
import styles from '../styles/table.module.css';

export const getServerSideProps = async() => {
    const res = await fetch("http://localhost:3000/api/Directoryapi");
    const Judges = await res.json();
    // console.log(court);
        
    return {
        props: {Judges},
    };
}

export default function Judge ({Judges}) {
    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => Judges, []);

    //CREATE A TABLE INSTANCE
    const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    }    = useTable({
    columns,
    data
    });
    console.log(data)
    
    return(
        <div className={styles.table}>
            <table style={{width: "100%"}} {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                            ))}
                        </tr>    
                    ))}
                </thead> 
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>
                                    {cell.render("Cell")}</td>
                                })}
                            </tr>
                        )
                    })}
                    <tr>
                        <td style={{}}></td>
                    </tr>
                </tbody>
            </table>
		</div>
    )
};