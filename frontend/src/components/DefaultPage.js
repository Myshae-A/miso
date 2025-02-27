import { use, useEffect} from "react";

export default function DefaultPage() {
    useEffect(() => {
        // Fetch the users from the API
        fetch(`https://miso-eight.vercel.app/users`)
        .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
        })
        .catch((error) => {
        console.error("'use effect FAILED TO FETCH: ", error);
        });
    }, []);
    return (
        <div>
            <h1>Default Page</h1>
        </div>
    );
}