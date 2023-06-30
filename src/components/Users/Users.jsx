import { useState } from 'react';
import styles from './Users.module.css'
import usersJson from '../../assets/users/users.json'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';





const Users = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    setUsers(usersJson)
  }, [])

  const [value, setValue] = useState('')

  const filtredUsers = usersJson.filter(usersJson => {
    return usersJson.name.toLowerCase().includes(value.toLowerCase())
  })

  return (
    <div className={styles.container}>
      <div className={styles.container__search_input}>
          <input 
          className={styles.search__input} 
          type="text" 
          placeholder='Search'
          onChange={(Event) => setValue(Event.target.value)}
          />
      </div>

      <div className={styles.container__users}>
        {
        filtredUsers.map(user => {
            return (

                <div className={styles.card}>

                  <div className={styles.container_card}>

                    <div className={styles.card__user_img}></div>

                    <div className={styles.card__user_info}>
                      <div className={styles.username_container}>
                        <p className={styles.user__name}>{ user.username }</p>
                        <p className={styles.user__city}>{ user.address.city } <p>(city)</p></p>
                      </div>
                      <p className={styles.user__phone}>{ user.phone }</p>
                    </div>
                  </div>

                  <Link to="/edit">
                    <div className={styles.card__edit} onClick={() => {
                      localStorage.setItem('userId',user.id-1)
                    }}>
                        <img src="./src/assets/icon/edit icon.png" alt="" />
                    </div>
                  </Link>

                </div>
            );
          })
        }
      </div>
    </div>
  )
}

export default Users