import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  Play,
  Clock,
  CalendarDays,
  Activity,
  User,
  CheckCircle2,
  Lock,
  ArrowRight,
} from 'lucide-react';
import {Button} from '@/components/ui/button';

const classList = [
  {id: 1, title: 'Class 1: Introduction', status: 'completed'},
  {id: 2, title: 'Class 2: Foundation', status: 'completed'},
  {id: 3, title: 'Class 3: Cardio Warmup', status: 'current'},
  {id: 4, title: 'Class 4: Cool Down', status: 'locked'},
];

const achievements = [
  'Learn proper form',
  'Build strength foundation',
  'Gain first 5 lbs of muscle',
  'Develop gym confidence',
];

const equipment = ['Dumbbells', 'Bench', 'Barbell (optional)'];

export default async function ClassDetails() {
  return (
    <div className="container mx-auto px-6 py-10 max-w-7xl">
      <Link
        href="/programs"
        className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-slate-900 transition-colors mb-8">
        <ArrowLeft className="w-4 h-4" />
        Back to Program
      </Link>

      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-3">
          Basic Program
        </h1>
        <p className="text-gray-500 text-sm md:text-base">
          Perfect for beginners starting their fitness journey with simple,
          guided workouts.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="relative w-full aspect-16/10 md:aspect-video rounded-2xl overflow-hidden group cursor-pointer shadow-sm">
            <Image
              src="/images/home/programs/program-video.png"
              alt="Class Video"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg">
                <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-white ml-2" />
              </div>
            </div>
          </div>

          <div className="bg-[#F8F9FA] rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">
              Class 1: Introduction
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              The perfect starting point for anyone new to weight training.
              Learn proper form, build a strength foundation, and start seeing
              muscle gains within the first month.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="bg-white rounded-xl p-5 flex flex-col gap-2 shadow-sm">
                <div className="flex items-center gap-2 text-gray-500">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Duration</span>
                </div>
                <span className="text-lg font-semibold text-slate-900">
                  8 Weeks
                </span>
              </div>
              <div className="bg-white rounded-xl p-5 flex flex-col gap-2 shadow-sm">
                <div className="flex items-center gap-2 text-gray-500">
                  <CalendarDays className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Frequency</span>
                </div>
                <span className="text-lg font-semibold text-slate-900">
                  3x per week
                </span>
              </div>
              <div className="bg-white rounded-xl p-5 flex flex-col gap-2 shadow-sm">
                <div className="flex items-center gap-2 text-gray-500">
                  <Activity className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Difficulty</span>
                </div>
                <span className="text-lg font-semibold text-slate-900">
                  Beginner
                </span>
              </div>
              <div className="bg-white rounded-xl p-5 flex flex-col gap-2 shadow-sm">
                <div className="flex items-center gap-2 text-gray-500">
                  <User className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Trainer</span>
                </div>
                <span className="text-lg font-semibold text-slate-900">
                  Jake Torres
                </span>
              </div>
            </div>

            <div className="mb-10">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                What you&apos;ll achieve
              </h3>
              <ul className="flex flex-col gap-3">
                {achievements.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Equipment need
              </h3>
              <div className="flex flex-wrap gap-3">
                {equipment.map((item, index) => (
                  <span
                    key={index}
                    className="bg-[#E9ECEF] text-slate-700 text-sm font-medium px-4 py-2 rounded-full">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="border border-gray-200 rounded-2xl p-6 md:p-8 bg-white shadow-sm sticky top-24">
            <div className="flex justify-center mb-6">
              <div className="relative w-40 h-40">
                <svg
                  className="w-full h-full transform -rotate-90"
                  viewBox="0 0 36 36">
                  <path
                    className="text-gray-100"
                    strokeWidth="4"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-primary transition-all duration-1000 ease-out"
                    strokeWidth="4"
                    strokeDasharray="68, 100"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold text-slate-900">68%</span>
                  <span className="text-xs text-gray-500 mt-1">Completed</span>
                </div>
              </div>
            </div>

            <h3 className="text-center font-bold text-slate-900 mb-6">
              Class Progress Breakdown
            </h3>

            <Button className="w-full bg-primary hover:bg-orange-600 text-white rounded-full py-6 text-base font-medium flex items-center justify-center gap-2 mb-8">
              Next Class
              <ArrowRight className="w-4 h-4" />
            </Button>

            <hr className="border-gray-100 mb-8" />

            <div className="flex flex-col gap-5">
              {classList.map((cls) => (
                <div key={cls.id} className="flex items-center gap-4">
                  {cls.status === 'completed' && (
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  )}
                  {cls.status === 'current' && (
                    <svg
                      className="w-5 h-5 text-primary shrink-0 transform -rotate-90"
                      viewBox="0 0 36 36">
                      <path
                        className="text-gray-200"
                        strokeWidth="4"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-primary"
                        strokeWidth="4"
                        strokeDasharray="30, 100"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                  )}
                  {cls.status === 'locked' && (
                    <Lock className="w-5 h-5 text-gray-300 shrink-0" />
                  )}

                  <span
                    className={`text-sm font-medium ${
                      cls.status === 'completed'
                        ? 'text-gray-500'
                        : cls.status === 'current'
                          ? 'text-primary'
                          : 'text-gray-500'
                    }`}>
                    {cls.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
