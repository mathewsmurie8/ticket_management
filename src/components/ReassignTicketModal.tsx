

import { FormEvent, Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { PencilIcon } from '@heroicons/react/24/outline'
import { CreateTicketForm, Ticket } from '../types/types';
import { BASE_URL } from '../utils/constants';
import { useUser } from '../hooks/hooks';

export default function ReassignTicketModal({ setOpen, updateticket, ticket }: { setOpen: Function, updateticket: Function, ticket: Ticket }) {

    const [loading, setLoading] = useState(false);

    const [users, setUsers] = useState([]);
    const user = useUser('login/');

    const fetchUsers = async () => {
        const response = await fetch(`${BASE_URL}users/`, {
            method: 'GET'
        });

        const usersList = await response.json();
        setUsers(usersList);
    }
    
    useEffect(() => {
        fetchUsers();
    }, [])

    const assignTicket = async (e: FormEvent<CreateTicketForm>) => {
        e.preventDefault();
        try {
            setLoading(true);

            const form = e.currentTarget.elements;

            const data = {
                id: ticket.id,
                assigned_user: form.assigned_user.value,
                user: user?.userid
            }

            // Send the data to the server in JSON format.
            const JSONdata = JSON.stringify(data)

            const response = await fetch(`${BASE_URL}tickets/${data.id}/`, {
                method: 'PUT',
                body: JSONdata,
                headers: {
                    "Content-Type": "application/json",
                }
            });
            setLoading(false);

            // Get the response data from server as JSON.
            const result = await response.json();
            ticket.assigned_user = result.assigned_user
            updateticket(ticket);

            setOpen(false);

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Fragment>
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                            <div>
                                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                                    <PencilIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                                </div>
                                <div className="mt-3 text-center sm:mt-5">
                                    <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                        Assign Ticket
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            Select a user below to reassign ticket to
                                        </p>
                                    </div>

                                    <form className="space-y-6" onSubmit={assignTicket}>

                                        <div className='flex flex-col items-start mt-4'>
                                            <label htmlFor="assigned_user" className="block text-sm font-medium leading-6 text-gray-900">
                                                Assignee
                                            </label>
                                            <div className="mt-2 w-full">
                                                <select name="assigned_user" id="assigned_user" className='block border w-full px-4 rounded-md py-1.5 text-gray-900 shadow-sm  sm:text-sm sm:leading-6'>
                                                    <option>Select user to assign to</option>
                                                    {users.map((user: any) => (
                                                        <option key={user.toString()} value={user.id}>{user.username}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <button
                                                type="submit"
                                                className="flex w-full justify-center rounded-md bg-[#08a730] px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                            >
                                                {loading ? 'Please wait ...' : 'Create Ticket'}
                                            </button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </div>
        </Fragment>
    )
}
