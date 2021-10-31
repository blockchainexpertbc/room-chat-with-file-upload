/*!

=========================================================
* Material Dashboard React - v1.10.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import TableList from "views/TableList/TableList.js";

const dashboardRoutes = [
  {
    path: "/table",
    name: "Job List",
    rtlName: "Job List",
    icon: "content_paste",
    component: TableList,
    layout: "/team",
  },
];

export default dashboardRoutes;
