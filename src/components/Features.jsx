
const FeatureCard = ({ title, description }) => (
  <div className="bg-opacity-10 backdrop-blur-3xl border border-blue-300 border-opacity-40 rounded-2xl shadow-2xl p-6 transform hover:scale-105 transition-transform duration-300">
    <h3 className="text-2xl font-bold mb-2 font-bricolage-24pt">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      title: 'Streamlined Applications',
      description: 'Easily apply to multiple programs with a single, unified profile.',
    },
    {
      title: 'Real-Time Tracking',
      description: 'Monitor your application status in real-time from a centralized dashboard.',
    },
    {
      title: 'Personalized Recommendations',
      description: 'Get matched with programs that fit your academic and career goals.',
    },
  ];

  return (
    <section className="w-full py-20 animate-fadeInUp">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bricolage-24pt font-bold mb-4">Why Choose Gradform?</h2>
        <p className="text-lg text-blue-200 mb-12 max-w-2xl mx-auto">Our platform is designed to simplify the graduate school application process, saving you time and reducing stress.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
