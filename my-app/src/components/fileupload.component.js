import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { scanFile } from '../services/scanfile.service';
import { Form } from 'react-bootstrap';

export function FileUpload() {

    const [file, setFile] = useState();

    function submitHandler (e) {
        scanFile(localStorage.getItem('email'), file, file.name)
        .then(res => console.log(res.data));
    }

    return (
        <div className = 'grid justify-items-center'>
        <div class="w-full max-w-sm self-center p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div>
                <form onSubmit={submitHandler}>
                    <div className='grid justify-items-center'>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label>
                   </div>
                   <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Default file input example</Form.Label>
                    <Form.Control type="file" onChange={(e) => setFile(e.target.files[0])}/>
                    </Form.Group>
                    <p></p>
                    <div className='grid justify-items-center'>
                    <button type="submit" class="max-w-screen-x self-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Scan</button>
                    </div>
                    <div class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">Sorry to tell you, but if you're uploading this from your device, then it's probably already too late.</div>
                </form>
            </div>
        </div>
        </div>
    );
}


