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
  enqueueSnackbar("El producto se agregó con éxito!", {
    variant: "success",
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "right",
    },
  });
};

export const productInBagNoti = () => {
  enqueueSnackbar("El producto ya está en la bolsa!", {
    variant: "info",
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "right",
    },
  });
};

export const addProdBag = () => {
  enqueueSnackbar("El producto se agregó a la bolsa con éxito!", {
    variant: "success",
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "right",
    },
  });
};

export const removeProdBagNoti = () => {
  enqueueSnackbar("El producto ha sido eliminado con éxitos!", {
    variant: "error",
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "right",
    },
  });
};

export const loginSuccess= () => {
  enqueueSnackbar("Bienvenido!", {
    variant: "success",
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "right",
    },
  });
}

export const loginDenied = () => {
  enqueueSnackbar("Credenciales incorrectas!", {
    variant: "error",
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "right",
    },
  });
}

export const loginError = () => {
  enqueueSnackbar("Falta datos de inicio de sesión!", {
    variant: "error",
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "right",
    },
  });
}

export const loginUserNotFound = () => {
  enqueueSnackbar("Usuario no encontrado en la base de datos!", {
    variant: "error",
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "right",
    },
  })
}

export const loginPasswordIncorrect = () => {
  enqueueSnackbar("Contraseña incorrecta!", {
    variant: "error",
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "right",
    },
  })
}