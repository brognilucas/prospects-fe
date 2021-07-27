import axios from 'axios';
import { BASE_URL } from '../enviroment/enviroment';

const fetchProspects = async (filter) => {
    const { data } = await axios.get(`${BASE_URL}/prospects`, { params: filter })

    return data.data
}

const Exports = {
    fetchProspects
}

export default Exports