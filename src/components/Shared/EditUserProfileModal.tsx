'use client';

import React from 'react';
import Image from 'next/image';
import {X, Calendar, ChevronDown} from 'lucide-react';
import {Button} from '@/components/ui/button';

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EditProfileModal({
  isOpen,
  onClose,
}: EditProfileModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl overflow-hidden flex flex-col relative animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="px-8 pt-8 pb-4">
          <div className="flex justify-between items-start mb-2">
            <h2 className="text-[22px] font-semibold text-slate-900">
              Edit Profile
            </h2>
            <button
              onClick={onClose}
              className="text-red-500 hover:bg-red-50 p-1 rounded-md transition-colors">
              <X className="w-6 h-6" strokeWidth={2} />
            </button>
          </div>
          <p className="text-gray-500 text-[15px]">
            You can edit all the profile information you submitted here.
          </p>
        </div>

        <div className="w-full h-px bg-gray-100" />

        {/* Modal Body */}
        <div className="p-8 flex flex-col md:flex-row gap-8">
          {/* Profile Image Column */}
          <div className="flex flex-col items-center gap-4 shrink-0">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border border-gray-200">
              <Image
                src="/images/home/user-profile-asap.png"
                alt="Profile Photo"
                fill
                sizes="200"
                className="object-cover"
              />
            </div>
            <button className="bg-[#E9ECEF] text-slate-700 hover:bg-gray-300 px-4 py-2 rounded-lg text-sm font-medium transition-colors w-full">
              Change Photo
            </button>
          </div>

          {/* Form Fields Column */}
          <div className="flex-1 flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-900">
                Full Name
              </label>
              <input
                type="text"
                defaultValue="James Edward"
                className="border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#F37021] focus:ring-1 focus:ring-[#F37021] text-[15px] text-slate-900 placeholder:text-gray-400 w-full"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-900">
                  Date of Birth
                </label>
                <div className="relative">
                  <input
                    type="text"
                    defaultValue="02-01-2004"
                    className="border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#F37021] focus:ring-1 focus:ring-[#F37021] text-[15px] text-slate-900 w-full"
                  />
                  <Calendar
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                    strokeWidth={1.5}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-900">
                  Gender
                </label>
                <div className="relative">
                  <select
                    className="w-full appearance-none border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#F37021] focus:ring-1 focus:ring-[#F37021] text-[15px] text-slate-900 bg-white"
                    defaultValue="Male">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  <ChevronDown
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
                    strokeWidth={1.5}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-900">
                Current Password
              </label>
              <input
                type="password"
                placeholder="Enter current password"
                className="border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#F37021] focus:ring-1 focus:ring-[#F37021] text-[15px] text-slate-900 placeholder:text-gray-400 w-full"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-900">
                New Password
              </label>
              <input
                type="password"
                placeholder="Enter new password"
                className="border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#F37021] focus:ring-1 focus:ring-[#F37021] text-[15px] text-slate-900 placeholder:text-gray-400 w-full"
              />
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-8 pt-0 flex justify-end gap-4 mt-2">
          <Button
            variant="outline"
            onClick={onClose}
            className="rounded-full px-8 py-6 text-[15px] font-medium border-gray-300 text-slate-600 hover:bg-gray-50">
            Cancel
          </Button>
          <Button className="bg-[#F37021] hover:bg-[#E0601B] text-white rounded-full px-8 py-6 text-[15px] font-medium shadow-none transition-colors">
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
}
