export async function CheckLogin(email,password){
    try{
        const response = await fetch("http://localhost:8080/users");
        const data = await response.json();

        const found = users.find(Mail => users.email === Mail && password == users.password);

        if(found){
            return("Login successfull");
        }
        else{
            return("Invalid email or password")
        }
    }
    catch(error){
        console.log("Error checking credentials..." , error );
    }
}