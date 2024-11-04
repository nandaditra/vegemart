import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fa2 } from '@fortawesome/free-solid-svg-icons'

export default function Footer(){
    return (
        <footer className="bg-green-black">
            <div>
                <ul>
                    <li><FontAwesomeIcon icon={fa2} className="fa-brands fa-facebook" /></li>
                </ul>
            </div>
        </footer>
    )
}