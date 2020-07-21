import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsById, updateProduct } from "../../../../context/actions/ProductAction";
import { RootState } from "../../../../context/store";
import { LinearProgress, Breadcrumbs, Typography, Grid, FormControl, InputLabel, Input, FormHelperText, InputAdornment, Select, TextField, Button, makeStyles, Theme } from "@material-ui/core";
import { NavLink, Link } from "react-router-dom";
import { PRODUCT_CONTROL_PANEL } from "../../../../path";
import { DropzoneArea } from "material-ui-dropzone";
import SaveIcon from "@material-ui/icons/Save";
import ArrowBackIOS from "@material-ui/icons/ArrowBackIos"



const ProductEditPage = ({ match }: any) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const productID = match.params.productID;
  const { isLoading, data } = useSelector(
    (state: RootState) => state.productDetails
  );

  useEffect(() => {
    dispatch(getProductsById(productID));
  }, [dispatch, productID]);

  if (isLoading || Object.keys(data).length <= 0) {
    return (
      <div className="h-screen">
        <LinearProgress color="secondary" />
      </div>
    );
  }

  let { title = "", price = 0, type = "", description = "", images = [] } = data

  const handleTitleChange = (value: any) => {
    data['title'] = value
    title = value
  }

  const handleTypeChange = (value: any) => {
    data['type'] = value
    type = value
  }

  const handlePriceChange = (value: any) => {
    data['price'] = value
    price = value
  }
  const handleDescriptionChange = (value: any) => {
    data['description'] = value
    description = value
  }

  const handleImageChange = (files: any[]) => {
    data['images'] = files
    images = files
  }

  // Submit handler
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const productInfo = {
      productID,
      title,
      price,
      description,
      type,
    };
    dispatch(updateProduct(images, productID, data));
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto">
        <Breadcrumbs aria-label="breadcrumb">
          <NavLink
            exact
            to={PRODUCT_CONTROL_PANEL}
            className="text-black"
            style={{ textDecoration: "none" }}
          >
            Product Control Panel
            </NavLink>
          <Typography color="textPrimary">Product - {data.title}</Typography>
        </Breadcrumbs>
        {data.images !== undefined && (
          <div>
            <form
              className={classes.root}
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <Grid container spacing={5}>
                {/* Prodcut Title field */}
                <Grid item xs={12}>
                  <FormControl required fullWidth>
                    <InputLabel htmlFor="title">Title</InputLabel>
                    <Input
                      id="title"
                      value={title}
                      onChange={(e) => handleTitleChange(e.target.value)}
                    />
                  </FormControl>
                  <FormHelperText>Required</FormHelperText>
                </Grid>

                {/* Pirce input box */}
                <Grid item xs={12}>
                  <FormControl required fullWidth>
                    <InputLabel htmlFor="price">Price</InputLabel>
                    <Input
                      type="number"
                      id="price"
                      startAdornment={
                        <InputAdornment position="start">$</InputAdornment>
                      }
                      defaultValue={price}
                      onChange={(e) => handlePriceChange(e.target.value)}
                    />
                  </FormControl>
                  <FormHelperText>Required</FormHelperText>
                </Grid>

                {/* Category selection box */}
                <Grid item xs={12}>
                  <FormControl required fullWidth>
                    <InputLabel htmlFor="outlined-category-selection">
                      Category
                    </InputLabel>
                    <Select
                      native
                      defaultValue={type}
                      onChange={(e) => handleTypeChange(e.target.value)}
                      label="category"
                      inputProps={{
                        name: "category",
                        id: "outlined-category-selection",
                      }}
                    >
                      <option aria-label="None" value="" />
                      <option value={"VEGETABLE"}>Vegetable</option>
                      <option value={"FRUIT"}>Fruit</option>
                      <option value={"SNACKS"}>Snacks</option>
                      <option value={"DAIRY"}>Dairy Products</option>
                      <option value={"BREAD"}>Bread and Roti</option>
                      <option value={"SPICES"}>Spices</option>
                      <option value={"PULSES"}>Pulses</option>
                    </Select>
                  </FormControl>
                  <FormHelperText>Required</FormHelperText>
                </Grid>

                {/* Description field */}
                <Grid item xs={12}>
                  <FormControl required fullWidth>
                    <TextField
                      id="description"
                      label="description"
                      multiline
                      rows={4}
                      defaultValue={description}
                      onChange={(e) => handleDescriptionChange(e.target.value)}
                    />
                  </FormControl>
                  <FormHelperText>Required</FormHelperText>
                </Grid>

                {/* Image drop zone */}
                <Grid item xs={12}>
                  <Typography variant="h6">Product image(s)</Typography>
                  <DropzoneArea
                    acceptedFiles={["image/jpeg", "image/png", "image/jpg"]}
                    showPreviews={false}
                    maxFileSize={1000000}
                    onChange={(files) => handleImageChange(files)}
                  />
                </Grid>

                {/* Submit button */}
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    style={{float: "right"}}
                    startIcon={<SaveIcon />}
                  >
                    Update
                  </Button>
                  <Button 
                    variant="contained"
                    color="primary"
                    size="large"
                    startIcon={<ArrowBackIOS />}>
                    <Link to={PRODUCT_CONTROL_PANEL}>Back</Link>
                  </Button>
                </Grid>
              </Grid>
            </form>
          </div>
        )}
      </div>
    </div>
  );

};

export default ProductEditPage;

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(0),
    },
  },
}));

/**
 * Basic
 * Active switch
 * Delete Product
 * Edit image
 * edit inventory
 */
