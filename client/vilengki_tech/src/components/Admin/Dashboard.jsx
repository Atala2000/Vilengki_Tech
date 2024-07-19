import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// User Component
const User = ({ selectedUserEmail }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`https://api.example.com/users?email=${encodeURIComponent(selectedUserEmail)}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setUser(result);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        if (selectedUserEmail) {
            fetchUser();
        }
    }, [selectedUserEmail]);

    if (!selectedUserEmail) {
        return null;
    }

    return (
        <>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {user && (
                <div className="user__details">
                    <h1>{user.name}</h1>
                    <p>Email: {user.email}</p>
                    <p>Phone: {user.phone}</p>
                    <p>County: {user.county}</p>
                </div>
            )}
        </>
    );
};

User.propTypes = {
    selectedUserEmail: PropTypes.string.isRequired,
};

// UserList Component
const UserList = ({ onSelectUser }) => {
    const [userList, setUserList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://api.example.com/users');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setUserList(result);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    return (
        <section className="user__list">
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {userList.map((user) => (
                <div
                    key={user.email}
                    className="user__card"
                    onClick={() => onSelectUser(user.email)}
                >
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                    <p>{user.county}</p>
                </div>
            ))}
        </section>
    );
};

UserList.propTypes = {
    onSelectUser: PropTypes.func.isRequired,
};

// Dashboard Component
const Dashboard = () => {
    const [selectedUserEmail, setSelectedUserEmail] = useState(null);

    const handleBackToUserList = () => {
        setSelectedUserEmail(null);
    };

    return (
        <div>
            <h1>Dashboard</h1>
            {!selectedUserEmail ? (
                <UserList onSelectUser={setSelectedUserEmail} />
            ) : (
                <>
                    <User selectedUserEmail={selectedUserEmail} />
                    <button onClick={handleBackToUserList}>Back to User List</button>
                </>
            )}
        </div>
    );
};

export default Dashboard;
