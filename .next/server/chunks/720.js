"use strict";
exports.id = 720;
exports.ids = [720];
exports.modules = {

/***/ 8720:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1185);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2135);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_components_SideNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7669);
/* harmony import */ var _src_components_TopNav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7641);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__, _src_components_TopNav__WEBPACK_IMPORTED_MODULE_5__]);
([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__, _src_components_TopNav__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const VeridoScaffold = ({ children  })=>{
    const [sidebarOpen, setSidebarOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Root, {
                    show: sidebarOpen,
                    as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Dialog, {
                        as: "div",
                        className: "relative z-50 lg:hidden",
                        onClose: setSidebarOpen,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Child, {
                                as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                                enter: "transition-opacity ease-linear duration-300",
                                enterFrom: "opacity-0",
                                enterTo: "opacity-100",
                                leave: "transition-opacity ease-linear duration-300",
                                leaveFrom: "opacity-100",
                                leaveTo: "opacity-0",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "fixed inset-0 bg-gray-900/80"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "fixed inset-0 flex",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Child, {
                                    as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                                    enter: "transition ease-in-out duration-300 transform",
                                    enterFrom: "-translate-x-full",
                                    enterTo: "translate-x-0",
                                    leave: "transition ease-in-out duration-300 transform",
                                    leaveFrom: "translate-x-0",
                                    leaveTo: "-translate-x-full",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Dialog.Panel, {
                                        className: "relative mr-16 flex w-full max-w-xs flex-1",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Child, {
                                                as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                                                enter: "ease-in-out duration-300",
                                                enterFrom: "opacity-0",
                                                enterTo: "opacity-100",
                                                leave: "ease-in-out duration-300",
                                                leaveFrom: "opacity-100",
                                                leaveTo: "opacity-0",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "absolute left-full top-0 flex w-16 justify-center pt-5",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                        type: "button",
                                                        className: "-m-2.5 p-2.5",
                                                        onClick: ()=>setSidebarOpen(false),
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "sr-only",
                                                                children: "Close sidebar"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__.XMarkIcon, {
                                                                className: "h-6 w-6 text-white",
                                                                "aria-hidden": "true"
                                                            })
                                                        ]
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_SideNav__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4 border-r",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_SideNav__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "lg:pl-72",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_TopNav__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            setSidebarOpen: setSidebarOpen
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                            className: "py-8",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "px-4 sm:px-6 lg:px-8",
                                children: children
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VeridoScaffold);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7669:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2135);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7023);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);







const navigation = [
    {
        name: "Dashboard",
        href: "/dashboard",
        icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.HomeIcon,
        current: true
    },
    {
        name: "Tickets",
        href: "/tickets",
        icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.DocumentDuplicateIcon,
        current: false
    },
    {
        name: "Users",
        href: "/users",
        icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.UsersIcon,
        current: false
    }
];
const otherLinks = [
    {
        id: 1,
        name: "Account Management",
        href: "http://localhost:8000/admin",
        initial: "A",
        current: false
    }
];
const SideNav = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const [userId, setUserId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Perform localStorage action
        const data = (0,_src_utils_utils__WEBPACK_IMPORTED_MODULE_6__/* .getUserData */ .is)();
        if (data) {
            setUserId(data.userid.toString());
        }
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex h-16 shrink-0 items-center justify-start",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "h-8 w-36",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                        className: "h-8",
                        src: "/verido_logo.svg",
                        alt: ""
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                className: "flex flex-1 flex-col",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                    role: "list",
                    className: "flex flex-1 flex-col gap-y-7",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                role: "list",
                                className: "-mx-2 space-y-1",
                                children: navigation.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                            href: item.href === "/dashboard" ? `${item.href}/` : item.href,
                                            className: (0,_src_utils_utils__WEBPACK_IMPORTED_MODULE_6__/* .classNames */ .AK)(item.href === router.pathname ? "bg-[#08a730]/[.1] text-[#08a730]" : "text-[#636e72] hover:text-white hover:bg-[#08a730]", "group flex gap-x-3 rounded-md p-4 text-sm leading-6"),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(item.icon, {
                                                    className: (0,_src_utils_utils__WEBPACK_IMPORTED_MODULE_6__/* .classNames */ .AK)(item.href === router.pathname ? "text-[#08a730]" : "text-[#636e72] group-hover:text-white", "h-6 w-6 shrink-0"),
                                                    "aria-hidden": "true"
                                                }),
                                                item.name
                                            ]
                                        })
                                    }, item.name))
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "text-xs font-semibold leading-6 text-black",
                                    children: "Other links"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                    role: "list",
                                    className: "-mx-2 mt-2 space-y-1",
                                    children: otherLinks.map((link)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                href: link.href,
                                                target: link.href.includes("admin") ? "_blank" : "_self",
                                                className: (0,_src_utils_utils__WEBPACK_IMPORTED_MODULE_6__/* .classNames */ .AK)(link.current ? "bg-[#08a730]/[.4] text-white" : "text-[#08a730]/[.7] hover:text-white hover:bg-[#08a730]", "group flex gap-x-3 rounded-md p-2 text-sm leading-6"),
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border bg-[#08a730] text-[0.625rem] font-medium text-white",
                                                        children: link.initial
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "truncate",
                                                        children: link.name
                                                    })
                                                ]
                                            })
                                        }, link.name))
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: "mt-auto",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                href: "/",
                                className: "group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-[red] hover:bg-[red] hover:text-white",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__.ArrowLeftOnRectangleIcon, {
                                        className: "h-6 w-6 shrink-0 text-[red] group-hover:text-white",
                                        "aria-hidden": "true"
                                    }),
                                    "Logout"
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SideNav);


/***/ }),

/***/ 7641:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1185);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2135);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9476);
/* harmony import */ var _heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7023);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const userNavigation = [
    {
        name: "Sign out",
        href: "/"
    }
];
const TopNav = ({ setSidebarOpen  })=>{
    const today = new Date();
    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Perform localStorage action
        const data = (0,_src_utils_utils__WEBPACK_IMPORTED_MODULE_5__/* .getUserData */ .is)();
        if (data) {
            setName(data.username);
        }
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                type: "button",
                className: "-m-2.5 p-2.5 text-gray-700 lg:hidden",
                onClick: ()=>setSidebarOpen(true),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "sr-only",
                        children: "Open sidebar"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__.Bars3Icon, {
                        className: "h-6 w-6",
                        "aria-hidden": "true"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "h-6 w-px bg-gray-900/10 lg:hidden",
                "aria-hidden": "true"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex justify-between flex-1 gap-x-4 self-stretch lg:gap-x-6",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center gap-x-4 lg:gap-x-6",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                type: "button",
                                className: "-m-2.5 p-2.5 text-gray-400 hover:text-gray-500",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "sr-only",
                                        children: "Date"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-sm",
                                        children: today.toDateString()
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10",
                                "aria-hidden": "true"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Menu, {
                                as: "div",
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Button, {
                                        className: "-m-1.5 flex items-center p-1.5",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "sr-only",
                                                children: "Open user menu"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "h-8 w-8 rounded-full p-1 bg-gray-200",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__.UserIcon, {
                                                    className: "text-[#08a730]"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "hidden lg:flex lg:items-center",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "ml-4 text-sm font-semibold leading-6 text-gray-900",
                                                        "aria-hidden": "true",
                                                        children: name
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_4__.ChevronDownIcon, {
                                                        className: "ml-2 h-5 w-5 text-gray-400",
                                                        "aria-hidden": "true"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition, {
                                        as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                                        enter: "transition ease-out duration-100",
                                        enterFrom: "transform opacity-0 scale-95",
                                        enterTo: "transform opacity-100 scale-100",
                                        leave: "transition ease-in duration-75",
                                        leaveFrom: "transform opacity-100 scale-100",
                                        leaveTo: "transform opacity-0 scale-95",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Items, {
                                            className: "absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none",
                                            children: userNavigation.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
                                                    children: ({ active  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: item.href,
                                                            className: (0,_src_utils_utils__WEBPACK_IMPORTED_MODULE_5__/* .classNames */ .AK)(active ? "bg-gray-50" : "", "block px-3 py-1 text-sm leading-6 text-gray-900"),
                                                            children: item.name
                                                        })
                                                }, item.name))
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TopNav);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7023:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AK": () => (/* binding */ classNames),
/* harmony export */   "P$": () => (/* binding */ persistUserData),
/* harmony export */   "is": () => (/* binding */ getUserData)
/* harmony export */ });
/* unused harmony export clearUserData */
function persistUserData(data) {
    localStorage.setItem("userData", JSON.stringify(data));
}
function getUserData() {
    const data = localStorage.getItem("userData");
    if (data) {
        return JSON.parse(data);
    }
    return undefined;
}
function clearUserData() {
    return localStorage.removeItem("userData");
}
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}


/***/ })

};
;