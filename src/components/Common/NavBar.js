import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Logo from "../../assets/images/logo.png";
import LogoWhite from "../../assets/images/logo_white.png";
import NavMenu from "../../assets/images/NavMenu.png";
import WhiteMenuIcon from "../../assets/images/WhiteMenuIcon.svg";
import CloseIcon from "../../assets/images/close_White.png";
import MenuImg from "../../assets/images/MenuImg.svg";
import { Divider, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function NavBar(props) {
  const [Menu, SetMenu] = React.useState(false);
  const [ServiceDropDown, SetServiceDropDown] = React.useState(false);

  return (
    <>
      {props.ContactUs ? (
        <Box className="NavBarBox" sx={{ flexGrow: 1 }}>
          <AppBar
            className="AppBarBox"
            position="static"
            sx={{
              backgroundColor: "#02356f",
              color: "blue",
              padding: "0px 20px",
              boxShadow: "0px 4px 13px rgba(0, 0, 0, 0.1)",
            }}
          >
            {Menu ? (
              <motion.div
                className="MenuDiv"
                animate={{ y: [-1000, 0] }}
                transition={{ ease: "easeOut", duration: 1 }}
              >
                <Toolbar
                  className="NavToolbar"
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <a href={`${process.env.REACT_APP_DEMO}/`}>
                    <img alt="logo" src={LogoWhite} style={{ width: "70%" }} />
                  </a>
                  <img
                    className="MenuIconMob"
                    alt="menu"
                    src={CloseIcon}
                    style={{ width: "2.5%", color: "white" }}
                    onClick={(e) => SetMenu(!Menu)}
                  />
                </Toolbar>
                <div className="MenuSectionMain">
                  <div className="MenuSection">
                    <div className="MenuImgDiv">
                      <img className="MenuImg" src={MenuImg} />
                    </div>
                    <div className="MenuTypoDiv">
                      <div className="ServiceOptionDiv">
                        {ServiceDropDown ? (
                          <>
                            <div className="ServicesDropDown">
                              <ul className="ServicesFields">
                                <li>
                                  <a
                                    href={`${process.env.REACT_APP_DEMO}/services/WebDevelopment`}
                                  >
                                    WEB DEVELOPMENT
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href={`${process.env.REACT_APP_DEMO}/services/AppDevelopment`}
                                  >
                                    APP DEVELOPMENT
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href={`${process.env.REACT_APP_DEMO}/services/SoftwareDevelopment`}
                                  >
                                    SOFTWARE DEVELOPMENT
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href={`${process.env.REACT_APP_DEMO}/services/OnDemandDevelopers`}
                                  >
                                    ON DEMAND DEVELOPERS
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href={`${process.env.REACT_APP_DEMO}/services/UiDevelopment`}
                                  >
                                    UI/UX DEVELOPMENT
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <Divider
                              orientation="vertical"
                              sx={{
                                width: ".5%",
                                height: "35%",
                                backgroundColor: "#fff",
                                borderRadius: "4px",
                                marginLeft: "5%",
                              }}
                            />
                          </>
                        ) : (
                          ""
                        )}
                      </div>
                      {/* <Divider
                  sx={{
                    width: "25%",
                    height: ".5%",
                    backgroundColor: "#fff",
                    borderRadius: "4px",
                    marginTop: "-13%",
                  }}
                /> */}
                      {/* {console.log("processlink", process.env.REACT_APP_DEMO)} */}
                      <div className="MainMenu">
                        <ul className="MainMenuList">
                          <li>
                            <a href={`${process.env.REACT_APP_DEMO}/about`}>
                              About
                            </a>
                          </li>
                          <li
                            onClick={(e) =>
                              SetServiceDropDown(!ServiceDropDown)
                            }
                          >
                            Services
                          </li>
                          <li>
                            <a href={`${process.env.REACT_APP_DEMO}/blog`}>
                              Blog
                            </a>
                          </li>
                          <li>
                            <a
                              href={`${process.env.REACT_APP_DEMO}/ourprojects`}
                            >
                              Our Projects
                            </a>
                          </li>
                          <li>
                            <a href={`${process.env.REACT_APP_DEMO}/contactus`}>
                              Contact Us
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <Toolbar
                className="NavToolbar"
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <a href={`${process.env.REACT_APP_DEMO}/`}>
                  <img alt="logo" src={LogoWhite} style={{ width: "70%" }} />
                </a>
                <img
                  className="MenuIconMob"
                  alt="menu"
                  src={WhiteMenuIcon}
                  style={{ width: "2.5%" }}
                  onClick={(e) => SetMenu(!Menu)}
                />
              </Toolbar>
            )}
          </AppBar>
        </Box>
      ) : (
        <Box className="NavBarBox" sx={{ flexGrow: 1 }}>
          <AppBar
            className="AppBarBox"
            position="static"
            sx={{
              backgroundColor: "white",
              color: "blue",
              padding: "0px 20px",
              boxShadow: "0px 4px 13px rgba(0, 0, 0, 0.1)",
            }}
          >
            {Menu ? (
              <motion.div
                className="MenuDiv"
                animate={{ y: [-1000, 0] }}
                transition={{ ease: "easeOut", duration: 1 }}
              >
                <Toolbar
                  className="NavToolbar"
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <a href={`${process.env.REACT_APP_DEMO}/`}>
                    <img alt="logo" src={LogoWhite} style={{ width: "70%" }} />
                  </a>
                  <img
                    className="MenuIconMob"
                    alt="menu"
                    src={CloseIcon}
                    style={{ width: "2.5%", color: "white" }}
                    onClick={(e) => SetMenu(!Menu)}
                  />
                </Toolbar>
                <div className="MenuSectionMain">
                  <div className="MenuSection">
                    <div className="MenuImgDiv">
                      <img className="MenuImg" src={MenuImg} />
                    </div>
                    <div className="MenuTypoDiv">
                      <div className="ServiceOptionDiv">
                        {ServiceDropDown ? (
                          <>
                            <motion.div
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{ duration: 1 }}
                              // viewport={{ once: true }}
                              className="ServicesDropDown"
                            >
                              <ul className="ServicesFields">
                                <li>
                                  <a
                                    href={`${process.env.REACT_APP_DEMO}/services/WebDevelopment`}
                                  >
                                    WEB DEVELOPMENT
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href={`${process.env.REACT_APP_DEMO}/services/AppDevelopment`}
                                  >
                                    APP DEVELOPMENT
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href={`${process.env.REACT_APP_DEMO}/services/SoftwareDevelopment`}
                                  >
                                    SOFTWARE DEVELOPMENT
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href={`${process.env.REACT_APP_DEMO}/services/OnDemandDevelopers`}
                                  >
                                    ON DEMAND DEVELOPERS
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href={`${process.env.REACT_APP_DEMO}/services/UiDevelopment`}
                                  >
                                    UI/UX DEVELOPMENT
                                  </a>
                                </li>
                              </ul>
                            </motion.div>
                            <Divider
                              orientation="vertical"
                              sx={{
                                width: ".5%",
                                height: "35%",
                                backgroundColor: "#fff",
                                borderRadius: "4px",
                                marginLeft: "5%",
                              }}
                            />

                            {/* <Divider
                            sx={{
                              width: "25%",
                              height: ".5%",
                              backgroundColor: "#fff",
                              borderRadius: "4px",
                              marginTop: "-13%",
                            }}
                          /> */}
                          </>
                        ) : (
                          ""
                        )}
                      </div>

                      <div className="MainMenu">
                        <ul className="MainMenuList">
                          <li>
                            <a href={`${process.env.REACT_APP_DEMO}/about`}>
                              About
                            </a>
                          </li>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <li
                              onClick={(e) =>
                                SetServiceDropDown(!ServiceDropDown)
                              }
                            >
                              Services
                            </li>
                          </div>
                          <li>
                            <a href={`${process.env.REACT_APP_DEMO}/blog`}>
                              Blog
                            </a>
                          </li>
                          <li>
                            <a
                              href={`${process.env.REACT_APP_DEMO}/ourprojects`}
                            >
                              Our Projects
                            </a>
                          </li>
                          <li>
                            <a href={`${process.env.REACT_APP_DEMO}/contactus`}>
                              Contact Us
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <Toolbar className="NavToolbar">
                <a href={`${process.env.REACT_APP_DEMO}/`}>
                  <img alt="logo" src={Logo} style={{ width: "70%" }} />
                </a>

                <img
                  className="MenuIconMob"
                  alt="menu"
                  src={NavMenu}
                  style={{ width: "2.5%" }}
                  onClick={(e) => SetMenu(!Menu)}
                />
              </Toolbar>
            )}
          </AppBar>
        </Box>
      )}
    </>
  );
}
