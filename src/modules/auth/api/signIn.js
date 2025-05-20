import signInAPI from "@/api/signInAPI.js";


export default async function signIn({credentials, router, errors, user}){
	const result = await signInAPI({credentials});

	if(!result.success){
		return errors.value = ["Wrong credentials"];
	}

	localStorage.setItem("isSignedIn", true);
	localStorage.setItem("token", result.data.token);
	localStorage.setItem("name", result.data.name);

	user.isSignedIn = true;
	user.token = result.data.token;
	user.name = result.data.name;

	router.push("/dashboard");
}
