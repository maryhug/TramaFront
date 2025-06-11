import axios from 'axios';

const API_URL = 'https://tramaback-api.up.railway.app/trama';

const register = (name, email, password) => {
    return axios.post(`${API_URL}/users/save`, {
        name,
        email,
        passwordHash: password,
        role: 'USER',
        isActive: true,
    });
};

const login = async (email, password) => {
    const response = await axios.post(`${API_URL}/auth/login`, { email, password });
    if (response.data.token) {
        let userId = response.data.id;
        let name = response.data.name;
        let emailResp = response.data.email;

        if (!userId) {
            const userInfo = await axios.get(`${API_URL}/users/email/${emailResp}`, {
                headers: { Authorization: `Bearer ${response.data.token}` }
            });
            userId = userInfo.data.id;
            name = userInfo.data.name;
            emailResp = userInfo.data.email;
        }

        const userData = {
            token: response.data.token,
            user: {
                id: userId,
                name: name,
                email: emailResp,
            }
        };
        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('userId', String(userId));
        // Elimina claves sueltas si existen
        localStorage.removeItem('token');
        localStorage.removeItem('id');
        localStorage.removeItem('name');
        localStorage.removeItem('email');
    }
    return response.data;
};

const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('userId');
};

const getCurrentUser = () => {
    try {
        const userStr = localStorage.getItem('user');
        if (userStr) {
            return JSON.parse(userStr);
        }
        return null;
    } catch (error) {
        console.error("Error parsing user from localStorage", error);
        localStorage.removeItem('user');
        return null;
    }
};

const authService = {
    register,
    login,
    logout,
    getCurrentUser,
};

export default authService;