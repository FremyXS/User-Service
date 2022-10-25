import axios from 'axios';
import IUser from '../types/IUser'

const apiClient = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/users",
    headers: {
        "Content-type": "application/json",
    },
});

const findAll = async () => {
    const response = await apiClient.get<IUser[]>("/");
    return response.data;
}

const findById = async (id: any) => {
    const response = await apiClient.get<IUser>(`/${id}`);
    return response.data;
}

const UserService = {
    findAll,
    findById,
}

export default UserService;