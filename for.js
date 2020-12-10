var getData = function()
{
    var Cedula = document.getElementById("Cedula").value;
    var Nombres = document.getElementById("Nombres").value;
    var Apellidos = document.getElementById("Apellidos").value;
    var Estado = document.getElementById("Estado").value;
    var Genero = document.getElementById("Genero").value;
    var Ciudad = document.getElementById("Ciudad").value;  
    var Direccion = document.getElementById("Direccion").value;
    var Telefono = document.getElementById("Telefono").value;  
    var Email = document.getElementById("Email").value;
      
    if (isNaN(Cedula)) {
        document.getElementById("Cedula").focus();
        alert('[ERROR] El campo debe tener numeros');
    } else { 
            if (Nombres == null || Nombres.length == 0) {
                document.getElementById("Nombres").focus();
                alert("El campo no puede ser vacio");
    } else {
            if (Apellidos == null || Apellidos.length == 0) {
                document.getElementById("Apellidos").focus();
                alert("El campo no puede ser vacio");
    } else{
            if(Estado == null || Estado == 0){
                document.getElementById("Estado").focus();
                return false;
    } else{ 
        if(Genero == null || Genero == 0){
            document.getElementById("Genero").focus();
            return false;

    }else{
        if (Ciudad == null|| Ciudad.length == 0) {
                document.getElementById("Ciudad").focus();
                alert("El campo no puede ser vacio");
    } else {
            if (Direccion == null|| Direccion.length == 0) {
                document.getElementById("Direccion").focus();
                alert("El campo no puede ser vacio");
    } else {
            if (isNaN(Telefono)) {
                document.getElementById("Telefono").focus()
                alert('[ERROR] El campo debe tener numeros');
    } else {
        if (Email == null|| Email.length == 0) {
            document.getElementById("Email").focus();
            alert("El campo no puede ser vacio");
        } else {
            console.log(Cedula+" "+ Nombres+" "+Apellidos+" "+Estado+" "+Genero+" "+Ciudad+" "+Direccion+" "+Telefono+" "+Email);
            document.getElementById("Cedula").value = "";
            document.getElementById("Nombres").value = "";
            document.getElementById("Apellidos").value = "";
            document.getElementById("Estado").value = "";
            document.getElementById("Genero").value = "";
            document.getElementById("Ciudad").value = "";
            document.getElementById("Direccion").value = "";
            document.getElementById("Telefono").value = "";
            document.getElementById("Email").value = ""; 
            document.getElementById("Cedula").focus() 
        }
        }    
        }        
        }       
        }       
        }
    }
    }   
    }
}