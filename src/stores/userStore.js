import {reactive} from "vue";


const user = reactive({
	name: "",
	token: "",
	isSignedIn: false,
});


function signOutUser(){
	localStorage.removeItem("isSignedIn");
	localStorage.removeItem("token");
	localStorage.removeItem("name");

	user.name = "";
	user.token = "";
	user.isSignedIn = false;
}


export default function useUser(){

	return {user, signOutUser};
}
