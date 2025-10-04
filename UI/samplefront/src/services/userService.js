// userService.js
import api from "../core/axios";
import addresses from "../core/addresses";

const userService = { 
    getAll: async () => {
        const response = await api.get(addresses);
        return response.data;
    },
     
    getById: async (id) => {
        const response = await api.get(addresses.getById, );
        return response.data;
    },
     
    getAllByFilter: async (userData) => {
        const response = await api.get(addresses.GetAllUsersByFilter, userData);
        return response.data;
    },
     
    add: async (userData) => { 
        const response = await api.post(addresses.AddUser, userData);
        return response.data;
    },

    update: async (id, userData) => {
        const response = await api.put(addresses.UpdateUser, userData);
        return response.data;
    },
      
    delete: async (id) => {
        const response = await api.delete(addresses.DeleteUser , id);
        return response.data;
    },
};

export default userService;