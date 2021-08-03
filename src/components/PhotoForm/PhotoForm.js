import React, {useState} from "react";
import {Grid, Button, TextField} from "@material-ui/core";
import FileInput from '../UI/FileInput/FileInput';

const PhotoForm = props => {
  const [state, setState] = useState({
    title: "",
    image: ""
  });

  const inputChangeHandler = e => {
    const {name, value} = e.target;
    setState(prevState => {
      return {...prevState, [name]: value};
    });
  };

  const fileChangeHandler = e => {
    const file = e.target.files[0];
    setState(prevState => {
      return {
        ...prevState,
        image: file 
      };
    });
  };

  const formSubmitHandler = e => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(state).forEach(key => {
      formData.append(key, state[key]);
    });
    props.onSubmit(formData);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <Grid container direction="column" spacing={2}>
        <Grid item>
            <TextField
                fullWidth
                variant="outlined"
                label="Title"
                name="title"
                onChange={inputChangeHandler}
                value={state.value}
                required
            />
        </Grid>
        <Grid item>
          <FileInput
            label="Image"
            name="image"
            onChange={fileChangeHandler}
            required
          />
        </Grid>
        <Grid item>
          <Button type="submit" color="primary">
            Create Photo
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default PhotoForm;