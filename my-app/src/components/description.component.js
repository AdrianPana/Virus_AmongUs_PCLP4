import '../pages/home.page/App.css'

export function Description() {

    const loggedIn = localStorage.getItem("AccessToken") !== null 
    && localStorage.getItem("AccessToken") !== undefined;

    return (
        <div className='Description'>
            <div class="w-full bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div id="defaultTabContent">
                    <div class="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="about" role="tabpanel" aria-labelledby="about-tab">
                        <h2 class="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Pretending to innovate through an inexistent virus scan API and a generic backend</h2>
                        <p class="mb-3 text-gray-500 dark:text-gray-400">Empowering your peers to do the same and achieve astonishing mediocre results. Use this site to pretend to scan URLs and files for anything suspicious.</p>
                        {loggedIn ? (<p></p>) : (<a href="login" class="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700">
                            Log in to get started
                            <svg class="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                        </a>)}
                    </div>
                    <div class=" p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="services" role="tabpanel" aria-labelledby="services-tab">
                        <h2 class="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">We pretend to have potential and high quality results</h2>
                        <ul role="list" class="space-y-4 text-gray-500 dark:text-gray-400">
                            <li class="flex space-x-2">
                                <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span class="font-light leading-tight">Basic REST API</span>
                            </li>
                            <li class="flex space-x-2">
                                <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span class="font-light leading-tight">Middleware.</span>
                            </li>
                            <li class="flex space-x-2">
                                <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span class="font-light leading-tight">Frontend is entirely made possible courtesy of the GigaChads from Flowbite - TailwindCSS</span>
                            </li>
                            <li class="flex space-x-2">
                                <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                <span class="font-light leading-tight">I changed some colors</span>
                            </li>
                        </ul>
                    </div>
                    <div class="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="statistics" role="tabpanel" aria-labelledby="statistics-tab">
                        <dl class="grid grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
                            <div class="flex flex-col">
                                <dt class="mb-2 text-3xl font-extrabold">1</dt>
                                <dd class="font-light text-gray-500 dark:text-gray-400">Developers (That's me)</dd>
                            </div>
                            <div class="flex flex-col">
                                <dt class="mb-2 text-3xl font-extrabold">69+</dt>
                                <dd class="font-light text-gray-500 dark:text-gray-400">Sites that have the same exact infrastructure but different frontends</dd>
                            </div>
                            <div class="flex flex-col">
                                <dt class="mb-2 text-3xl font-extrabold">1</dt>
                                <dd class="font-light text-gray-500 dark:text-gray-400">Hours slept since last night when I started development</dd>
                            </div>
                            <div class="flex flex-col">
                                <dt class="mb-2 text-3xl font-extrabold">8</dt>
                                <dd class="font-light text-gray-500 dark:text-gray-400">Pizza slices eaten so far</dd>
                            </div>
                            <div class="flex flex-col">
                                <dt class="mb-2 text-3xl font-extrabold">5</dt>
                                <dd class="font-light text-gray-500 dark:text-gray-400">Useless statistics here (total)</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
}