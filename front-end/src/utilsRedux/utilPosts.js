import axios from 'axios';

export const fetchRandomPost = () => {
    return axios.get('/influers/welcome')
}


// fetchRandomPost = () => {
//     axios.get('/influers/welcome')
//     .then((res) => {
//         console.log(res)
//         this.setState({
//             img: res.data.body.body 
//         })
//     })
// };