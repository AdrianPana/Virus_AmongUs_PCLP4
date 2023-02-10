import { renderFiles } from '../services/profile.service';
import { useState, useEffect } from 'react';

export function FilesDisplay () {

    const [files, setFiles] = useState([])

    useEffect(() => {
        async function getFiles() {
          const filesArr = await renderFiles(localStorage.getItem("email"))
          setFiles(filesArr);
      }
      getFiles()
    }, [])
    
      const fileList = files.map( (file) => {
        console.log(file);
        <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">{file.name}</li>
        });

      return (
        <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className='grid justify-items-center'>
            <label for="url" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Uploaded Files</label>
            <ul class="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                {fileList}
            </ul>
        </div>
        </div>
      )
}