
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

export const Header = () => {

    return (
        <>
            <header className="App-header flex flex-dir-row flex-jt-sp">

                <a href="https://lavital.co/" className="flex">
                    <img width={130} height={80} src="https://lavital.co/wp-content/uploads/2020/09/logoBlanco.png" alt="lavital" />
                </a>

                <nav className="flex flex-dir-row">
                    <div className="flex align-i-center">
                        <a className="text-color-white">
                            Ordenes
                        </a>
                    </div>
                </nav>

                <div className="flex align-i-center">
                    <button className="btn">
                        <FontAwesomeIcon icon={faSignOutAlt} />
                    </button>
                </div>

            </header>
        </>
    );
}