import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";

function Redirect() {
    const [windowURL,setWindowURL]=useState("");
    const router=useRouter();
    const {id}=router.query;

    useEffect(() => {
        if(id) {
            setWindowURL(window.location.origin);
            fetch(`/api/${id}`).then(data => data.json()).then((data) => window.location = data);
        }
    }, [id]);


    return (
        <div></div>
    );
}

export default Redirect;