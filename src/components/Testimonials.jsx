import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Founder at StartupXYZ',
    image: '👩‍💼',
    text: 'This landing page template saved us weeks of development time. The components are well-structured and easy to customize.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Product Manager at TechCorp',
    image: '👨‍💼',
    text: 'Amazing performance and beautiful design. Our conversion rate increased by 40% after switching to this template.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Designer at Creative Agency',
    image: '👩‍🎨',
    text: 'The Tailwind integration is seamless. I was able to customize the entire design in just a few hours.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Loved by Thousands
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what our happy customers have to say about us
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:shadow-lg transition"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="text-4xl">{testimonial.image}</div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
