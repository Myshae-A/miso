// import { use, useEffect} from "react";

// export default function DefaultPage() {
//     useEffect(() => {
//         // Fetch the users from the API
//         fetch(`https://miso-eight.vercel.app/users`)
//         .then((response) => {
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return response.json();
//         })
//         .catch((error) => {
//         console.error("'use effect FAILED TO FETCH: ", error);
//         });
//     }, []);
//     return (
//         <div>
//             <h1>Default Page</h1>
//         </div>
//     );
// }

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function DefaultPage() {
    const navigate = useNavigate();

    useEffect(() => {
        // Either redirect to login page
        navigate("/login");
        
        // Or if you want to fetch data first and then redirect:
        /*
        // Make sure the API URL is correct for your environment
        fetch(`${process.env.REACT_APP_API_URL || 'https://miso-eight.vercel.app/api'}/users`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log("Users fetched:", data);
                // Navigate after data is fetched
                navigate("/login");
            })
            .catch((error) => {
                console.error("Failed to fetch users: ", error);
                // Still navigate even if there's an error
                navigate("/login");
            });
        */
    }, [navigate]);

    return (
        <div>
            <h1>Loading...</h1>
        </div>
    );
}