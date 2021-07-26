import axios from 'axios';
import { BASE_URL } from '../enviroment/enviroment';

const fetchProspects = async (filterName) => {
    const { data } = await axios.get(`${BASE_URL}/prospects`, { params: { name: filterName } })

    return data.data
}

const Exports = {
    fetchProspects
}

export default Exports