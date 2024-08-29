import React, { useState } from "react"
import "./App.css"

const App = () => {
  const [users, setUsers] = useState([])
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")

  const handleRegister = () => {
    const trimUsername = username.trim()
    const trimPassword = password.trim()
    const trimConfirmPassword = confirmPassword.trim()

    if (!trimUsername || !trimPassword || !trimConfirmPassword) {
      setError("Заполните все поля!")
      return
    }

    if (trimPassword !== trimConfirmPassword) {
      setError("Пароли не совпадают!")
      return
    }

    const isUserExists = users.some((user) => user.username === trimUsername)
    if (isUserExists) {
      setError("Пользователь с таким именем уже зарегистрирован!")
      return
    }

    const newUser = { username: trimUsername, password: trimPassword }
    setUsers([...users, newUser])
    setError("")
    setUsername("")
    setPassword("")
    setConfirmPassword("")
  };



  return (
    <div className="container">
      <h2>Регистрация</h2>
      {error && <p className="error-message">{error}</p>}
      <input
        type="text"
        placeholder="Ник пользователя"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Подтверждение пароля"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Зарегистрироваться</button>

      <div className="registered-users">
        <h3>Зарегистрированные пользователи:</h3>
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user.username}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
