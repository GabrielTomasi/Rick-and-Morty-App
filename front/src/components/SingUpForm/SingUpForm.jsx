import { useState } from "react"

const SingUpForm = ()=>{
const [singUpData, setSingUpData] = useState({
    email: "",
    password: "",
    confirm_password: "",
});

const handleSubmit = (event)=>{
    event.preventDefault()
    if (singUpData.password !== singUpData.confirm_password) return window.alert("Passwords do not match");

}

const handleChange = (event)=>{
    const name = event.target.name;
    const value = event.target.value;

    setSingUpData({...singUpData, [name]:value})
}

return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email</label>
                <input type="text" name="email" value={singUpData.email} onChange={handleChange}/>
            </div>
            <div>
                <label>password</label>
                <input type="text" name="password" value={singUpData.password} onChange={handleChange}/>
            </div>
            <div>
                <label>confirm password</label>
                <input type="text" name="confirm_password" value={singUpData.confirm_password} onChange={handleChange}/>
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
)
}

export default SingUpForm