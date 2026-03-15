export default function Dashboard(){
    return(
        <div className="min-h-screen bg-gray-100">
            
        <div className="flex justify-between items-center bg-white p-4 shadow">
            <div className="font-semibold">Logo</div>
            <div className="bg-gray-200 px-4 py-1 rounded-full"></div>
        </div>
        
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-4"></h1>
        </div>
        <div className="flex gap-6 mb-6">
            <button className="text-blue-600 border-b-2 border-blue-600 pb-1">
                My Posts
            </button>
            <button className="text-gray-500">
                Claims
            </button>
        </div>
        </div>
    );
}