'use client'; // این بسیار ضروری است ❗

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="text-center mt-20 h-[500px] flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold text-red-600 mb-2">Something went wrong 😢</h2>
      <p className="text-gray-600 mb-4">{error.message}</p>

      <button
        onClick={() => reset()} // تابعی که صفحه را دوباره رندر می‌کند
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Try Again
      </button>
    </div>
  );
}
