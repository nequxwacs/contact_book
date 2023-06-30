import styles from './UserInfo.module.css'
import { Link } from 'react-router-dom'
import usersJson from '../../assets/users/users.json'

const UserInfo = () => {
    const user = usersJson[localStorage.getItem('userId')]
    console.log(user)

  return (
    <div className={styles.container}>
      <Link to='/'>
        <div className={styles.container__arrow}>
          <img src="./src/assets/icon/arrow.png" alt="" />
        </div>
      </Link>
    </div>
  )
}

export default UserInfo