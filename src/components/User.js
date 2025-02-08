import { useEffect, useState } from "react"

const User = () => {
    const [userInfo, setUserInfo] = useState({})

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch('https://api.github.com/users/kavya-naik-21');
        const jsonData = await data.json();

        setUserInfo(jsonData)
    }
    return (
        <div>
            <h2>Name: {userInfo.name}</h2>
            <h3>company: {userInfo.company}</h3>
            <h3>email: {userInfo.email}</h3>
        </div>
    )
}

export default User