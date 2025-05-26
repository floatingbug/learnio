import useFetch from "@/api/useFetch.js";


export default async function getUserAPI(){
	const path = "/user";
	const options = {
		method: "GET",
		headers: {},
	}

	const result = await useFetch({path, options, addToken: true});

	return result.data;
}
