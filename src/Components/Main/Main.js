import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Select } from "@mui/material";
import Graph from "../Graphs/Graph";
import MyTable from "../Graphs/Table";
import "./Main.scss"

function Main() {
  return (
    <div className="wrapper-content">
      <div>
        <div className="content-title">Advertising</div>
        <div className="content">
          <div className="content-menu">
            <div>
              <div className="content-subtitle">Marketplace</div>
              <div className="content-dropdown">
                <FormControl
                  variant="standard"
                  sx={{ m: 1, minWidth: 200 }}
                  size="small"
                >
                  <Select
                    labelId="select-marketplace"
                    id="demo-simple-select-standard"
                    size="small"
                    value="Amazon 974362"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"Amazon 974362"}>Amazon 974362</MenuItem>
                    <MenuItem value={"Amazon 974362"}>Amazon 974362</MenuItem>
                    <MenuItem value={"Amazon 974362"}>Amazon 974362</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div>
              <div className="content-subtitle">Ads</div>
              <div className="content-dropdown">
                <FormControl
                  variant="standard"
                  sx={{ m: 1, minWidth: 200 }}
                  size="small"
                  value="All"
                >
                  <Select
                    labelId="select-marketplace"
                    id="demo-simple-select-standard"
                    size="small"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"All"}>All</MenuItem>
                    <MenuItem value={"All"}>All</MenuItem>

                    <MenuItem value={"All"}>All</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
          <div className="content-date">
            <div className="content-subtitle time-zone">Date & Time</div>
            <div className="date-selection">
              <input type="date" />
              <span>
                <i className="bi bi-arrow-right"></i>
              </span>
              <input type="date" />
            </div>
            <div className="content-subtitle time-zone">PST Timezone</div>
          </div>
        </div>
      </div>
      <div className="content-graph">
        <Graph />
        <MyTable />
      </div>
    </div>
  );
}

export default Main;
