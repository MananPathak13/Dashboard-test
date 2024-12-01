import React from 'react';
import { jobData } from '@/lib/data'; // Adjust path if necessary
import JobCard from '@/components/JobCard';

const JobsPage: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-10 px-20 p-10 ">
      {jobData.map((job, index) => (
        <JobCard key={index} logo={job.logo} company={job.company} title={job.title} link={job.link} />
      ))}
    </div>
  );
};

export default JobsPage;
