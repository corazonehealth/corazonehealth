import Link from 'next/link';

const Cancel = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-100">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center max-w-lg">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Payment Cancelled</h1>
        <p className="text-lg mb-6">
          It looks like you cancelled the payment process. If you need assistance, feel free to contact us.
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

export default Cancel;