import axios from 'axios'

 const movieInfo = async(req,res)=>{
    const {title,genre} = req.query;
    let url = `http://www.omdbapi.com/?apikey=d45e652e`;

    if(title){
        url+=`&s=${title}`;
    }
    if(genre){
        url+=`&type=${genre}`;
    }

     const response = await axios.get(url);
     res.json(response.data);
     console.log(response.data);
}

export default movieInfo