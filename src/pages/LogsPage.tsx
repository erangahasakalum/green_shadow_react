import { Button } from "antd";
import TableComponents from "../components/table/TableComponent";

export function LogsPage(){
    return(
        <>
        <div>
            <h1>Logs </h1>
            <Button type="primary">Add Logs</Button>
        </div>

        <div>
            <TableComponents/>
        </div>
        </>
    )
}