
import Navigation from '@/components/Navigation';
import EntrepreneurshipTimeline from '@/components/work-experience/EntrepreneurshipTimeline';

const Entrepreneurship = () => {
  return (
    <div className="page-wrapper">
      <Navigation />
      <div className="content-padding">
        <EntrepreneurshipTimeline />
      </div>
    </div>
  );
};

export default Entrepreneurship;
