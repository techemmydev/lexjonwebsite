import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactInfoCard = () => {
  const contactData = [
    {
      icon: MapPin,
      title: "51 Sarah Faboyede St, Oshodi-Isolo, Lagos.",
      detail: null,
    },
    {
      icon: Phone,
      title: "+(234) 906 381 4899",
      detail: null,
    },
    {
      icon: Mail,
      title: "Info@caglobals.com",
      detail: null,
    },
    {
      icon: Clock,
      title: "Office Hours",
      detail: "Monday - Friday\n8:00 AM - 5:00 PM",
    },
  ];

  const ContactItem = ({ Icon, title, detail }) => (
    <div className="flex items-start space-x-4 mb-6">
      {/* Updated Icon Container */}
      <div className="p-3 rounded-[6px] bg-[#DCFCE7] text-black flex items-center justify-center">
        <Icon className="w-6 h-6 text-black" />
      </div>

      {/* Text */}
      <div className="flex flex-col">
        <p
          className="text-gray-900 text-base font-medium leading-relaxed"
          style={{ whiteSpace: "pre-line" }}
        >
          {title}
        </p>

        {detail && (
          <p
            className="text-gray-500 text-sm leading-normal"
            style={{ whiteSpace: "pre-line" }}
          >
            {detail}
          </p>
        )}
      </div>
    </div>
  );

  return (
    <div className="py-12 flex justify-center items-center">
      <div className="max-w-md w-full p-4 sm:p-6 lg:p-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 text-center">
          Contact Information
        </h1>

        <div className="mt-8">
          {contactData.map((item, index) => (
            <ContactItem
              key={index}
              Icon={item.icon}
              title={item.title}
              detail={item.detail}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfoCard;
