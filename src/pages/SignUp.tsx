
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SignUpForm } from '@/components/AuthForms';

const SignUp = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-black/30 border border-border rounded-xl p-8 md:p-12">
            <SignUpForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignUp;
