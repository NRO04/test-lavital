import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useAppSelector } from "../../app/hooks";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const PROVIDER = useAppSelector(
    ({ serviceProvider }) => serviceProvider.value
  );

  const [guideForm, setGuideForm] = React.useState({
    approved_by: "",
    height: 0,
    length: 0,
    width: 0,
  });

  const handleguideFormChange = ({ target }) => {
    setGuideForm({
      ...guideForm,
      [target.name]: target.value,
    });
  };

  const guideFormSchema = [
    {
      name: "approved_by",
      title: "Aprovado Por",
    },

    {
      name: "height",
      title: "Altura",
    },
    {
      name: "length",
      title: "Longitud",
    },
    {
      name: "width",
      title: "Ancho",
    },
  ];

  const createGuide = async () => {
    const response = await PROVIDER.providingService("ORDER-SERVICE")
      .execute()
      .createGuide({ ...guideForm });
    console.log(response);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button
        className="btn"
        style={{ backgroundColor: "rgb(0, 127, 255)", color: "white" }}
        onClick={handleClickOpen}
      >
        Crear Guia
      </button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <strong>Crear Guia</strong>
        </DialogTitle>
        <DialogContent>
          <div className="flex jc-center flex-flw-wrap gap-30">
            {guideFormSchema.map(({ name, title }, index) => (
              <TextField
                key={index}
                name={name}
                autoFocus
                margin="dense"
                id={name}
                label={title}
                type="text"
                variant="standard"
                onChange={handleguideFormChange}
              />
            ))}
          </div>
        </DialogContent>
        <DialogActions>
          <button
            className="btn"
            style={{ backgroundColor: "rgb(245, 234, 234)", color: "black" }}
            onClick={handleClose}
          >
            Cancelar
          </button>
          <button
            className="btn"
            style={{ backgroundColor: "#1976d2", color: "white" }}
            onClick={createGuide}
          >
            Crear
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
