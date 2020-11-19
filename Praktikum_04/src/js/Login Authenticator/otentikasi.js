function loginAuth(){
    const InpLogin = document.getElementById("InpLogin").value;
    const InpPassword = document.getElementById("InpPassword").value;
    const login = "NurulFikri";
    const password = "pemweb2020";
    if (InpLogin === login && InpPassword === password)
        alert("Login berhasil");
    else alert ("Login gagal")
}