onload = function(){
    let tokenJwt = this.sessionStorage.getItem("jwt");

        if (!tokenJwt) {
            //alert("Você não tem permissão para acessar essa pagina...")
            location.href = "index.html"
        } else {
            console.log(tokenJwt);
        }

}