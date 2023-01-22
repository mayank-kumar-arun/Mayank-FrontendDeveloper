

const Banner = () =>{
    return (
        <div className="bg-gray-300 py-10">
        <div className="container mx-auto flex items-center justify-center">
            <img  className="w-64" alt="rocket" />
            <div className="text-center ml-6">
                <h1 className="text-4xl font-medium text-gray-800">Welcome to the Space Adventure!</h1>
                <p className="text-lg text-gray-600">Join us on a journey to explore the unknown.</p>
            </div>
        </div>
    </div>
    )
}

export default Banner;