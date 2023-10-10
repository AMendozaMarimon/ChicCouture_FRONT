import { enqueueSnackbar } from "notistack";

export const removeProdNoti = () => {
  enqueueSnackbar("El producto ha sido eliminado con éxito!", {
    variant: "error",
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "right",
    },
  });
};

export const addProdNoti = () => {
  enqueueSnackbar("El producto se agregó con éxitos!", {
    variant: "success",
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "right",
    },
  });
};
