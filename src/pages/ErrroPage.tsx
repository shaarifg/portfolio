import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error:any = useRouteError();
    console.error(error);
  
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md p-8 bg-white shadow-md rounded-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Oops!</h1>
        <p className="text-gray-600 mb-6">
          It seems like something went wrong. Don't worry, our team is on it!
        </p>
        <img
          src="https://www.seekpng.com/png/detail/825-8254341_404-error-not-found.png"
          alt="Sad Emoji"
          className="w-24 h-24 mx-auto mb-6"
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          onClick={() => window.location.reload()}
        >
          Refresh Page
        </button>
      </div>
    </div>
    );
  }