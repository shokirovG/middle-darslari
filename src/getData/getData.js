import axios from "axios";
import arrToString from "../arrToString/arrToString.js";



const getData =async()=> {
    const resolve = await axios.get('https://jsonplaceholder.typicode.com/users')

    const userIds = resolve.data.map(user => user.id)

    return arrToString(userIds)
}

export default getData

