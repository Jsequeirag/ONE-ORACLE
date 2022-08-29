const inputTexto = document.querySelector(".txta-texto");
const mensaje = document.querySelector(".txta-mensaje");
const btnCopy = document.querySelector(".btn-copiar ");
const info = document.getElementById("span-info");
/* -------------------------------------------------------------------------- */
/*                              encriptar mensaje                             */
/* -------------------------------------------------------------------------- */

const btnEncriptar = () => {
  if (!validarAcentoYmayusculas(inputTexto.value)) {
    info.style.display = "block";
  } else {
    info.style.display = "none";
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = "";
    btnCopy.style.display = "block";
  }
};

const encriptar = (stringEncriptada) => {
  const matrizCodigo = [
    ["a", "al"],
    ["e", "eg"],
    ["i", "im"],
    ["o", "op"],
    ["u", "uf"],
  ];
  stringEncriptada = stringEncriptada.toLowerCase();
  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  return stringEncriptada;
};
/* -------------------------------------------------------------------------- */
/*                            desencriptar mensaje                            */
/* -------------------------------------------------------------------------- */
function btnDesencriptar() {
  const textoEncriptado = desencriptar(inputTexto.value);
  mensaje.value = textoEncriptado;
  inputTexto.value = "";
}

const desencriptar = (stringDesencriptada) => {
  const matrizCodigo = [
    ["a", "al"],
    ["e", "eg"],
    ["i", "im"],
    ["o", "op"],
    ["u", "uf"],
  ];
  stringDesencriptada = stringDesencriptada.toLowerCase();
  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptada.includes(matrizCodigo[i][1])) {
      stringDesencriptada = stringDesencriptada.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      );
    }
  }
  return stringDesencriptada;
};

/* -------------------------------------------------------------------------- */
/*                                boton copiar                                */
/* -------------------------------------------------------------------------- */
function copiar() {
  mensaje.select();
  navigator.clipboard.writeText(mensaje.value);
  mensaje.value = "";
  alert("Texto Copiado");
}

/* -------------------------------------------------------------------------- */
/*                         validar tildes y mayusculas                        */
/* -------------------------------------------------------------------------- */

const validarAcentoYmayusculas = (texto) => {
  return /^[a-z]*$/.test(texto); // return false or true  ^---> desde el inicio $---> hasta el final [a-z]---> desde la "a" hasta "z"
};
