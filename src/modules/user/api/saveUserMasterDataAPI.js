import useFetch from "@/api/useFetch.js";


export default async function saveUserMasterDataAPI({changes}){
	const path = "/user/change-master-data";
	const options = {
		method: "POST",
		headers: {
			"content-type": "application/json",
		},
		body: JSON.stringify(changes),
	};


	const result = await useFetch({path, options, addToken: true});
	return result.data;
}
