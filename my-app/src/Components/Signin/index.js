import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Signin(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleSignin = () => {
        if (username === "soal" && password === "soal") {
            props.setLogin(true);
            props.setUser(username);
            navigate("/");
            // setLogin(true);
        } else {
            console.error("login failed");
        }
    }
    // if (isLoggedin) {
    //     return <Navigate to="/" />
    // }
    return (
        <div>
            <input placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input placeholder="password" type={password} value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSignin}>Sign in</button>
        </div>)
}