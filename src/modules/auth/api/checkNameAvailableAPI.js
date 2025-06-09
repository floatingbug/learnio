import useFetch from "@/api/useFetch.js";


export default async function checkNameAvailableAPI({name}){
	const path = `/user/is-name-available?name=${name}`;
	const options = {
		method: "GET",
		headers: {},
	};

	const result = await useFetch({
		path,
		options,
	});

	return result.data;
}
