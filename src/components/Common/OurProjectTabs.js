import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import OurProjectCard from "../Common/OurProjectCard";
import PermispopImg from "../../assets/images/PermispopImg.svg";
import DesignConf from "../../assets/images/DesignImg.svg";
import MediaPipe from "../../assets/images/MediaPipeImg.svg";
import Quadra from "../../assets/images/QuadraImg.svg";
import BarberShop from "../../assets/images/BarberShopImg.svg";
import Blsh from "../../assets/images/BlshImg.svg";
import Kidcap from "../../assets/images/KidcapImg.svg";
import Tajweed from "../../assets/images/TajweedImg.svg";
import EZbox from "../../assets/images/EZboxImg.svg";
import BeautySalon from "../../assets/images/BeautySalonImg.svg";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// import Website from "./WebsiteList";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [MoreProjects, SetMoreProjects] = React.useState(false);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="ProjectListMain" sx={{ width: "100%" }}>
      <Box className="ProjectListTabsBox">
        <Tabs
          className="ProjectListTabs"
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            className="ProjectListLabel"
            label="Software"
            {...a11yProps(0)}
          />
          <Tab className="ProjectListLabel" label="Website" {...a11yProps(1)} />
          <Tab className="ProjectListLabel" label="ALL" {...a11yProps(2)} />
          <Tab
            className="ProjectListLabel"
            label="Mobile Application"
            {...a11yProps(3)}
          />
          <Tab className="ProjectListLabel" label="UI/UX" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}></TabPanel>
      <TabPanel value={value} index={1}>
        <OurProjectCard
          Reverse
          src={DesignConf}
          title="Design Confection Ethiques"
          description="A revolutionary approach to mobile giving, fundraising, and donation collection."
        />
        <OurProjectCard
          title="EZbox"
          description="A revolutionary approach to mobile giving, fundraising, and donation collection."
          src={EZbox}
        />

        <OurProjectCard
          Reverse
          src={MediaPipe}
          title="MediaPipe"
          description="MediaPipe offers cross-platform, customizable ML solutions for live and streaming media"
        />
        <OurProjectCard
          src={Quadra}
          title="Quadrabase"
          description="A revolutionary approach to mobile giving, fundraising, and donation collection."
        />
        {MoreProjects ? (
          <>
            <OurProjectCard
              Reverse
              src={DesignConf}
              title="Design Confection Ethiques"
              description="A revolutionary approach to mobile giving, fundraising, and donation collection."
            />
            <OurProjectCard
              title="EZbox"
              description="A revolutionary approach to mobile giving, fundraising, and donation collection."
              src={EZbox}
            />

            <OurProjectCard
              Reverse
              src={MediaPipe}
              title="MediaPipe"
              description="MediaPipe offers cross-platform, customizable ML solutions for live and streaming media"
            />
            <OurProjectCard
              src={Quadra}
              title="Quadrabase"
              description="A revolutionary approach to mobile giving, fundraising, and donation collection."
            />
          </>
        ) : (
          ""
        )}
        <Grid xs={12} className="BlogBtnGrid">
          <Button
            className="BlogBtn"
            variant="outlined"
            onClick={(e) => SetMoreProjects(!MoreProjects)}
          >
            {MoreProjects ? "Show less" : "See more"}
          </Button>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <OurProjectCard
          Reverse
          src={DesignConf}
          title="Design Confection Ethiques"
          description="A revolutionary approach to mobile giving, fundraising, and donation collection."
        />
        <OurProjectCard
          description="A revolutionary approach to mobile giving, fundraising, and donation collection."
          src={PermispopImg}
        />

        <OurProjectCard
          Reverse
          src={MediaPipe}
          title="MediaPipe"
          description="MediaPipe offers cross-platform, customizable ML solutions for live and streaming media"
        />
        <OurProjectCard
          src={Quadra}
          title="Quadrabase"
          description="A revolutionary approach to mobile giving, fundraising, and donation collection."
        />
        {MoreProjects ? (
          <>
            <OurProjectCard
              Reverse
              src={DesignConf}
              title="Design Confection Ethiques"
              description="A revolutionary approach to mobile giving, fundraising, and donation collection."
            />
            <OurProjectCard
              description="A revolutionary approach to mobile giving, fundraising, and donation collection."
              src={PermispopImg}
            />

            <OurProjectCard
              Reverse
              src={MediaPipe}
              title="MediaPipe"
              description="MediaPipe offers cross-platform, customizable ML solutions for live and streaming media"
            />
            <OurProjectCard
              src={Quadra}
              title="Quadrabase"
              description="A revolutionary approach to mobile giving, fundraising, and donation collection."
            />
          </>
        ) : (
          ""
        )}
        <Grid xs={12} className="BlogBtnGrid">
          <Button
            className="BlogBtn"
            variant="outlined"
            onClick={(e) => SetMoreProjects(!MoreProjects)}
          >
            {MoreProjects ? "Show less" : "See more"}
          </Button>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <OurProjectCard
          Reverse
          src={Tajweed}
          title="Tajweed"
          description="A revolutionary approach to mobile giving, fundraising, and donation collection."
        />
        <OurProjectCard
          title="Permispop"
          description="A revolutionary approach to mobile giving, fundraising, and donation collection."
          src={PermispopImg}
        />

        <OurProjectCard
          Reverse
          src={Kidcap}
          title="Kidcap"
          description="MediaPipe offers cross-platform, customizable ML solutions for live and streaming media"
        />

        {MoreProjects ? (
          <>
            <OurProjectCard
              src={Tajweed}
              title="Tajweed"
              description="A revolutionary approach to mobile giving, fundraising, and donation collection."
            />
            <OurProjectCard
              Reverse
              title="Permispop"
              description="A revolutionary approach to mobile giving, fundraising, and donation collection."
              src={PermispopImg}
            />

            <OurProjectCard
              src={Kidcap}
              title="Kidcap"
              description="MediaPipe offers cross-platform, customizable ML solutions for live and streaming media"
            />
          </>
        ) : (
          ""
        )}
        <Grid xs={12} className="BlogBtnGrid">
          <Button
            className="BlogBtn"
            variant="outlined"
            onClick={(e) => SetMoreProjects(!MoreProjects)}
          >
            {MoreProjects ? "Show less" : "See more"}
          </Button>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <OurProjectCard
          Reverse
          src={Blsh}
          title="Blsh Delivery"
          description="A revolutionary approach to mobile giving, fundraising, and donation collection."
        />
        <OurProjectCard
          title="Barber Shop"
          description="A revolutionary approach to mobile giving, fundraising, and donation collection."
          src={BarberShop}
        />

        <OurProjectCard
          Reverse
          src={BeautySalon}
          title="Beauty Salon"
          description="MediaPipe offers cross-platform, customizable ML solutions for live and streaming media"
        />

        {MoreProjects ? (
          <>
            <OurProjectCard
              src={Blsh}
              title="Blsh Delivery"
              description="A revolutionary approach to mobile giving, fundraising, and donation collection."
            />
            <OurProjectCard
              Reverse
              title="Barber Shop"
              description="A revolutionary approach to mobile giving, fundraising, and donation collection."
              src={BarberShop}
            />

            <OurProjectCard
              src={BeautySalon}
              title="Beauty Salon"
              description="MediaPipe offers cross-platform, customizable ML solutions for live and streaming media"
            />
          </>
        ) : (
          ""
        )}
        <Grid xs={12} className="BlogBtnGrid">
          <Button
            className="BlogBtn"
            variant="outlined"
            onClick={(e) => SetMoreProjects(!MoreProjects)}
          >
            {MoreProjects ? "Show less" : "See more"}
          </Button>
        </Grid>
      </TabPanel>
    </Box>
  );
}
