import { useState } from "react";
import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

function UsersDashboard() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const queryClient = useQueryClient();

  // 🚀 دریافت لیست کاربران از API
  const { data: users, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      return response.data;
    },
  });

  // 🚀 افزودن کاربر جدید
  const addUserMutation = useMutation({
    mutationFn: async (newUser) => {
      const response = await axios.post("https://jsonplaceholder.typicode.com/users", newUser);
      return response.data;
    },
    onSuccess: (newUser) => {
      queryClient.setQueryData(["users"], (oldUsers) => [...oldUsers, newUser]);
      setName("");
      setEmail("");
      alert("User added successfully!");
    },
  });

  // 🚀 حذف کاربر
  const deleteUserMutation = useMutation({
    mutationFn: async (id) => {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      return id;
    },
    onSuccess: (id) => {
      queryClient.setQueryData(["users"], (oldUsers) => oldUsers.filter((user) => user.id !== id));
      alert("User deleted successfully!");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      addUserMutation.mutate({ id: Date.now(), name, email });
    }
  };

  const handleDelete = (id) => {
    deleteUserMutation.mutate(id);
  };

  return (
    <div>
      <h2>Users Dashboard</h2>

      {/* 🚀 فرم افزودن کاربر */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          required
        />
        <button type="submit">Add User</button>
      </form>

      {/* 🚀 نمایش لیست کاربران */}
      <h3>Users List</h3>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error fetching users</p>}
      <ul>
        {users?.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersDashboard;
