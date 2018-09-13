
import axios from 'axios'


const TENANT_URL = (process.env.NODE_ENV !== 'development')? '/tenant': '//localhost:3000/tenant';

// function query() {
//     console.log('query in service front');
//     // console.log('criteria in query', criteria);
//     // var queryParams = `?name=${criteria.name}&type=${criteria.type}`;
//     return axios.get(TENANT_URL)
//         .then(res => {
//             console.log('res.data back from server in service front', res.data);
//             return res.data})
// }
function query(criteria = {name: '', type: ''}) {
    console.log('criteria in query', criteria);
    var queryParams = `?name=${criteria.name}&type=${criteria.type}`;
    return axios.get(TENANT_URL + queryParams)
        .then(res => {
                console.log('res.data back from server in service front', res.data);
                return res.data})
}

export default {
    query,
    getTenantById,
    removeTenant,
    saveTenant,
    createEmptyTenant,
}

function removeTenant(tenantId) {
    return axios.delete(`${TENANT_URL}/${tenantId}`)
        .then(res => res.data)
}

function getTenantById(tenantId) {
    // console.log('gettenantById in tenant service front', tenantId);
    return axios.get(`${TENANT_URL}/${tenantId}`)
        .then(res => {
            // console.log('gettenantById from server', res.data)
            return res.data
        })
        .catch(err => console.log('Problem talking to server', err))
}

function saveTenant(tenant) {
    // console.log('upadte tenant in fron service', tenant)
    if (tenant._id) {
        // update
        return axios.put(`${TENANT_URL}/${tenant._id}`, tenant)
            .then(res => res.data)
            .catch(err => console.log('Problem talking to server', err))
    
    } else {
        //add new
        return axios.post(`${TENANT_URL}`, tenant)
            .then(res => {
                return res.data
            })
            .catch(err => console.log('Problem talking to server', err))
    }
}


function createEmptyTenant(userId) {
    var tenant = {
            name: '',
            phoneNumber: '',
            address: '',
            debtAmount: '',
    }
    return tenant;
}

