import Link from "next/link";

const NavbarComponent = () => {
    return (
        <div>
            <ul className="flex gap-x-5 text-center mb-10">
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/dashboard'>Dashboard</Link>
                </li>
                <li>
                    <Link href='/dashboard/setting'>Setting</Link>
                </li>
            </ul>
        </div>
    )
} 

export default NavbarComponent;