import {reactive} from "vue";


const user = reactive({
    userId: "",
 	name: "",
    age: "",
    token: "",
    isSignedIn: false,
    chest: [],
    xp: 0,
    avatar: "",
});


function setUser(newUserData){
	Object.assign(user, newUserData);
}


function signOutUser(){
	localStorage.removeItem("isSignedIn");
	localStorage.removeItem("token");
	localStorage.removeItem("name");

	user.name = "";
	user.token = "";
	user.isSignedIn = false;
}


export default function useUser(){

	return {user, signOutUser, setUser};
}
