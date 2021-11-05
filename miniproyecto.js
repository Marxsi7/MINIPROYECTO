

function traerEstudiantes(){
    fetch("https://randomuser.me/api/?results=20")
        .then(respuesta => respuesta.json())
        .then(datosEst =>{
            console.log("Se cargó correctamente.", datosEst);
            mostrarEstudiantes(datosEst);
        }).catch(error =>{
            console.log("Hay tremendo error, andá a revisarlo.", error.message);
        });
};
traerEstudiantes();
//Función para mostrar los estudiantes en una tabla
function mostrarEstudiantes(datosEst){
    tabla=`
    <table class="table">
        <thead class="table-dark">
        <tr>
            <th>Foto</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Edad</th>
            <th>Email</th>
            <th>Dirección</th>
            <th>Telefono</th>
        </tr>
        </thead>
        <tbody>`
        
    for(i=0; i < datosEst.results.length; i++)
    {
            //datosEst[i]=estudiante;
            //lista.push(datosEst[i])
            let estudiante = datosEst[i];
            tabla += `
            <tr class="table-success">
                <th scope="row">1</th>
                <td>${estudiante.first}</td>
                <td>${estudiante.Nombre}</td>
                <td>${estudiante.Apellido}</td>
                <td>${estudiante.Edad}</td>
                <td>${estudiante.Email}</td>
                <td>${estudiante.Dirección}</td>
                <td>${estudiante.Telefono}</td>
            </tr>`
            };
            //console.log(lista);
        tabla +=`
        </tbody>
    </table>`
    document.getElementById("acaTabla").innerHTML =tabla;
};