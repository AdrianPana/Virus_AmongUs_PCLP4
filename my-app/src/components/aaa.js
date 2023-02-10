import { LoginForm } from "./login.component";
import { disconnect } from "../services/disconnect.service";

export function Navbar() {

    const loggedIn = localStorage.getItem("AccessToken") !== null 
        && localStorage.getItem("AccessToken") !== undefined;
    console.log(loggedIn);

    return (
        <div className="Navbar">
            <nav class="bg-white border-gray-200 dark:bg-gray-900">
                <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
                    <a href="/" class="flex items-center">
                        <img src="logo.png" class="h-6 mr-3 sm:h-9" alt="Logo" />
                        <span class="self-center text-black font-semibold whitespace-nowrap dark:text-white">Virus Among Us</span>
                    </a>
                    <div class="flex items-center space-x-8">
                        {!loggedIn ? (<>
                        <a href="register" class="text-sm font-medium text-black-600 dark:text-blue-500 hover:underline">Register</a>
                        <a href="login" class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">Login</a> </>) : 
                        (<> <a href="/" onClick={disconnect} class="text-sm font-medium text-white-600 dark:text-white-500 hover:underline">Disconnect</a>
                        <a href="/profile" class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">Profile</a></>)}
                    </div>
                </div>
            </nav>
            <nav class="bg-gray-700 dark:bg-gray-700">
                <div class="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
                    <div class="flex items-center">
                        <ul class="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                            {loggedIn ? (<><li>
                                <a href="/" class="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="/scanUrl" class="text-gray-900 dark:text-white hover:underline">Scan an URL</a>
                            </li>
                            <li>
                                <a href="/scanFile" class="text-gray-900 dark:text-white hover:underline">Scan a file</a>
                            </li></>) : (<><li>
                                <a href="/" class="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</a>
                            </li></>)}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

