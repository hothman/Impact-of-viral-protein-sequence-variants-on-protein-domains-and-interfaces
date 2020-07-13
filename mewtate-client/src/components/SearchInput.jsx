import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import {
  Button,
  makeStyles,
  Container,
  Card,
  CardContent,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const SearchInput = ({ onSearchInputSubmit }) => {
  const [protein, setProtein] = useState("");
  const [position, setPosition] = useState(0);
  const [variant, setVariant] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    onSearchInputSubmit(protein, position, variant);
  };

  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Card variant="outlined">
        <CardContent>
          <form
            noValidate
            autoComplete="off"
            className={classes.root}
            onSubmit={(e) => onSubmit(e)}
          >
            <TextField
              label="Protein"
              value={protein}
              onChange={(e) => setProtein(e.target.value)}
            />
            <TextField
              label="Position"
              type="number"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
            <TextField
              label="Variant"
              value={variant}
              onChange={(e) => setVariant(e.target.value)}
            />
            <Button type="submit" variant="contained">
              Mewtate!
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default SearchInput;
