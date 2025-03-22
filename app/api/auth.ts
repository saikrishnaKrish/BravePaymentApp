// auth.ts

interface User {
    username: string;
    email: string;
    password: string;
  }
  
  const users: User[] = [{
    username:"Sai",
    email:"sai@gmail.com",
    password:"1234"
  }];
  
  export const signup = async (username: string, email: string, password: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      const existingUser = users.find(user => user.username === username);
      if (existingUser) {
        reject('User already exists');
      } else {
        users.push({ username, email, password });
        resolve('Signup successful');
      }
    });
  };
  
  export const login = (username: string, password: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      const user = users.find(user => user.username === username && user.password === password);
      if (user) {
        resolve('Login successful');
      } else {
        reject('Invalid username or password');
      }
    });
  };
  
  export const getUsers = () => users;
  
  


//   const API_URL = 'https://api.example.com';

// export const signup = async (username: string, email: string, password: string): Promise<string> => {
//   try {
//     const response = await fetch(`${API_URL}/signup`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ username, email, password })
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.message || 'Signup failed');
//     }

//     return 'Signup successful';
//   } catch (error: any) {
//     throw new Error(error.message);
//   }
// };

// export const login = async (username: string, password: string): Promise<string> => {
//   try {
//     const response = await fetch(`${API_URL}/login`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ username, password })
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.message || 'Login failed');
//     }

//     return 'Login successful';
//   } catch (error: any) {
//     throw new Error(error.message);
//   }
// };