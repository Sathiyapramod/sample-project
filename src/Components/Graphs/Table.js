import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import { Chip, Table, TableContainer, TablePagination } from "@mui/material";
import { TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const rows = [
  {
    Status: "Active",
    CampaignName: "Maxima Twin",
    Info: ["M", "SP", "SK"],
    Automation: true,
    Dayparting: false,
    Budget: 7099,
    BiddingStrategy: "Up & Down",
    Spend: 8462,
    Revenue: 5966,
    CurrentBid: 8,
    Conv: 1.5,
  },
  {
    Status: "Active",
    CampaignName: "Maxima Twin",
    Info: ["M", "SP", "SK"],
    Automation: true,
    Dayparting: false,
    Budget: 7099,
    BiddingStrategy: "Up & Down",
    Spend: 8462,
    Revenue: 5966,
    CurrentBid: 8,
    Conv: 1.5,
  },
  {
    Status: "Active",
    CampaignName: "Maxima Twin",
    Info: ["M", "SP", "SK"],
    Automation: true,
    Dayparting: false,
    Budget: 7099,
    BiddingStrategy: "Up & Down",
    Spend: 8462,
    Revenue: 5966,
    CurrentBid: 8,
    Conv: 1.5,
  },
  {
    Status: "Active",
    CampaignName: "Maxima Twin",
    Info: ["M", "SP", "SK"],
    Automation: true,
    Dayparting: false,
    Budget: 7099,
    BiddingStrategy: "Up & Down",
    Spend: 8462,
    Revenue: 5966,
    CurrentBid: 8,
    Conv: 1.5,
  },
];

function MyTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(3);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <>
      <TableContainer>
        <Table
          style={{ height: 400, width: "100%", backgroundColor: "#FFFFFF" }}
        >
          <TableHead>
            <TableRow>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Campaign Name</TableCell>
              <TableCell sx={{ width: 120 }}>Info</TableCell>
              <TableCell sx={{ width: 120 }}>Automation</TableCell>
              <TableCell>Dayparting</TableCell>
              <TableCell>Budget</TableCell>
              <TableCell>Bidding Strategy</TableCell>
              <TableCell>Spend</TableCell>
              <TableCell>Revenue</TableCell>
              <TableCell>Current Bid</TableCell>
              <TableCell>Conv</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((element, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>{element.Status}</TableCell>
                  <TableCell>{element.CampaignName}</TableCell>
                  <TableCell>
                    {element.Info.map((element, index) => {
                      return (
                        <Chip
                          key={index}
                          label={element}
                          size="small"
                          variant="outlined"
                        />
                      );
                    })}
                  </TableCell>
                  <TableCell>
                    {element.Automation ? (
                      <Switch defaultChecked disabled />
                    ) : (
                      <Switch disabled />
                    )}
                  </TableCell>
                  <TableCell>
                    {element.Dayparting ? (
                      <Switch defaultChecked />
                    ) : (
                      <Switch disabled />
                    )}
                  </TableCell>
                  <TableCell>${element.Budget}</TableCell>
                  <TableCell>
                    <a rel="noreferrer" href="1">
                      {element.BiddingStrategy}
                    </a>
                  </TableCell>
                  <TableCell>${element.Spend}</TableCell>
                  <TableCell>${element.Revenue}</TableCell>
                  <TableCell>${element.CurrentBid}</TableCell>
                  <TableCell>{element.Conv}%</TableCell>
                  <TableCell>
                    <MoreVertIcon />
                  </TableCell>
                </TableRow>
              );
            })}
            <TableRow>
              <TableCell colSpan={13}>
                <TablePagination
                  rowsPerPageOptions={[3, 4, 5]}
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default MyTable;
