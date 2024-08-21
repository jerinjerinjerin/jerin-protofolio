"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91) 801 575 2367",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "Jerinr906gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Kanayakumari(Dist), Mekkamandapam(Post), 629166(Zip code)",
  },
];

const Contact = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [service, setService] = useState("");

  const handleSelectChange = (value) => {
    setService(value);
  };

  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Something went wrong");

      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send message");
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* <!-- Form Section --> */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-blue-700">Let's work together</h3>
              <p className="text-white/60">
              Skilled in both technical communication and teamwork, 
              I excel in collaborative environments, ensuring seamless 
              integration and effective problem-solving. My ability to 
              articulate complex concepts clearly enhances team understanding 
              and drives project success.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* first name */}
                <div className="flex flex-col gap-2">
                  <Input
                    {...register("firstname", { required: true })}
                    placeholder="Firstname"
                  />
                  {errors.firstname && (
                    <span className="text-red-700">Firstname is required</span>
                  )}
                </div>
                {/* last name */}
                <div className="flex flex-col gap-2">
                  <Input
                    {...register("lastname", { required: true })}
                    placeholder="Lastname"
                  />
                  {errors.lastname && (
                    <span className="text-red-700">Lastname is required</span>
                  )}
                </div>
                {/* email */}
                <div className="flex flex-col gap-2">
                  <Input
                    {...register("email", {
                      required: true,
                      pattern:
                        /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    })}
                    placeholder="Email address"
                  />
                  {errors.email && (
                    <span className="text-red-700">Email is required</span>
                  )}
                </div>
                {/* password */}
                <div className="flex flex-col gap-2">
                  <Input type="number"
                    {...register("phone", { required: true })}
                    placeholder="Phone number"
                  />
                  {errors.phone && (
                    <span className="text-red-700">
                      Phone number is required
                    </span>
                  )}
                </div>
              </div>
              {/* select */}

              <Select onValueChange={handleSelectChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="web-dev">Web Development</SelectItem>
                    <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                    <SelectItem value="back-end">Backend Dovelopment</SelectItem>
                    <SelectItem value="full-stack">
                      Full Stack Development
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {errors.service && <span className="red">Service is required</span>}
              {/* textarea */}
              <Textarea
                {...register("message", { required: true })}
                className="h-[200px]"
                placeholder="Type your message here."
              />
              {errors.message && (
                <span className="text-red-700">Message is required</span>
              )}
              {/* btn */}
              <Button type="submit" size="md" className="max-w-40">
                Send message
              </Button>
            </form>
          </div>

          {/* <!-- Info Section --> */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="size-[52px] xl:size-[72px] bg-[#27272c] text-blue-700 rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
