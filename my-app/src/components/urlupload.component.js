import { useFormik } from 'formik';
import { scanUrl } from '../services/scanurl.service';

export function URLUpload() {

    const formik = useFormik({
        initialValues: {
            email: localStorage.getItem('email'),
            url: ''
        },
        onSubmit: values => {
            scanUrl(values.email, values.url)
            .then( res => {
                console.log(res.data);
            }).catch (err => {
                console.log("URL scan failed");
            })
        },
    });

    return (
        <div className = 'grid justify-items-center'>
        <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form onSubmit={formik.handleSubmit}>
            <div className='grid justify-items-center'>
                <label for="url" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type URL to scan</label>
            </div>
            <div className='grid justify-items-center'>
                <input type="url" id="url" onChange={formik.handleChange} value={formik.values.url} aria-describedby="helper-text-explanation" class="self-center w-47 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="http://localhost:8080"></input>
            </div>
                <p></p>
                <div className='grid justify-items-center'>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Scan</button>
                <p id="helper-text-explanation" class="mt-2 text-sm text-gray-500 dark:text-gray-400">We’ll never share your details. Because that would be mean. And because you could sue us.</p>
                </div>

            </form>
        </div>
        </div>
    );
}
