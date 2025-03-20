import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Alice Johnson",
    role: "Lead Developer",
    img: "https://via.placeholder.com/100",
  },
  {
    name: "Bob Smith",
    role: "Hardware Engineer",
    img: "https://via.placeholder.com/100",
  },
  {
    name: "Charlie Lee",
    role: "Frontend Developer",
    img: "https://via.placeholder.com/100",
  },
];

const slideInFromLeft = {
  hidden: { x: -100, opacity: 0 }, // Start off-screen to the left
  visible: { x: 0, opacity: 1 }, // Slide in to the original position
};

const slideInFromRight = {
  hidden: { x: 100, opacity: 0 }, // Start off-screen to the right
  visible: { x: 0, opacity: 1 }, // Slide in to the original position
};

const MotionCard = motion.create(Card); // Wrap the Card with motion()

const AboutSection = () => {
  return (
    <div className="p-8">
      {/* Project Description */}
      <motion.h1
        className="text-primary text-4xl font-bold w-full text-center mb-6"
        initial="hidden"
        animate="visible"
        variants={slideInFromRight}
        transition={{ duration: 1 }}
      >
        About Our Project
      </motion.h1>
      <MotionCard
        className="mx-auto mb-8 shadow-lg max-w-3xl"
        initial="hidden"
        animate="visible"
        variants={slideInFromLeft}
        transition={{ duration: 1 }}
      >
        <CardHeader>
          <CardDescription>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our SmartWatch
            and Health Monitoring project enables real-time monitoring of
            environmental and biometric data. Using Python and Socket.IO, we
            seamlessly transmit sensor readings to a modern web dashboard for
            visualization.
          </CardDescription>
        </CardHeader>
      </MotionCard>

      {/* Features */}
      <MotionCard
        className="mx-auto mb-8 shadow-lg max-w-3xl"
        initial="hidden"
        animate="visible"
        variants={slideInFromRight}
        transition={{ duration: 1 }}
      >
        <CardHeader>
          <CardTitle>Key Features</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <CardDescription>
              <strong>1. MPU6050 Gyroscope & Accelerometer:</strong> Motion
              tracking with real-time angular velocity and acceleration data.
            </CardDescription>
            <CardDescription>
              <strong>2. GPS Module (NEO-6M):</strong> Real-time geolocation
              tracking for navigation and mapping.
            </CardDescription>
            <CardDescription>
              <strong>3. HW-827 Heart Rate Sensor:</strong> Continuous heart
              rate monitoring for health applications.
            </CardDescription>
            <CardDescription>
              <strong>4. Real-time Data Transmission:</strong> Uses
              **Socket.IO** for seamless communication between Raspberry Pi,
              backend, and frontend.
            </CardDescription>
            <CardDescription>
              <strong>5. Modern Web Interface:</strong> Built with React,
              Tailwind CSS, and ShadCN UI for a responsive, interactive
              experience.
            </CardDescription>
          </ul>
        </CardContent>
      </MotionCard>

      {/* Team Members */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate="visible"
            variants={slideInFromLeft}
            transition={{ duration: 1, delay: index * 0.2 }}
          >
            <Card className="shadow-lg">
              <CardContent className="flex flex-col items-center p-6">
                <Avatar className="w-20 h-20 mb-4">
                  <AvatarImage src={member.img} alt={member.name} />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <CardTitle>{member.name}</CardTitle>
                <CardDescription>{member.role}</CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
