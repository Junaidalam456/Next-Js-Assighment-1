import Link from "next/link";
export default function Navbar(){
    return(
        
        <div>

     <header className="text-grey-600 body-font bg-yellow-400">

        <div className="container mx-auto flex flex-wrap-5 flex-col md:flex-row items-center">
        <a className="flex titlefont font-medium items-center text-grey-900 mb-4 md:mb-0">

       <img src="data:image/jpeg;base64,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"
        alt="ja logo"
        className="w-11 h-11 rounded-full"
        />
        <span className="ml-3 text-xl"> Junaid Alam</span>
        </a>

     
     <nav className="flex md:mr-20 md:ml-40 md:pl-40 md:border-1 md:border-gray-400 flex-wrap items-center text-base justify-center">

    <Link className="ml-2 mr-10 hover:text-blue-500" href="http://localhost:3000"> Home </Link>
     
     <Link className="mr-10 hover:text-red-500" href="/login"> Login </Link>
     
     <Link className="mr-10 hover:text-green-500" href="/about">About </Link>
     
     <Link className="mr-10 hover:text-yellow-700" href="/contact"> Contact </Link>
     
     </nav>

     </div>  
     </header>
       </div>
       

    )
}








        
    
