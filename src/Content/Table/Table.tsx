import React, { useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Card from "../../UI/Card/Card";
import "./Table.css";
import PopupContext from "../../store/popup-context";

function createData(name: string, counter: number) {
  return { name, counter };
}

const BasicTable: React.FC<{
  users: { name: string; id: string; counter: number }[];
}> = (props) => {
  const ctx = useContext(PopupContext);
  let rows: any = [];
  props.users.map((user) => rows.push(createData(user.name, user.counter)));

  return (
    <Card className="table">
      <TableContainer component={Paper}>
        <Table
          className="table"
          sx={{ minWidth: 100, maxWidth: 500 }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell>
                <b>User</b>
              </TableCell>
              <TableCell align="right">
                <b>Counter</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: any) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                onClick={ctx.closePopup}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.counter}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default BasicTable;