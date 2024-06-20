import * as React from "react";
import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./ResultsTable.component.css";
import Formatter from "../service/formatter.service";
import { text } from "stream/consumers";

interface TableProps {
  data: any;
}

const ResultsTable = (props: TableProps) => {
  const [formattedData, setFormattedData] = useState<
    {
      sourceNode: string;
      sourceNodeType: string;
      targetNode: string;
      targetNodeType: string;
    }[]
  >([]);
  const formatter = new Formatter();

  useEffect(() => {
    const fetchData = async () => {
      const formattedData = await formatter.prepareResults(props.data);
      setFormattedData(formattedData);
    };

    fetchData();
  }, []);

  return (
    <div className="table-container">
      <h3 className="table-title">Offloading Results</h3>
      <TableContainer className="table-inner-container" component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bold" }}>Source node</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Type</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Target node</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Type</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {formattedData.map((row) => (
              <TableRow
                key={row.sourceNode}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell style={{ width: 250 }} component="th" scope="row">
                  {row.sourceNode}
                </TableCell>
                <TableCell style={{ width: 100 }}>
                  {row.sourceNodeType}
                </TableCell>
                <TableCell style={{ width: 250 }}>{row.targetNode}</TableCell>
                <TableCell style={{ width: 100 }}>
                  {row.targetNodeType}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ResultsTable;
