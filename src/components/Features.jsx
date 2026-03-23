import { Zap, Shield, Smartphone, Gauge, Users, Lock } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance with Vite and React for instant load times',
  },
  {
    icon: Shield,
    title: 'Secure',
    description: 'Built with security best practices to protect your data',
  },
  {
    icon: Smartphone,
    title: 'Fully Responsive',
    description: 'Perfect on mobile, tablet, and desktop devices',
  },
  {
    icon: Gauge,
    title: 'Easy to Customize',
    description: 'Simple component structure for quick modifications',
  },
  {
    icon: Users,
    title: 'User Friendly',
    description: 'Intuitive interface designed for all skill levels',
  },
  {
    icon: Lock,
    title: 'Privacy First',
    description: 'Your data is encrypted and never shared with third parties',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
            Features
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Everything You Need
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features to help you create amazing landing pages in minutes
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition">
                  <Icon className="text-blue-600 group-hover:text-white transition" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
