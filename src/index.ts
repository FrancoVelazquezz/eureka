import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>`;
let password: string;
let x = 0;
while (  password !== "eureka" && x < 3) {
  x += 1;
  password = prompt("Ingrese contraña: ");
  if (password === "eureka") {
    console.log("Contraseña correcta. Bienvenido");
  } else {
    console.log("Credencial incorrecta");
  }
}

