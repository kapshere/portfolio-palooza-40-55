
import Navigation from '@/components/Navigation';
import EntrepreneurshipTimeline from '@/components/work-experience/EntrepreneurshipTimeline';

const Entrepreneurship = () => {
  return (
    <div className="bg-secondary min-h-screen">
      <Navigation />
      <div className="pt-20">
        <EntrepreneurshipTimeline />
      </div>
    </div>
  );
};

export default Entrepreneurship;
