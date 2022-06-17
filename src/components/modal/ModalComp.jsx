import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import "./modalcomp.css";
// import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ModalComp() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div type="button" variant="outlined" onClick={handleOpen}>
        + Add New Task
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            ADD TASK
          </Typography>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>What are you upto?</Form.Label>
              <Form.Control
                type="text"
                placeholder="Breif text for what you want to accomplish"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>When do you want to Complete it?</Form.Label>
              <Form.Control type="date" placeholder="Date in DD//MM/YY" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Tags</Form.Label>
              <Form.Select aria-label="Default select example">
                <option value="1">Personal</option>
                <option value="2">Home</option>
                <option value="3">Office</option>
              </Form.Select>
            </Form.Group>

            <Button variant="outlined" type="submit">
              Add
            </Button>
            <Button variant="outlined" type="submit">
              Cancel
            </Button>
          </Form>
        </Box>
      </Modal>
    </div>
  );
}
