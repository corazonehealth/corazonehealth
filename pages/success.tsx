import Link from 'next/link';

const Success = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center max-w-lg">
        <h1 className="text-3xl font-bold text-green-600 mb-4">Payment Successful!</h1>
        <p className="text-lg mb-6">
          Thank you for your purchase. Your payment has been processed successfully.
        </p>
        <Link href="/">
          <a className="bg-accent text-white py-3 px-6 rounded-lg hover:bg-accent-dark transition duration-300">
            Return to Home
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Success;