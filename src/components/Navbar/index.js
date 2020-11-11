import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import './Navbar.css';
import { Router } from '@material-ui/icons';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="root">
      <Tabs
        className="tabs"
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
      >
        <Tab label="Home" {...a11yProps(0)} />
        <Tab label="About" {...a11yProps(1)} />
        <Tab label="Portfolio" {...a11yProps(2)} />
        <Tab label="Contact" {...a11yProps(3)} />
      </Tabs>
      <TabPanel id="home" value={value} index={0}>
        <div>
            <h1>Homepage</h1>
        </div>
      </TabPanel>
      <TabPanel id="about" value={value} index={1}>
        <div>
            <h1>About</h1>
        </div>
      </TabPanel>
      <TabPanel id="portfolio" value={value} index={2}>
        <div>
            <h1>Portfolio</h1>
        </div>
      </TabPanel>
      <TabPanel id="contact" value={value} index={3}>
        <div>
            <h1>Contact</h1>
        </div>
      </TabPanel>
    </div>
  );
}