// import { getLongUrl } from "../db/apiUrls"
// import useFetch from "@/hooks/use-fetch";
// import { useEffect } from "react";
// import { useParams, Navigate } from "react-router-dom";

// const redirect = () => {
//     const { id } = useParams();
//     const { loading, error, data: urlData, fn } = useFetch(getLongUrl, id);
    
//     useEffect(() => {
//         fn();
//     }, []);
    
//     if (!loading && urlData) {
//         if(!urlData.original_url) {
//             return (<>Not found</>);
//         }else{
//            window.location.href = urlData.original_url;
//         }
       
//     }


//   return (
//     <div>
//       Redirecting
//     </div>
//   )
// }

// export default redirect



import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function Redirect() {
  const { id } = useParams();

  useEffect(() => {
    window.location.href = `https://frdjmejljjaanmdlhcfw.supabase.co/functions/v1/redirect_function/${id}`;
  }, [id]);

  return <div>Redirecting...</div>;
}

