// Init
import React from "react";
import { Route, Switch } from "react-router-dom";

// Routes
import Home from "../containers/Home.js";
import About from "../containers/About.js";
import ContactUs from "../containers/ContactUs.js";
import Blog from "../containers/Blog";
import OurProjects from "../containers/OurProjects";
import Services from "../containers/Services.js";
import WebDev from "../components/Services/WebDev.js";
import AppDev from "../components/Services/AppDev.js";
import SoftwareDev from "../components/Services/SoftwareDev.js";
import OnDemandDev from "../components/Services/OnDemandDev.js";
import UiDev from "../components/Services/UiDev.js";

const index = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/services/webdevelopment" component={WebDev} />
      <Route exact path="/services/AppDevelopment" component={AppDev} />
      <Route
        exact
        path="/services/SoftwareDevelopment"
        component={SoftwareDev}
      />
      <Route
        exact
        path="/services/OnDemandDevelopers"
        component={OnDemandDev}
      />
      <Route exact path="/services/UiDevelopment" component={UiDev} />
      <Route exact path="/contactus" component={ContactUs} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/ourprojects" component={OurProjects} />
    </Switch>
  );
};

export default index;
