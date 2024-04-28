import { Card, CardContent, Container, Typography } from "@mui/material";
import CarListingForm from "../components/CarListingForm";

const PostCar = () => {
  return (
    <Container maxWidth="xs">
      <Card>
        <CardContent>
          <Typography variant="h1" fontSize={24} mb={2}>
            Publica tu Auto
          </Typography>
          <CarListingForm />
        </CardContent>
      </Card>
    </Container>
  );
};

export default PostCar;