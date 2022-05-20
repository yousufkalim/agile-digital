import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import KC_Logo from "../../assets/images/kidcabLogo.png";
import { Divider } from "@mui/material";
import CloseIcon from "../../assets/images/modalClose.svg";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  borderRadius: "20px",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        className="ModalOpenBtn"
        sx={{
          backgroundColor: `${props.ModalBtnTheme || "#47B9B4"}`,
          color: `${props.ModalBtntextColor || "white"}`,
        }}
        onClick={handleOpen}
      >
        {props.ModalBtnText || "View More"}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="ModalBox" sx={style}>
          <div className="Modal_Top">
            <img className="Modal_Logo" src={props.LogoSrc || KC_Logo} />
            <img
              style={{
                position: "absolute",
                width: "4%",
                right: "5%",
              }}
              onClick={handleClose}
              src={CloseIcon}
            />
          </div>
          <Typography
            className="ModalHeading"
            id="modal-modal-title"
            variant="h4"
            component="h2"
          >
            {props.Heading || "Kidcab"}
          </Typography>
          <Divider
            width={props.Dividerwidth || "12%"}
            color={props.DividerTheme || "#0097A7"}
            sx={{
              height: "4px",
              borderRadius: "4px",
              margin: "1% 0",
            }}
          />
          <Typography className="Modal_SubHeading" id="modal-modal-description">
            {props.SubH1 ||
              "The standard Lorem Ipsum passage, used since the 1500s"}
          </Typography>
          <Typography className="Modal_Para" id="modal-modal-description">
            {props.para1 ||
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit involuptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
          </Typography>
          <Typography className="Modal_SubHeading" id="modal-modal-description">
            {props.SubH2 ||
              "Section 1.10.32 of de Finibus Bonorum et Malorum, written by Cicero in 45 BC"}
          </Typography>
          <Typography className="Modal_Para" id="modal-modal-description">
            {props.para2 ||
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto "}
          </Typography>
          <Typography className="Modal_SubHeading" id="modal-modal-description">
            {props.SubH3 || "1914 translation by H. Rackham"}
          </Typography>
          <Typography className="Modal_Para" id="modal-modal-description">
            {props.par3 ||
              "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes"}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

// props for BasicModal

// LogoSrc = to upload logo image
// Heading = main project Title
// Dividerwidth = divider's width
// DividerBG = Divider's background color
// SubH1 = sub heading title
// para1 = sub heading description
// SubH2 = sub heading title
// para2 = sub heading description
// SubH3 = sub heading title
// para3 = sub heading description
