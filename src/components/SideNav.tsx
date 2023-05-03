import { Fragment, useState, useEffect, FC } from "react";
import {
    HomeIcon,
    UsersIcon,
    DocumentDuplicateIcon,
    ArrowLeftOnRectangleIcon
} from '@heroicons/react/24/outline';
import { classNames, getUserData } from '@/src/utils/utils';
import { useRouter } from 'next/router';
import Image from "next/image";
import Link from "next/link";


interface NavItem {
    name: string;
    href: string;
    icon: React.ElementType; // Change this line
    current: boolean;
}

const navigation: NavItem[] = [
    { name: 'Dashboard', href: '/dashboard', icon: HomeIcon, current: true },
    { name: 'Tickets', href: '/tickets', icon: DocumentDuplicateIcon, current: false },
    { name: 'Users', href: '/users', icon: UsersIcon, current: false },
];

const otherLinks = [
    { id: 1, name: 'Account Management', href: 'http://localhost:8000/admin', initial: 'A', current: false },
];

const SideNav: FC = () => {
    const router = useRouter();
    const [userId, setUserId] = useState<string>('');

    useEffect(() => {
        // Perform localStorage action
        const data = getUserData();
        if (data) {
            setUserId(data.userid.toString());
        }
    }, []);

    return (
        <Fragment>
            <div className="flex h-16 shrink-0 items-center justify-start">
                <div className="h-8 w-36">
                    <Image
                        className="h-8"
                        src="/verido_logo.svg"
                        alt=""
                    />
                </div>
            </div>
            <nav className="flex flex-1 flex-col">
                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                        <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href === '/dashboard' ? `${item.href}/` : item.href}
                                        className={classNames(
                                            item.href === router.pathname
                                                ? 'bg-[#08a730]/[.1] text-[#08a730]'
                                                : 'text-[#636e72] hover:text-white hover:bg-[#08a730]',
                                            'group flex gap-x-3 rounded-md p-4 text-sm leading-6'
                                        )}
                                    >
                                        <item.icon
                                            className={classNames(
                                                item.href === router.pathname ? 'text-[#08a730]' : 'text-[#636e72] group-hover:text-white',
                                                'h-6 w-6 shrink-0'
                                            )}
                                            aria-hidden="true"
                                        />
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li>
                        <div className="text-xs font-semibold leading-6 text-black">Other links</div>
                        <ul role="list" className="-mx-2 mt-2 space-y-1">
                            {otherLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        target={link.href.includes('admin') ? '_blank' : '_self'}
                                        className={classNames(
                                            link.current
                                                ? 'bg-[#08a730]/[.4] text-white'
                                                : 'text-[#08a730]/[.7] hover:text-white hover:bg-[#08a730]',
                                            'group flex gap-x-3 rounded-md p-2 text-sm leading-6'
                                        )}
                                    >
                                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border bg-[#08a730] text-[0.625rem] font-medium text-white">
                                            {link.initial}
                                        </span>
                                        <span className="truncate">{link.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li className="mt-auto">
                        <Link
                            href="/"
                            className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-[red] hover:bg-[red] hover:text-white"
                        >
                            <ArrowLeftOnRectangleIcon
                                className="h-6 w-6 shrink-0 text-[red] group-hover:text-white"
                                aria-hidden="true"
                            />
                            Logout
                        </Link>
                    </li>
                </ul>
            </nav>
        </Fragment>
    )
}

export default SideNav;
