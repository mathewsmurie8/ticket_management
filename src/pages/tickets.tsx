import React from 'react';
import axios from "axios";
import VeridoScaffold from '@/src/components/Scaffold';
import { GetServerSideProps } from 'next';
import { BASE_URL } from "@/src/utils/constants";
import { fetchData } from '@/api';

interface Ticket {
  id: number;
  title: string;
  status: string | null;
  ticket_type: string | null;
  description: string | null;
}

interface VeridoTicketsProps {
  tickets: Ticket[];
}

export const getServerSideProps: GetServerSideProps = async () => {
    const tickets = await await fetchData('tickets');
    console.log(tickets);

    if (!tickets || !Array.isArray(tickets)) {
        return {
        notFound: true,
        };
    }

    return {
        props: { tickets },
    };
    };

    const VeridoTickets: React.FC<VeridoTicketsProps> = ({ tickets }) => {
    return (
        <VeridoScaffold>
            <div className="px-4 sm:px-6 lg:px-8 py-10 bg-white">
            <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
                <h1 className="text-base font-semibold leading-6 text-gray-900">Tickets</h1>
                <p className="mt-2 text-sm text-gray-700">
                A list of all the tickets
                </p>
            </div>
            </div>
            <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <table className="min-w-full divide-y divide-gray-300">
                    <thead>
                    <tr>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        #
                        </th>
                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                        Title
                        </th>
                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                        Status
                        </th>
                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                        Ticket Type
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        Description
                        </th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                    {Array.isArray(tickets) && tickets.map((ticket) => (
                        <tr>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                            {ticket.id}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{ticket.title ?? 'N/A'}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{ticket.status ?? 'N/A'}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{ticket.ticket_type ?? 'N/A'}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{ticket.description}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            </div>
            </div>
        </div>
        </VeridoScaffold>
    );
    };

export default VeridoTickets;
