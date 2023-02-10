import { useFormik } from 'formik';
import { register } from '../services/register.service';
import { useNavigate } from 'react-router-dom';

export function RegisterForm () {

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
            username: '',
            password: '',
        },
        onSubmit: values => {
            register(values.email,values.username, values.password)
            .then( res => {
                console.log(res.data);
                navigate("/");
            }).catch (err => {
                console.log("Sign in failed");
            })
        },
    });

    return(
        <div>                 
            <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form onSubmit={formik.handleSubmit} class="space-y-6" action="#">
                    <h5 class="text-xl font-medium text-gray-900 dark:text-white">Create a new account</h5>
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" onChange={formik.handleChange} value={formik.values.email} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required></input>
                    </div>
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
                        <input type="username" name="username" id="username" onChange={formik.handleChange} value={formik.values.username} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="username" required></input>
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" name="password" id="password" onChange={formik.handleChange} value={formik.values.password} placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required></input>
                    </div>
                    {/* <div class="flex items-start"> */}
                        {/* <a href="#" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                    </div> */}
                    <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create account</button>
                    <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Already have an account? <a href="/login" class="text-blue-700 hover:underline dark:text-blue-500">Log in</a>
                    </div>
                </form>
            </div>
        </div>
    );
}