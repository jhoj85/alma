import axios from 'axios';

const BASEURL = process.env.BASE_URL;

export function getData(data) {
    const URL = `${BASEURL}URL ENDPOINT`;

    const response = axios.get(URL, {
        params: {
            page: dataPage,
        },
        paramsSerializer: params => {
            let urlWithParams = new URLSearchParams()

            if(params.page) {
                urlWithParams.append('page', params.page);
            }

            return urlWithParams
        }
    })
    .then((res) => res.data);

    return response
}