
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CreatorApplicationForm } from '@/components/AuthForms';
import FileUpload from '@/components/FileUpload';

const CreatorApplication = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-black/30 border border-border rounded-xl p-8 md:p-12">
            <div className="mb-6">
              <h1 className="text-3xl font-bold mb-2">Creator Application</h1>
              <p className="text-muted-foreground">
                Join our creator marketplace and start selling your content templates
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <CreatorApplicationForm />
              </div>
              <div className="space-y-6">
                <div className="bg-black/40 border border-border rounded-lg p-6">
                  <h3 className="text-lg font-medium mb-4">Sample Content Upload</h3>
                  <FileUpload 
                    onFileChange={(file) => console.log(file)} 
                    label="Upload a sample of your content template"
                    helperText="Accepted formats: PDF, Word, or Zip (Max 10MB)"
                  />
                  <p className="text-xs text-muted-foreground mt-4">
                    Provide a sample of your work to help us evaluate your application.
                    Your content will remain confidential and will only be used for review purposes.
                  </p>
                </div>
                <div className="bg-black/40 border border-border rounded-lg p-6">
                  <h3 className="text-lg font-medium mb-2">Application Tips</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Showcase your best and most popular content</li>
                    <li>• Ensure your samples are well-formatted and professional</li>
                    <li>• Include examples that demonstrate your unique expertise</li>
                    <li>• Applications are typically reviewed within 3-5 business days</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CreatorApplication;
