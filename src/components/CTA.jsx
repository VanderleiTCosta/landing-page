import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Ready to Build Your Landing Page?
          </h2>
          <p className="text-xl text-blue-100">
            Join thousands of creators who are building amazing landing pages with our platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition font-semibold flex items-center justify-center gap-2">
              Start Free Trial <ArrowRight size={20} />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:bg-opacity-10 transition font-semibold">
              Schedule Demo
            </button>
          </div>

          <p className="text-blue-100 text-sm">
            No credit card required. Get started in minutes.
          </p>
        </div>
      </div>
    </section>
  );
}
