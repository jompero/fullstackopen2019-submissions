import axios from 'axios';

const baseUrl = '/api/persons';

const waitForResponse = (req) => {
    return req
        .then(res => res.data);
}

const getAll = () => {
    return waitForResponse(axios.get(baseUrl));
}

const getPerson = (id) => {
    return waitForResponse(axios.get(`${baseUrl}/${id}`));
}

const addPerson = (person) => {
    return waitForResponse(axios.post(baseUrl, person));
}

const updatePerson = (person) => {
    return waitForResponse(axios.put(`${baseUrl}/${person.id}`, person))
}

const deletePerson = (person) => {
    return waitForResponse(axios.delete(`${baseUrl}/${person.id}`));
}

export default { getAll, getPerson, addPerson, updatePerson, deletePerson };