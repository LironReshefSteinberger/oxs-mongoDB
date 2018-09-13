import Vue from 'vue'
import Vuex from 'vuex'
import TenantService from './services/TenantService.js'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tenantsLoading: false,
        tenants: [],
        tenant: null,
        filterBy: {
            name: '',
            type: 'all',
        },
    },
    mutations: {
        setTenantsLoading(state, { isLoading }) {
            state.tenantsLoading = isLoading;
        },
        setTenants(state, { tenants }) {
            state.tenants = tenants;
        },
        setTenant(state, { tenant }) {
            state.tenant = tenant;
        },
        removeTenant(state, { tenantId }) {
            state.tenants = state.tenants.filter(tenant => tenant._id !== tenantId)
        },
        saveTenant(state, { tenant }) {
            // console.log('mutation saveTenant', tenant);
            let foundTenantIdx = -1;
            foundTenantIdx = state.tenants.findIndex(searchTenant => searchTenant._id === tenant._id);
            if (foundTenantIdx !== -1) state.tenants.splice(foundTenantIdx, 1, tenant);
            else state.tenants.push(tenant);
        },
        tenantsByFilterServer(state, { tenants }) {
            // console.log('mutation tenantsByFilterServer', tenants);
            state.tenants = tenants;
        },
        setFilter(state, { filterBy }) {
            // console.log('mutation setFilter', filterBy);
            state.filterBy = filterBy;
            // console.log('mutation setFilter state.filterBy', state.filterBy);
        },
    },
    getters: {
        tenantsByFilterServer(state) {
            // console.log('stateTenants', state.tenants);
            return state.tenants
        },
        setFilter(state) {
            // console.log('stateTenants', state.tenants);
            return state.filterBy;
        },
        tenantForDisplay(state) {
            // console.log('stateTenant', state.tenant);
            return state.tenant
        },
        tenantsLoading(state) {
            return state.tenantsLoading
        },
        allTenants(state) {
            return state.tenants
        }
    },
    actions: {
        loadTenants(context) {
            console.log('loadTenants in actions');
            context.commit({ type: 'setTenantsLoading', isLoading: true })
            return TenantService.query()
                .then(tenants => {
                    console.log('tenants in actions back fron server', tenants);
                    context.commit({ type: 'setTenants', tenants })
                    return tenants;
                })
                .finally(() => {
                    context.commit({ type: 'setTenantsLoading', isLoading: false })
                })
        },
        loadTenant(context, { tenantId }) {
            context.commit({ type: 'setTenantsLoading', isLoading: true })
            // console.log('route, tenantId', { tenantId });
            return TenantService.getTenantById(tenantId)
                .then((tenant) => {
                    context.commit({ type: 'setTenant', tenant })
                    return tenant;
                })
                .finally(() => {
                    context.commit({ type: 'setTenantsLoading', isLoading: false });
                })
        },
        removeTenant(context, { tenantId }) {
            return TenantService.removeTenant(tenantId)
                .then(() => {
                    // console.log('remove after tenant service');
                    context.commit({ type: 'removeTenant', tenantId })
                })
        },
        saveTenant(context, { savedTenant }) {
            console.log('newtenant in action', savedTenant)
            return TenantService.saveTenant(savedTenant)
                .then((tenant) => {
                    console.log('savetenant in store', tenant);
                    context.commit({ type: 'saveTenant', tenant })
                    return tenant;
                })
        },
        setFilter(context, { filterBy }) {
            context.commit({ type: 'setTenantsLoading', isLoading: true })
            context.commit({ type: 'setFilter', filterBy })
            console.log('setFilter in store: filterBy', filterBy)
            return TenantService.query(filterBy)
                .then((tenants) => {
                    console.log('users from server after sentFilter in store', tenants);
                    context.commit({ type: 'tenantsByFilterServer', tenants })
                })
                .finally(() => {
                    context.commit({ type: 'setTenantsLoading', isLoading: false });
                })
        },
    }
})






