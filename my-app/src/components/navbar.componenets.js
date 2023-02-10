import { LoginForm } from "./login.component";
import { disconnect } from "../services/disconnect.service";
import { deleteProfile } from "../services/deleteprofile.service";
import "../pages/home.page/App.css"

export function Navbar() {

    const loggedIn = localStorage.getItem("AccessToken") !== null 
        && localStorage.getItem("AccessToken") !== undefined;
    console.log(loggedIn);

    return (
        <div className="Navbar">             
            <nav class=" border-gray-200 px-2 md:px-4 py-2.5 dark:bg-gray-900">
                <div class="flex flex-wrap items-center justify-between mx-auto">
                    <a href="/" class="flex items-center">
                        <img src="logox2.png" class="w-30 h-30 mr-3 sm:h-9" alt="Logo" />
                        <span class="self-center text-gray-800 text-xl font-semibold whitespace-nowrap dark:text-white">Virus Among Us</span>
                    </a>
                    <div class="flex items-center md:order-2">
                        { !loggedIn ? (<><a href="/login" class="text-white dark:text-white hover:bg-blue-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Login</a>
                        <a href="/register" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign up</a></>) : 
                        (<><a href="/" onClick={disconnect} class="text-white dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Disconnect</a>
                            <a href="/" onClick={deleteProfile} class="text-white dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Delete account</a>
                            <a href="/profile" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Profile</a>    
                        </>
                        )}
                    </div>
                    <div>
                        <ul class="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
                            {loggedIn ? (<><li>
                                <a href="/" class="block py-2 pl-3 pr-4 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="/scanUrl" class="block py-2 pl-3 pr-4 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Scan an URL</a>
                            </li>
                            <li>
                                <a href="/scanFile" class="block py-2 pl-3 pr-4 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Scan a file</a>
                            </li></>) : (<li>
                                <a href="/" class="block py-2 pl-3 pr-4 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</a>
                            </li>)}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

