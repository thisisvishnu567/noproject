export async function ProfileChecker(){
    try{
        let response  = await fetch("http://localhost:8080/users");
        let data = await response.json();
        return data;
    }
    catch(error){
        console.log("Error while fetching or parsing data..." , error);
        throw error;
    }
}