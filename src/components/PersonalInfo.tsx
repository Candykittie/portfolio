import React from 'react';
import { User, Calendar, Globe, MapPin, Heart, Languages } from 'lucide-react';

const PersonalInfo = () => {
  const personalDetails = [
    { icon: User, label: "Father's Name", value: "Mohanasundaram.B" },
    { icon: Calendar, label: "Date of Birth", value: "22-04-2001" },
    { icon: Globe, label: "Nationality", value: "Indian" },
    { icon: Heart, label: "Marital Status", value: "Single" },
    // { icon: MapPin, label: "Address", value: "" },
  ];

  const languages = ['English', 'Tamil'];

  return (
    <section id="personal" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-enhanced-primary mb-4">Personal Information</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold text-enhanced-secondary mb-6">Personal Details</h3>
            <div className="space-y-4">
              {personalDetails.map((detail, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-white/5 border border-white/10">
                  <div className="p-2 rounded-full bg-blue-500/20 mt-1">
                    <detail.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-enhanced-muted mb-1 font-semibold">{detail.label}</p>
                    <p className="text-enhanced-body font-bold">{detail.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold text-enhanced-secondary mb-6">Languages Known</h3>
            <div className="space-y-4 mb-8">
              {languages.map((language, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 rounded-lg bg-white/5 border border-white/10">
                  <div className="p-2 rounded-full bg-green-500/20">
                    <Languages className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <p className="text-enhanced-body font-bold">{language}</p>
                    <p className="text-sm text-enhanced-muted font-semibold">Fluent</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="glass-card-inner p-6">
              <h4 className="text-lg font-bold text-enhanced-secondary mb-4">Additional Information</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-enhanced-muted font-semibold">Availability</span>
                  <span className="text-green-400 font-medium">Immediate</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-enhanced-muted font-semibold">Work Authorization</span>
                  <span className="text-blue-300 font-medium">Authorized</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-enhanced-muted font-semibold">Willing to Relocate</span>
                  <span className="text-purple-400 font-medium">Yes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalInfo;