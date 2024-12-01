import React from "react";
import { Button, Card, Text, Image } from "@mantine/core";
import { SiAdobeacrobatreader } from "react-icons/si";


interface JobProps {
  logo: string;
  company: string;
  title: string;
  link:string;
}

const JobCard: React.FC<JobProps> = ({ logo, company, title }) => {
  return (
    <Card shadow="sm" radius="md" padding="lg" className="flex p-4 gap-8 items-center justify-between border space-x-6">
      {/* Logo and Job Info */}
      <div className="flex  items-center gap-3">
        <Image src={logo} alt={`${company} Logo`} width={100} height={50} radius="md" />
        <div>
          <Text >{company}</Text>
          <div className="flex flex-row gap-1">
          <Text size="sm" color="dimmed">{title} </Text>
             <SiAdobeacrobatreader size={10}/>
             </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-2">
        <Button variant="outline" size="sm" color="gray">
          Decline
        </Button>
        <Button size="sm" color="blue">
          Accept
        </Button>
      </div>
    </Card>
  );
};

export default JobCard;
