'use client';

import React, {useState} from 'react';
import Image from 'next/image';
import {ArrowRight, CheckCircle2, Circle, Lock, Play} from 'lucide-react';
import {Button} from '@/components/ui/button';
import EditProfileModal from '@/components/Shared/EditUserProfileModal';

const courseClasses = [
  {id: 1, title: 'Class 1: Introduction', state: 'completed'},
  {id: 2, title: 'Class 2: Foundation', state: 'completed'},
  {id: 3, title: 'Class 3: Cardio Warmup', state: 'current'},
  {id: 4, title: 'Class 4: Cool Down', state: 'locked'},
];

export default function UserDashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8F9FA] p-4 md:p-8 flex justify-center relative">
      <div className="max-w-250 w-full grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8">
        {/* Left Column (Profile & Videos) */}
        <div className="flex flex-col">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-4">
              <div className="relative w-20 h-20 rounded-full overflow-hidden border border-gray-200 shrink-0">
                <Image
                  src="/images/home/user-profile-asap.png"
                  alt="Mr James Edward"
                  fill
                  sizes="200"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-2xl font-semibold text-slate-900">
                  Mr James Edward
                </h1>
                <span className="text-sm text-gray-500 font-medium mt-0.5">
                  26 Years Old
                </span>
              </div>
            </div>
            <Button
              onClick={() => setIsModalOpen(true)}
              className="bg-primary hover:bg-primary/80 text-white rounded-full px-8 py-5 font-medium shadow-none transition-colors w-full sm:w-auto cursor-pointer">
              Edit Profile
            </Button>
          </div>

          <div className="w-full h-px bg-gray-200 mb-6" />

          <div className="flex flex-col gap-4 mb-6">
            <div className="flex items-center text-[15px]">
              <span className="font-semibold text-slate-900 w-28">Email :</span>
              <span className="text-gray-500">james@gmail.com</span>
            </div>
            <div className="flex items-center text-[15px]">
              <span className="font-semibold text-slate-900 w-28">
                Date Of Birth :
              </span>
              <span className="text-gray-500">02-01-2004</span>
            </div>
            <div className="flex items-center text-[15px]">
              <span className="font-semibold text-slate-900 w-28">
                Gender :
              </span>
              <span className="text-gray-500">Male</span>
            </div>
            <div className="flex items-center text-[15px]">
              <span className="font-semibold text-slate-900 w-28">
                Join Date:
              </span>
              <span className="text-gray-500">21-04-26</span>
            </div>
          </div>

          <div className="w-full h-px bg-gray-200 mb-6" />

          <div className="flex flex-col">
            <p className="text-slate-900 font-medium mb-4">
              Boost your fitness journey by watching the next video now!
            </p>

            <div className="flex flex-col sm:flex-row bg-[#EAECEF] rounded-2xl overflow-hidden w-full min-h-45">
              <div className="relative w-full sm:w-[45%] h-50 sm:h-auto shrink-0">
                <Image
                  src="/images/home/classes/class-1.png"
                  alt="Foundation Program"
                  fill
                  sizes="400"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <button className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center hover:bg-white/40 transition-colors">
                    <Play
                      className="w-5 h-5 text-white ml-1"
                      fill="currentColor"
                    />
                  </button>
                </div>
              </div>

              <div className="flex-1 p-6 flex flex-col justify-center">
                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight">
                  Class 2: Foundation Program
                </h3>
                <p className="text-sm text-gray-500 mb-6 leading-relaxed max-w-[90%]">
                  Ideal for regular gym-goers who want to maintain and refine
                  their physique.
                </p>
                <Button className="w-full sm:w-fit bg-primary hover:bg-primary/80 text-white rounded-full px-6 py-5 font-medium flex items-center justify-center gap-2 group transition-colors">
                  Continue Your Class
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (Progress Tracker) */}
        <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm flex flex-col items-center h-fit ">
          <div className="relative w-40 h-40 mb-4 flex items-center justify-center">
            <svg
              className="w-full h-full transform -rotate-90"
              viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="42"
                fill="transparent"
                stroke="#F1F3F5"
                strokeWidth="12"
              />
              <circle
                cx="50"
                cy="50"
                r="42"
                fill="transparent"
                stroke="#F37021"
                strokeWidth="12"
                strokeDasharray="263.89"
                strokeDashoffset="26.39"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold text-slate-900">09/10</span>
            </div>
          </div>

          <h3 className="font-bold text-slate-900 text-lg mb-6 text-center">
            Total Course Progress
          </h3>

          <div className="w-full h-px bg-gray-100 mb-6" />

          <ul className="w-full flex flex-col gap-4">
            {courseClasses.map((item) => (
              <li key={item.id} className="flex items-center gap-3">
                {item.state === 'completed' && (
                  <CheckCircle2
                    className="w-5 h-5 text-primary shrink-0"
                    strokeWidth={2}
                  />
                )}
                {item.state === 'current' && (
                  <Circle
                    className="w-5 h-5 text-primary shrink-0"
                    strokeWidth={3}
                  />
                )}
                {item.state === 'locked' && (
                  <Lock
                    className="w-5 h-5 text-gray-400 shrink-0"
                    strokeWidth={2}
                  />
                )}
                <span
                  className={`text-sm font-medium ${item.state === 'current' ? 'text-primary' : 'text-gray-500'}`}>
                  {item.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Reusable Modal Component */}
      <EditProfileModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
