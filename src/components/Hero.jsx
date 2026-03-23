import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
                ✨ Welcome to our platform
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Build Amazing <span className="text-blue-600">Landing Pages</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Create stunning, responsive landing pages with React and Tailwind CSS. Perfect for startups, agencies, and products.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition font-semibold flex items-center justify-center gap-2">
                Get Started <ArrowRight size={20} />
              </button>
              <button className="border-2 border-gray-300 text-gray-900 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition font-semibold flex items-center justify-center gap-2">
                <Play size={20} /> Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              <div>
                <p className="text-3xl font-bold text-gray-900">10K+</p>
                <p className="text-gray-600 text-sm">Happy Users</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">500+</p>
                <p className="text-gray-600 text-sm">Templates</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">99%</p>
                <p className="text-gray-600 text-sm">Uptime</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-3xl opacity-20"></div>
            <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white aspect-square flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold mb-4">👨‍💻</div>
                <p className="text-lg font-semibold">Your Amazing Hero Image Here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
