import signInAPI from "@/api/signInAPI.js";


export default async function signIn({credentials, router, errors, user, setUser}){
	const result = await signInAPI({credentials});

	if(!result.success){
		return errors.value = ["Wrong credentials"];
	}

	localStorage.setItem("isSignedIn", true);
	localStorage.setItem("token", result.data.token);
	localStorage.setItem("name", result.data.name);

	user.isSignedIn = true;

	setUser(result.data);

	router.push("/dashboard");
}
