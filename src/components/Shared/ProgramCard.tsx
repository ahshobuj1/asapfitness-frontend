'use client';

import {TProgram} from '@/types/program';
import {ArrowRight, LogIn} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import {useAppSelector} from '@/redux/hooks';
import {useState} from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import {useRouter} from 'next/navigation';

const ProgramCard = ({
  program,
  priority,
}: {
  program: TProgram;
  priority?: boolean;
}) => {
  const user = useAppSelector((state) => state.auth.user);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const router = useRouter();

  const handleViewClasses = (e: React.MouseEvent) => {
    if (!user) {
      e.preventDefault();
      setShowLoginModal(true);
    }
  };

  return (
    <>
      <div className="group relative h-150 w-full rounded-2xl overflow-hidden cursor-pointer shadow-lg">
        <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
          <Image
            src={'/images/home/programs/programs-2.jpg'}
            // src={program.thumbnailUrl}
            alt={program.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={priority}
          />
        </div>

        <div className="absolute inset-0 bg-linear-to-t from-[#111827] via-[#111827]/70 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end h-full">
          <div className="w-8 h-1 bg-primary rounded-full mb-3" />

          <h3 className="text-2xl font-bold text-white mb-2">{program.title} Program</h3>

          <p className="text-gray-300 text-sm mb-6 line-clamp-3">
            {program.description}
          </p>

          <Link href={`/programs/${program.id}`} onClick={handleViewClasses}>
            <button className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-4 rounded-full flex justify-center items-center gap-2 transition-colors cursor-pointer">
              View All Classes
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>

      <AlertDialog open={showLoginModal} onOpenChange={setShowLoginModal}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <div className="flex justify-center mb-2">
              <div className="p-3 bg-primary/10 rounded-full">
                <LogIn className="w-6 h-6 text-primary" />
              </div>
            </div>
            <AlertDialogTitle className="text-center">
              Login Required
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center">
              Please login first to access the classes in this program.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => router.push('/auth/login')}>
              Go to Sign In
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default ProgramCard;
