import useFetch from "./useFetch.js";


export default async function signInAPI({credentials}){
	const path = "/auth/sign-in";
	const options = {
		method: "POST",
		headers: {
			"content-type": "application/json",
		},
		body: JSON.stringify(credentials),
	};

	const result = await useFetch({path, options});

	return result;
}
