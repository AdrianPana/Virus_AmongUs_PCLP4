import { renderURLs } from '../services/profile.service';
import { useState, useEffect } from 'react';

export function UrlsDisplay () {

    const [urls, setUrls] = useState([])

    useEffect(() => {
        async function getUrls() {
          const urlsArr = await renderURLs(localStorage.getItem("email"))
          setUrls(urlsArr);
      }
      getUrls()
    }, [])
    
      const urlList = urls.map( (url) => 
        <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">{url.addr}</li>
      );

      return (
        <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className='grid justify-items-center'>
            <label for="url" class="block mb-2 text-3xl px-2 text-gray-900 dark:text-white">Your profile</label>       
        </div>
        <div className='grid justify-items-center'>
            <label for="url" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Uploaded URLs</label>
            <ul class="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                {urlList}
            </ul>
        </div>
        </div>
      )
}