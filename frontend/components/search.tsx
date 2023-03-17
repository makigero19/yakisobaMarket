import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function () {
    return <div className={styles.search}>
        <form action="" method="post">
            <input type="search" name="search" id="input-search" />
            <button>
                <FontAwesomeIcon icon={faSearch} />
            </button>
        </form>
    </div>
}
