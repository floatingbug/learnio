import useUser from "@/stores/userStore.js";


const {user} = useUser();


export default async function useFetch({path, options, addToken = false}){
	try{
		if(addToken) options.headers.authorization = user.token;

		const response = await fetch(`${import.meta.env.VITE_API_URL}${path}`, options);
		const result = await response.json();

		return result;
	}
	catch(error){
		console.log(error);
	}
}
