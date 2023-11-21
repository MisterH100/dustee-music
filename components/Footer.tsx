import Link from "next/link"



export const Footer =()=>{
    return(
        <footer className="footer p-10 bg-blue-500">
            <aside>
                <h1 className="text-white text-5xl md:text-8xl font-bold">Dus-tee</h1>
                <p>@the_everlasting_storm</p>
                <p>thehandsomedev.com <br/>All Rights Reserved 2023</p>
            </aside> 
            <nav>
                <header className="footer-title">Social</header> 
                <div className="grid grid-flow-col gap-4">
                    <ul>
                        <li><Link href={'/'}>Instagram</Link></li>
                        <li><Link href={'/'}>YouTube</Link></li>
                        <li><Link href={'/'}>Twitter</Link></li>
                        <li><Link href={'/'}>Facebook</Link></li>
                    </ul>
                </div>
            </nav>
        </footer>
    )
}