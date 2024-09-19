"use client";

export default function Error({ error, reset }) {
  return (
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-2xl font-bold mb-4">
        Something went wrong! {error.message}
      </h2>
      <button
        onClick={() => reset()}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Try again
      </button>
    </div>
  );
}
