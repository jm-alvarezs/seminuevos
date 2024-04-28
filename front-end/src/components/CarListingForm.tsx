import { useState } from "react";
import Box from "@mui/material/Box";
import CarsService from "../services/CarsService";
import { FormControl } from "@mui/base/FormControl";
import {
  Alert,
  Button,
  TextField,
  Typography,
  InputAdornment,
  LinearProgress,
} from "@mui/material";

const CarListingForm = () => {
  const [price, setPrice] = useState(0);
  const [error, setError] = useState<null | string>(null);
  const [posting, setPosting] = useState(false);
  const [description, setDescription] = useState("");
  const [screenshotUrl, setScreenshotUrl] = useState("");

  const handleSubmit = () => {
    setError(null);
    const data = {
      description,
      price,
    };
    setPosting(true);
    CarsService.postCar(data)
      .then((res) => {
        const { file_url } = res.data;
        setScreenshotUrl(file_url);
        setPosting(false);
      })
      .catch((error) => {
        setError(String(error));
        setPosting(false);
      });
  };

  const renderError = () => {
    if (error !== null) {
      return (
        <Box mt={2} mb={2}>
          <Alert severity="error">{error}</Alert>
        </Box>
      );
    }
  };

  const renderPosting = () => {
    if (posting) {
      return (
        <Box mt={3} mb={3}>
          <Typography>Publicando tu Auto...</Typography>
          <LinearProgress />
        </Box>
      );
    }
  };

  const renderScreenshot = () => {
    if (screenshotUrl !== "") {
      return (
        <Box mt={3} mb={3}>
          <img
            src={screenshotUrl}
            alt="Anuncio Publicado"
            loading="lazy"
            style={{ maxWidth: "100%", width: "100%" }}
          />
          <Alert severity="success">Anuncio publicado con éxito</Alert>
        </Box>
      );
    }
  };

  return (
    <Box>
      <Box mb={3}>
        <FormControl required>
          <TextField
            id="precio"
            fullWidth
            value={price}
            type="number"
            label="Precio"
            onChange={(e) => setPrice(parseInt(e.target.value))}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
          />
        </FormControl>
      </Box>
      <Box mb={3}>
        <FormControl required>
          <TextField
            fullWidth
            multiline
            minRows="3"
            type="text"
            id="description"
            label="Descripción"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormControl>
      </Box>
      <Button
        fullWidth
        type="submit"
        onClick={handleSubmit}
        variant="contained"
        color="error"
      >
        Publicar Auto
      </Button>
      {renderPosting()}
      {renderError()}
      {renderScreenshot()}
    </Box>
  );
};

export default CarListingForm;
