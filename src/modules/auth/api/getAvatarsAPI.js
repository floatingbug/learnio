import useFetch from "@/api/useFetch";


export default async function getAvatarsAPI(){
	const path = "/resource/get-avatars";
	const options = {
		method: "GET",
		headers: {},
	};

	const result = await useFetch({
		path,
		options,
	});

	return result;
}
