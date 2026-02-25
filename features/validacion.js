// Función que recibe un correo electrónico como texto
function validarEmail(email) {

  // Verifica que el correo tenga el símbolo "@"
  // Si no lo tiene, no puede ser un email válido
  if (!email.includes("@")) {
    return false; // Retorna falso si no hay "@"
  }

  // Verifica que el correo tenga al menos un punto "."
  // Normalmente los correos tienen algo como ".com", ".org", etc.
  if (!email.includes(".")) {
    return false; // Retorna falso si no hay punto
  }

  // Verifica que el símbolo "@" no esté al inicio
  // Un email no puede empezar con "@"
  if (email.indexOf("@") === 0) {
    return false; // Si empieza con "@", no es válido
  }

  // Verifica que el último punto esté después del "@"
  // Esto asegura que haya algo como "correo@dominio.com"
  if (email.lastIndexOf(".") < email.indexOf("@")) {
    return false; // Si el punto está antes del "@", es inválido
  }

  // Si pasa todas las validaciones anteriores,
  // entonces el email se considera válido
  return true;
}