import React from 'react';

const Register = () => {
  return (
    

<div style={{padding: "10px", textalign: "center",  width:"500px", top:"25%",left:"30%"}} class="shadow-sm p-3 mb-5 bg-body rounded position-fixed">
<form>
  <img class="mb-4" src="https://meterpreter.org/wp-content/uploads/2018/09/flutter.png" width="350" height="100"></img>
  <h1 class="h3 mb-3 fw-normal">Ingersar Datos</h1>

  <div class="form-floating" >
    <input type="nombre" class="form-control" id="floatingInput" ></input>
    <label for="floatingInput">Nombre</label>
  </div>
  <div class="form-floating" >
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"></input>
        <label for="floatingInput">E-Mail</label>
      </div>
  <div class="form-floating">
    <input type="password" class="form-control" id="floatingPassword" placeholder="Password"></input>
    <label for="floatingPassword">Contraseña</label>
  </div>

  <div class="checkbox mb-3">
    
  </div>
  <button class="w-100 btn btn-lg btn-primary" type="submit">Ingresar</button>
</form>
</div>
  );
};

export default Register;