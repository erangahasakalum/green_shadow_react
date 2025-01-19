export function Navigation(){
    return(
        <>
        <nav className="bg-gray-800">
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex shrink-0 items-center">
                                    <img
                                        className="h-8 w-auto"
                                        src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                                        alt="Your Company"
                                    />
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {/* Dashboard Link */}
                                        {/* <Link to="/" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" > Dashboard </Link> */}

                                        {/* Dropdown Links */}
                                        {["Add Details", "Update Details", "Delete Details"].map((action) => (
                                            <div key={action} className="relative group text-white mt-1.5">
                                                <a href="#">{action}</a>
                                                {/* Dropdown Content */}
                                                <div
                                                    className="absolute hidden group-hover:block bg-gray-700 text-white rounded-md shadow-lg">
                                                    {/* <Link to={`/${action.split(" ")[0].toLowerCase()}Customer`} className="block px-4 py-2 text-sm hover:bg-gray-600" > Customer </Link> */}
                                                    {/* <Link to={`/${action.split(" ")[0].toLowerCase()}Item`} className="block px-4 py-2 text-sm hover:bg-gray-600" > Item </Link> */}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
        </>
    )
}