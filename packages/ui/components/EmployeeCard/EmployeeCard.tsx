import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

interface EmployeeCardProps {
  name: string;
  company: string;
  phone?: string;
  image: string;
  github?: string;
  linkedIn?: string;
  mail: string;
}

const EmployeeCard: React.FC<EmployeeCardProps> = (props) => {
  return (
    <div className="relative flex h-72 w-56 items-end overflow-hidden rounded-lg px-6 py-5 font-Roboto shadow-2xl">
      {/* Employee Image */}
      <img
        className="absolute left-0 top-0 h-full w-full bg-cover"
        src={props.image}
      />

      <div className="z-10 flex w-full items-end justify-between">
        {/* Employee Base Info */}
        <div className="flex flex-col text-white">
          <span className="text-lg font-bold text-white">{props.name}</span>
          <span className="-mt-1 text-sm text-[#40C9A2]">{props.company}</span>
          <span className="mt-1 text-sm text-white">{props.phone}</span>
        </div>

        {/* Employee Socials */}
        <div className=" mb-[2px] flex flex-col gap-2">
          {/* Github Button */}
          {props.github && (
            <a href={props.github}>
              <FaGithub size={15} fill="white" />
            </a>
          )}

          {/* LinkedIn Button */}
          {props.linkedIn && (
            <a href={props.linkedIn}>
              <FaLinkedin size={15} fill="white" />
            </a>
          )}

          {/* Mail Button */}
          {props.mail && (
            <a type="mail" href={props.mail}>
              <FaEnvelope size={15} fill="white" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
export type { EmployeeCardProps };
