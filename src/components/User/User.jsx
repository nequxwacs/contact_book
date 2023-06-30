import styles from './User.module.css'
import usersJson from '../../assets/users/users.json'
import { Link } from 'react-router-dom'

const User = () => {

  const userId = localStorage.getItem('userId')
  const user = usersJson[userId]
  console.log(user);

  return (
    <div className={styles.container}>
      
      <Link to='/'>
        <div className={styles.container__arrow}>
          <img src="./src/assets/icon/arrow.png" alt="" />
        </div>
      </Link>

      <div className={styles.container__card}>
        
      </div>
    </div>
  )
}

export default User