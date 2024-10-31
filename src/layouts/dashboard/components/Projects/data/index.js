/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Tooltip from "@mui/material/Tooltip";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";

// Images
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data() {
  // Function to display member avatars with status (active/inactive)
  const avatars = (members) =>
    members.map(([image, name, status]) => (
      <Tooltip key={name} title={`${name} (${status})`} placeholder="bottom">
        <MDAvatar
          src={image}
          alt={name}
          size="xs"
          sx={{
            border: ({ borders: { borderWidth }, palette: { white } }) =>
              `${borderWidth[2]} solid ${white.main}`,
            cursor: "pointer",
            position: "relative",
            "&:not(:first-of-type)": {
              ml: -1.25,
            },
            "&:hover, &:focus": {
              zIndex: "10",
            },
          }}
        />
      </Tooltip>
    ));

  const Name = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDTypography variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  return {
    // Column names changed to "Names" and "Active/Inactive"
    columns: [
      { Header: "Names", accessor: "names", width: "45%", align: "left" },
      { Header: "Active/Inactive", accessor: "members", width: "10%", align: "left" },
    ],

    // Updated rows with specific names and statuses for each member
    rows: [
      {
        names: <Name image={team1} name="Jude Botchwey" />,
        members: (
          <MDBox display="flex" py={1}>
            {avatars([[team1, "Jude Botchwey", "active"]])} {/* Active */}
          </MDBox>
        ),
      },
      {
        names: <Name image={team2} name="Olutayo Adeleke" />,
        members: (
          <MDBox display="flex" py={1}>
            {avatars([[team2, "Olutayo Adeleke", "inactive"]])} {/* Inactive */}
          </MDBox>
        ),
      },
      {
        names: <Name image={team3} name="Amgad Elsayed" />,
        members: (
          <MDBox display="flex" py={1}>
            {avatars([[team3, "Amgad Elsayed", "active"]])} {/* Active */}
          </MDBox>
        ),
      },
      {
        names: <Name image={team4} name="Opeyemi Owodolu" />,
        members: (
          <MDBox display="flex" py={1}>
            {avatars([[team4, "Opeyemi Owodolu", "inactive"]])} {/* Inactive */}
          </MDBox>
        ),
      },
      {
        names: <Name image={team1} name="Vlastimil Masek" />,
        members: (
          <MDBox display="flex" py={1}>
            {avatars([[team1, "Vlastimil Masek", "active"]])} {/* Active */}
          </MDBox>
        ),
      },
      {
        names: <Name image={team2} name="Mobina Mirzaaghaei" />,
        members: (
          <MDBox display="flex" py={1}>
            {avatars([[team2, "Mobina Mirzaaghaei", "inactive"]])} {/* Inactive */}
          </MDBox>
        ),
      },
    ],
  };
}
