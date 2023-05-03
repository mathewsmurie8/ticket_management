"use strict";
(() => {
var exports = {};
exports.id = 26;
exports.ids = [26];
exports.modules = {

/***/ 9966:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CreateTicketModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1185);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2135);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6725);
/* harmony import */ var _hooks_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2479);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function CreateTicketModal({ setOpen , addTicket  }) {
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const user = (0,_hooks_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useUser */ .a)("login/");
    const createTicket = async (e)=>{
        e.preventDefault();
        try {
            setLoading(true);
            // Get data from the form.
            const form = e.currentTarget.elements;
            const data = {
                title: form.title.value,
                description: form.description.value,
                assigned_user: user?.userid,
                user: form.user.value,
                ticket_type: form.ticket_type.value
            };
            // Send the data to the server in JSON format.
            const JSONdata = JSON.stringify(data);
            const response = await fetch(`${_utils_constants__WEBPACK_IMPORTED_MODULE_5__/* .BASE_URL */ ._}tickets/`, {
                method: "POST",
                body: JSONdata,
                headers: {
                    "Content-Type": "application/json"
                }
            });
            setLoading(false);
            // Get the response data from server as JSON.
            const result = await response.json();
            addTicket({
                id: result["id"],
                title: result["title"],
                description: result["description"],
                status: result["status"],
                ticket_type: result["ticket_type"],
                created: result["created"],
                assigned_user: result["assigned_user"]
            });
            setOpen(false);
        } catch (error) {
            console.log(error);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Child, {
                as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                enter: "ease-out duration-300",
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "fixed inset-0 z-10 overflow-y-auto",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Child, {
                        as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                        enter: "ease-out duration-300",
                        enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                        enterTo: "opacity-100 translate-y-0 sm:scale-100",
                        leave: "ease-in duration-200",
                        leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
                        leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Dialog.Panel, {
                            className: "relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__.PencilIcon, {
                                            className: "h-6 w-6 text-green-600",
                                            "aria-hidden": "true"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "mt-3 text-center sm:mt-5",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Dialog.Title, {
                                                as: "h3",
                                                className: "text-base font-semibold leading-6 text-gray-900",
                                                children: "Create a new ticket"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "mt-2",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-sm text-gray-500",
                                                    children: "Fill in the details to create a new ticket"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                                className: "space-y-6",
                                                onSubmit: createTicket,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        type: "hidden",
                                                        value: user?.userid.toString(),
                                                        name: "assigned_user"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        type: "hidden",
                                                        value: user?.userid.toString(),
                                                        name: "user"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex flex-col items-start mt-4",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                htmlFor: "title",
                                                                className: "block text-sm font-medium leading-6 text-gray-900",
                                                                children: "Name"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "mt-2 w-full",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                    id: "title",
                                                                    name: "title",
                                                                    type: "text",
                                                                    autoComplete: "title",
                                                                    required: true,
                                                                    className: "block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex flex-col items-start mt-4",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                htmlFor: "ticket_type",
                                                                className: "block text-sm font-medium leading-6 text-gray-900",
                                                                children: "Ticket type"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "mt-2 w-full",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                                    name: "ticket_type",
                                                                    id: "ticket_type",
                                                                    defaultValue: "inquiry",
                                                                    className: "block border w-full px-4 rounded-md py-1.5 text-gray-900 shadow-sm  sm:text-sm sm:leading-6",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                            value: "inquiry",
                                                                            children: "Inquiry"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                            value: "product support",
                                                                            children: "Product support"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                            value: "complaint",
                                                                            children: "Complaint"
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex flex-col items-start",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                htmlFor: "description",
                                                                className: "block text-sm font-medium leading-6 text-gray-900",
                                                                children: "Description"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "mt-2 w-full",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                                    rows: 4,
                                                                    name: "description",
                                                                    id: "description",
                                                                    className: "block w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                                                                    defaultValue: ""
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                            type: "submit",
                                                            className: "flex w-full justify-center rounded-md bg-[#08a730] px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
                                                            children: loading ? "Please wait ..." : "Create Ticket"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 811:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FiltersWidget)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);

function FiltersWidget({ filterTickets , tickets  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full flex",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mr-6",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        htmlFor: "location",
                        className: "block text-sm leading-6 text-gray-900",
                        children: "Filter by assignee"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                        id: "assignee",
                        name: "assignee",
                        onChange: (e)=>{
                            filterTickets("user", e.target.value);
                        },
                        className: "mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "all",
                                children: "All"
                            }),
                            tickets.map((tk)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                    value: tk.assigned_user.toString(),
                                    children: tk.assigned_user
                                }, tk.title.toString()))
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mr-6",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        htmlFor: "location",
                        className: "block text-sm leading-6 text-gray-900",
                        children: "Filter by ticket type"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                        id: "type",
                        name: "type",
                        onChange: (e)=>{
                            filterTickets("type", e.target.value);
                        },
                        className: "mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "all",
                                children: "All"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "product support",
                                children: "Product support"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "inquiry",
                                children: "Inquiry"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "complaint",
                                children: "Complaint"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mr-6",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        htmlFor: "location",
                        className: "block text-sm leading-6 text-gray-900",
                        children: "Filter by ticket status"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                        id: "status",
                        name: "status",
                        onChange: (e)=>{
                            filterTickets("status", e.target.value);
                        },
                        className: "mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "all",
                                children: "All"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "resolved",
                                children: "Resolved"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "Open",
                                children: "Open"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        htmlFor: "date",
                        className: "block text-sm leading-6 text-gray-900",
                        children: "Filter by date"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        id: "date",
                        type: "date",
                        onChange: (e)=>{
                            filterTickets("date", e.target.value);
                        },
                        className: "mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900"
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 3976:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ReassignTicketModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1185);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2135);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6725);
/* harmony import */ var _hooks_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2479);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function ReassignTicketModal({ setOpen , updateticket , ticket  }) {
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const user = (0,_hooks_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useUser */ .a)("login/");
    const fetchUsers = async ()=>{
        const response = await fetch(`${_utils_constants__WEBPACK_IMPORTED_MODULE_5__/* .BASE_URL */ ._}users/`, {
            method: "GET"
        });
        const usersList = await response.json();
        setUsers(usersList);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        fetchUsers();
    }, []);
    const assignTicket = async (e)=>{
        e.preventDefault();
        try {
            setLoading(true);
            const form = e.currentTarget.elements;
            const data = {
                id: ticket.id,
                assigned_user: form.assigned_user.value,
                user: user?.userid
            };
            // Send the data to the server in JSON format.
            const JSONdata = JSON.stringify(data);
            const response = await fetch(`${_utils_constants__WEBPACK_IMPORTED_MODULE_5__/* .BASE_URL */ ._}tickets/${data.id}/`, {
                method: "PUT",
                body: JSONdata,
                headers: {
                    "Content-Type": "application/json"
                }
            });
            setLoading(false);
            // Get the response data from server as JSON.
            const result = await response.json();
            ticket.assigned_user = result.assigned_user;
            updateticket(ticket);
            setOpen(false);
        } catch (error) {
            console.log(error);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Child, {
                as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                enter: "ease-out duration-300",
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "fixed inset-0 z-10 overflow-y-auto",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Child, {
                        as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                        enter: "ease-out duration-300",
                        enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                        enterTo: "opacity-100 translate-y-0 sm:scale-100",
                        leave: "ease-in duration-200",
                        leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
                        leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Dialog.Panel, {
                            className: "relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__.PencilIcon, {
                                            className: "h-6 w-6 text-green-600",
                                            "aria-hidden": "true"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "mt-3 text-center sm:mt-5",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Dialog.Title, {
                                                as: "h3",
                                                className: "text-base font-semibold leading-6 text-gray-900",
                                                children: "Assign Ticket"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "mt-2",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "text-sm text-gray-500",
                                                    children: "Select a user below to reassign ticket to"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                                className: "space-y-6",
                                                onSubmit: assignTicket,
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex flex-col items-start mt-4",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                htmlFor: "assigned_user",
                                                                className: "block text-sm font-medium leading-6 text-gray-900",
                                                                children: "Assignee"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "mt-2 w-full",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                                    name: "assigned_user",
                                                                    id: "assigned_user",
                                                                    className: "block border w-full px-4 rounded-md py-1.5 text-gray-900 shadow-sm  sm:text-sm sm:leading-6",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                            children: "Select user to assign to"
                                                                        }),
                                                                        users.map((user)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                                value: user.id,
                                                                                children: user.username
                                                                            }, user.toString()))
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                            type: "submit",
                                                            className: "flex w-full justify-center rounded-md bg-[#08a730] px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
                                                            children: loading ? "Please wait ..." : "Create Ticket"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 406:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ResolveTicketModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1185);
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6725);
/* harmony import */ var _hooks_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2479);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function ResolveTicketModal({ setOpen , updateticket , ticket  }) {
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const user = (0,_hooks_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useUser */ .a)("login/");
    const resolveTicket = async (e)=>{
        e.preventDefault();
        try {
            setLoading(true);
            const form = e.currentTarget.elements;
            const data = {
                id: ticket.id,
                notes: form.notes.value,
                user: user?.userid,
                assigned_user: ticket.assigned_user,
                status: "resolved"
            };
            // Send the data to the server in JSON format.
            const JSONdata = JSON.stringify(data);
            const response = await fetch(`${_utils_constants__WEBPACK_IMPORTED_MODULE_4__/* .BASE_URL */ ._}tickets/${data.id}/`, {
                method: "PUT",
                body: JSONdata,
                headers: {
                    "Content-Type": "application/json"
                }
            });
            setLoading(false);
            // Get the response data from server as JSON.
            const result = await response.json();
            ticket.status = result.status;
            updateticket(ticket);
            setOpen(false);
        } catch (error) {
            console.log(error);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Child, {
                as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                enter: "ease-out duration-300",
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "fixed inset-0 z-10 overflow-y-auto",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Child, {
                        as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                        enter: "ease-out duration-300",
                        enterFrom: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                        enterTo: "opacity-100 translate-y-0 sm:scale-100",
                        leave: "ease-in duration-200",
                        leaveFrom: "opacity-100 translate-y-0 sm:scale-100",
                        leaveTo: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Dialog.Panel, {
                            className: "relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mt-3 text-center sm:mt-5",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Dialog.Title, {
                                            as: "h3",
                                            className: "text-base font-semibold leading-6 text-gray-900",
                                            children: "Resolve Ticket"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "mt-2",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-sm text-gray-500",
                                                children: "Add your notes below to resolve this ticket"
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                            className: "space-y-6 mt-4",
                                            onSubmit: resolveTicket,
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex flex-col items-start",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                            htmlFor: "notes",
                                                            className: "block text-sm font-medium leading-6 text-gray-900",
                                                            children: "Your notes here"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "mt-2 w-full",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                                rows: 4,
                                                                name: "notes",
                                                                id: "notes",
                                                                className: "block w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
                                                                defaultValue: ""
                                                            })
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                        type: "submit",
                                                        className: "flex w-full justify-center rounded-md bg-[#08a730] px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
                                                        children: loading ? "Please wait ..." : "Create Ticket"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    })
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7374:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TicketsUsers)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function TicketsUsers({ tickets  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
        role: "list",
        className: "grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8",
        children: tickets.map((tk)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                className: "overflow-hidden rounded-xl border border-gray-200",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "h-8 w-8 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-sm font-medium leading-6 text-gray-900",
                                children: tk.title
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dl", {
                        className: "-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6",
                        children: tickets.filter((item)=>item.id == tk.id).map((i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex justify-between gap-x-4 py-3",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                                        className: "text-gray-600",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: tk.assigned_user
                                        })
                                    })
                                })
                            }, i.title.toString()))
                    })
                ]
            }, tk.title.toString()))
    });
}


/***/ }),

/***/ 2479:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ useUser)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7023);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);



function useUser(redirectTo) {
    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const data = (0,_src_utils_utils__WEBPACK_IMPORTED_MODULE_2__/* .getUserData */ .is)();
        setUser(data);
        if (!data) {
            router.push(`${redirectTo}`);
        }
    }, []);
    return user;
}


/***/ }),

/***/ 1013:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Dashboard),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1185);
/* harmony import */ var _heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9476);
/* harmony import */ var _heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_components_Scaffold__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8720);
/* harmony import */ var _src_utils_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6725);
/* harmony import */ var _src_components_CreateTicketModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9966);
/* harmony import */ var _src_components_ReassignTicketModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3976);
/* harmony import */ var _src_components_ResolveTicketModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(406);
/* harmony import */ var _src_components_FiltersWidget__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(811);
/* harmony import */ var _src_components_TicketsUsers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7374);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__, _src_components_Scaffold__WEBPACK_IMPORTED_MODULE_4__, _src_components_CreateTicketModal__WEBPACK_IMPORTED_MODULE_5__, _src_components_ReassignTicketModal__WEBPACK_IMPORTED_MODULE_6__, _src_components_ResolveTicketModal__WEBPACK_IMPORTED_MODULE_7__]);
([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__, _src_components_Scaffold__WEBPACK_IMPORTED_MODULE_4__, _src_components_CreateTicketModal__WEBPACK_IMPORTED_MODULE_5__, _src_components_ReassignTicketModal__WEBPACK_IMPORTED_MODULE_6__, _src_components_ResolveTicketModal__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
async function getServerSideProps() {
    const response = await fetch(`${_src_utils_constants__WEBPACK_IMPORTED_MODULE_10__/* .BASE_URL */ ._}tickets/`, {
        method: "GET"
    });
    // Get the response data from server as JSON.
    const tks = await response.json();
    if (!tks) {
        return {
            notFound: true
        };
    }
    return {
        props: {
            tks
        }
    };
}
function Dashboard({ tks  }) {
    const [tickets, setTickets] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(tks);
    const [currentTicket, setCurrentticket] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(tickets[0]);
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [openAssignModal, setOpenAssignModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [openResolveModal, setOpenResolveModal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    function updateTicket(ticket) {
        setTickets(tickets.map((item)=>{
            if (item.id === ticket.id) {
                return ticket;
            }
            return item;
        }));
    }
    function addTicket(ticket) {
        tickets.push(ticket);
        setTickets(tickets);
    }
    function filterTickets(type, param) {
        if (param === "all") {
            setTickets(tks);
            return;
        }
        switch(type){
            case "user":
                setTickets(tks.filter((item)=>item.assigned_user == param));
                break;
            case "type":
                setTickets(tks.filter((item)=>item.ticket_type == param));
                break;
            case "status":
                setTickets(tks.filter((item)=>item.status == param));
                break;
            case "date":
                setTickets(tks.filter((item)=>item.created === param));
                break;
            default:
                setTickets(tks);
        }
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_components_Scaffold__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "px-4 sm:px-6 lg:px-8",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "sm:flex sm:items-center",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "sm:flex-auto",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "text-base font-semibold leading-6 text-gray-900",
                                        children: "All Tickets"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "mt-2 text-sm text-gray-700",
                                        children: [
                                            "View and manage your tickets. You have a total of ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                className: "font-semibold text-gray-900",
                                                children: tickets.length
                                            }),
                                            " tickets"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mt-4 sm:ml-16 sm:mt-0 sm:flex-none",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        type: "button",
                                        onClick: ()=>{
                                            setOpen(true);
                                        },
                                        className: "flex w-full justify-center rounded-md bg-[#08a730] px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
                                        children: "Create new ticket"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Root, {
                                        show: open,
                                        as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Dialog, {
                                            as: "div",
                                            className: "relative z-10",
                                            onClose: setOpen,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_CreateTicketModal__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                setOpen: setOpen,
                                                addTicket: addTicket
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mt-10",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_FiltersWidget__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                            tickets: tks,
                            filterTickets: filterTickets
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "-mx-4 mt-5 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg bg-white",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                            className: "min-w-full divide-y divide-gray-300 overflow-auto",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                scope: "col",
                                                className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6",
                                                children: "Name"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                scope: "col",
                                                className: "hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell",
                                                children: "Created"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                scope: "col",
                                                className: "hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell",
                                                children: "Type"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                scope: "col",
                                                className: "hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell",
                                                children: "Status"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                scope: "col",
                                                className: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900",
                                                children: "Assignee"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                scope: "col",
                                                className: "relative py-3.5 pl-3 pr-4 sm:pr-6",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "sr-only",
                                                    children: "Action"
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                    children: tickets.map((tk, planIdx)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                    className: "relative py-4 pl-4 pr-3 text-sm sm:pl-6",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "font-medium text-gray-900",
                                                        children: tk.title
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                    className: "hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell",
                                                    children: tk.created.split("T")[0]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                    className: "hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell",
                                                    children: tk.ticket_type
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                    className: "hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell",
                                                    children: tk.status
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                    className: "px-3 py-3.5 text-sm text-gray-500",
                                                    children: tk.assigned_user
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                    className: "relative py-3.5 pl-3 pr-4 text-right text-sm font-medium sm:pr-6",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Menu, {
                                                        as: "div",
                                                        className: "relative flex-none",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Button, {
                                                                className: "-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        className: "sr-only",
                                                                        children: "Open options"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_3__.EllipsisVerticalIcon, {
                                                                        className: "h-5 w-5",
                                                                        "aria-hidden": "true"
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
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Items, {
                                                                    className: "absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
                                                                            children: ({ active  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                                    href: "#",
                                                                                    onClick: (e)=>{
                                                                                        e.preventDefault();
                                                                                        setOpenResolveModal(true);
                                                                                        setCurrentticket(tk);
                                                                                    },
                                                                                    className: classNames(active ? "bg-gray-50" : "", "block px-3 py-1 text-sm leading-6 text-gray-900 text-left"),
                                                                                    children: [
                                                                                        "Resolve",
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                            className: "sr-only",
                                                                                            children: ", resolve"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
                                                                            children: ({ active  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                                    href: "#",
                                                                                    onClick: (e)=>{
                                                                                        e.preventDefault();
                                                                                        setOpenAssignModal(true);
                                                                                        setCurrentticket(tk);
                                                                                    },
                                                                                    className: classNames(active ? "bg-gray-50" : "", "block px-3 py-1 text-sm leading-6 text-gray-900 text-left"),
                                                                                    children: [
                                                                                        "Reassign",
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                            className: "sr-only",
                                                                                            children: ", reassign"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Menu.Item, {
                                                                            children: ({ active  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                                                    href: "#",
                                                                                    onClick: (e)=>{
                                                                                        e.preventDefault();
                                                                                    // delete ticket here
                                                                                    },
                                                                                    className: classNames(active ? "bg-gray-50" : "", "block px-3 py-1 text-sm leading-6 text-gray-900 text-left"),
                                                                                    children: [
                                                                                        "Delete",
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                            className: "sr-only",
                                                                                            children: ", delete"
                                                                                        })
                                                                                    ]
                                                                                })
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }, tk.id.toString()))
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "sm:flex sm:items-center mt-10",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "sm:flex-auto",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "text-base font-semibold leading-6 text-gray-900",
                                    children: "Ticket by users"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "mt-2 text-sm text-gray-700",
                                    children: [
                                        "There are a total of ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                            className: "font-semibold text-gray-900",
                                            children: tickets.length
                                        }),
                                        " tickets"
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mt-6 -mx-4 sm:mx-0 sm:rounded-lg bg-white px-6 py-8",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_TicketsUsers__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            tickets: tks
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Root, {
                show: openAssignModal,
                as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Dialog, {
                    as: "div",
                    className: "relative z-10",
                    onClose: setOpenAssignModal,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_ReassignTicketModal__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        setOpen: setOpenAssignModal,
                        ticket: currentTicket,
                        updateticket: updateTicket
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition.Root, {
                show: openResolveModal,
                as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Dialog, {
                    as: "div",
                    className: "relative z-10",
                    onClose: setOpenResolveModal,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_ResolveTicketModal__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        setOpen: setOpenResolveModal,
                        ticket: currentTicket,
                        updateticket: updateTicket
                    })
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6725:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ BASE_URL)
/* harmony export */ });
const BASE_URL = "http://127.0.0.1:8000/";


/***/ }),

/***/ 9476:
/***/ ((module) => {

module.exports = require("@heroicons/react/20/solid");

/***/ }),

/***/ 2135:
/***/ ((module) => {

module.exports = require("@heroicons/react/24/outline");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,636,675,664,720], () => (__webpack_exec__(1013)));
module.exports = __webpack_exports__;

})();