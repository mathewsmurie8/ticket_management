import { useRouter } from "next/router";
import Image from "next/image";
import { useState, FormEvent } from "react";
import axios from "axios";
import { persistUserData } from "@/src/utils/utils";
import { BASE_URL } from "@/src/utils/constants";

const Login: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [wrongCreds, setWrongCreds] = useState<boolean>(false);

    const router = useRouter();

    const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
        setLoading(true);
        setWrongCreds(false);

        const data = {
            username: (event.target as any).email.value,
            password: (event.target as any).password.value,
        };

        const JSONdata = JSON.stringify(data);

        const response = await axios.post(`${BASE_URL}login/`, data);
        setLoading(false);
        console.log(response);

        const result = await response.data;
        console.log(result);
        if (JSON.stringify(result).includes("Incorrect credentials")) {
            setWrongCreds(true);
        } else {
            persistUserData(result);
            router.push(`/dashboard/`);
        }
        } catch (error) {
        console.log(error);
        }
    };

    return (
        <>
            <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="w-full flex justify-center mb-16">
                        <div className="h-8 w-36">
                            <Image
                                className="h-8"
                                src="/verido_logo.svg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 mb-12">Sign in to your account</h2>

                        <form className="space-y-6" method="POST" onSubmit={handleLogin}>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="text"
                                        autoComplete="email"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 rounded border-gray-300 text-[#08a730] focus:ring-[#08a730]"
                                    />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                        Remember me
                                    </label>
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-[#08a730] px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                >
                                    {loading ? 'Please wait ...' : 'Sign in'}
                                </button>
                            </div>
                            {
                                wrongCreds &&
                                <p className="text-[red] text-sm">Invalid email or password</p>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
    };

export default Login;
