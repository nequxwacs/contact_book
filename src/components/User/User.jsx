import styles from './User.module.css'
import usersJson from '../../assets/users/users.json'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
const User = () => {

  const user = usersJson[localStorage.getItem('userId')]

  const users = useState()

  // save
  const navigate = useNavigate();

  function save() {

    // name
    if(newName=='') {
      newName==user.username
    } else {
    user.username = newName
    }

    // phone
    if(newPhone=='') {
      newPhone==user.phone
    } else {
      user.phone = newPhone
    }

    // city
    if(newCity=='') {
      newCity==user.address.city
    } else {
      user.address.city = newCity
    }

    users.push([
      {
        name: newName,
        phone: newPhone,
        city: newCity,
      }
    ])

    // localStorage.setItem(`userName ${user.id}`, users[2][0].name)
    // localStorage.setItem(`userPhone ${user.id}`, users[2][0].phone)
    // localStorage.setItem(`userCity ${user.id}`, users[2][0].city)

    navigate("/")
  }
  
  function nSave() {
    navigate("/")
  }







  // name
  const [name, setName] = useState('')

  const clickName = () => {
    setName(`Новый: `)
  }

  
  const [newName, setNewName] = useState('')



  // phone
  const [phone, setPhone] = useState('')

  const clickPhone = () => {
    setPhone(`Новый: `)
  }
  
  const [newPhone, setNewphone] = useState('')



  // phone
  const [city, setCity] = useState('')

  const clickSity = () => {
    setCity(`Новый: `)
  }
  
  const [newCity, setNewCity] = useState('')











  return (
    <div className={styles.container}>
      
  

      <div className={styles.container__card}>

      <Link to='/'>
        <div className={styles.container__arrow}>
          <img src="./src/assets/icon/arrow.png" alt="" />
        </div>
      </Link>

        {/* name */}
        <div className={styles.containers}>

          <p className={styles.subject}>Имя</p>

          <div className={styles.flex}>
            <p className={styles.title}>Текущий:</p>
            <p>{ user.username }</p>
          </div>

          <div className={styles.flex}>
            <p>{ name }</p>

            <p>{ newName }</p>
          </div>

          <input 

          onClick={clickName}
          className={styles.card__change_input}
          type="text" 
          placeholder={user.username}

          onChange={
            (Event) => setNewName(
              Event.target.value
            )}
          />
        </div>

        
        {/* phone */}
        <div className={styles.containers}>

          <p className={styles.subject}>Номер</p>

          <div className={styles.flex}>
            <p className={styles.title}>Текущий:</p>
            <p>{ user.phone }</p>
          </div>

          <div className={styles.flex}>
            <p>{ phone }</p>
            
            <p>{ newPhone }</p>
          </div>

          <input 

          onClick={clickPhone}
          className={styles.card__change_input}
          type="text" 
          placeholder={user.phone}
            
          onChange={
            (Event) => setNewphone(
              Event.target.value
            )}
          />
        </div>


        {/* sity */}
        <div className={styles.containers}>

          <p className={styles.subject}>Город</p>

          <div className={styles.flex}>
            <p className={styles.title}>Текущий:</p>
            <p>{ user.address.city }</p>
          </div>

          <div className={styles.flex}>
            <p>{ city }</p>
            
            <p>{ newCity }</p>
          </div>

          <input 

          onClick={clickSity}
          className={styles.card__change_input}
          type="text" 
          placeholder={user.address.city}
            
          onChange={
            (Event) => setNewCity(
              Event.target.value
            )}
          />
        </div>

        <div className={styles.btn_container}>
          <button onClick={nSave} className={styles.btn}>Не сохранять</button>  
          <button onClick={save} onSubmit={save} className={styles.btn}>Сохранить</button>
        </div>
      </div>
    </div>
  )
}

export default User