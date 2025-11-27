import type { ReactNode } from "react"
import logo from "../../assets/logo.jpg" 
import { User } from "iconoir-react"
import { Link } from "react-router-dom"
import { routesPath } from "../../utils/Routes"

export default function MainLayout({children}: {children: ReactNode}) {
  return (
    <main className="w-full h-screen flex">
        <section className="w-1/4 p-5">
            <div className="">
                <img className="w-46 h-26" src={logo} alt="" />
            </div>
            <div>
                <nav>
                <ul>
                    <li>
                        <Link to={routesPath.USERS} >
                            Dahsbaord
                        </Link>
                    </li>
                    <li>Administracion</li>
                    <li>Reportes</li>
                </ul>
            </nav>
            </div>
        </section>
        <section className="w-4/5">
            <header className="flex w-full justify-between items-center p-3">
                <button>--</button>
                <button className="bg-blue-400 text-white p-2 rounded-sm cursor-pointer flex">
                    <User
                        color="ffff"
                    /> Mi perfil
                </button>
            </header>
            <div>
                {children}
            </div>
        </section>
    </main>
  )
}
