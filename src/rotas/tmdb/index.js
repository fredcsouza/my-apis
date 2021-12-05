const axios = require("axios").default;

const API_BASE = "https://api.themoviedb.org/3";
const urlOptions = '&sort_by=popularity.desc&include_adult=false&language=pt-br&'

const getUrl = path => `${API_BASE}${path}${urlOptions}${process.env.API_KEY}`;
const getUrlData = path => axios.get(`${API_BASE}${path}${urlOptions}${process.env.API_KEY}`);

let dados = require('./data');

class Tmdb {
    data = async(request, response) => {
        const requestList = dados.map(element => axios.get(`${element.path}${process.env.API_KEY}`))

        await Promise.all(requestList)
            .then(res => {
                res.forEach(({ data }, idx) => dados[idx].data = data)
            })

        return response.json(dados)
    }
}

module.exports = new Tmdb();