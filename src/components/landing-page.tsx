'use client';

import { Button } from '@/components/ui/button';
import { useAuthModal } from '@/components/auth/auth-modal-provider';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { IconStar } from '@tabler/icons-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { toast } from 'sonner';
import { useUser } from '@/lib/supabase/user-context';

export function LandingPage() {
  const { openModal } = useAuthModal();
  const searchParams = useSearchParams();
  const { user } = useUser();

  useEffect(() => {
    const error = searchParams.get('error');
    if (error === 'oauth_failed') {
      toast.error('OAuth sign in failed. Please try again.');
    }
  }, [searchParams]);

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900'>
      <div className='container mx-auto px-4 py-16'>
        {/* Header */}
        <div className='mb-16 text-center'>
          <div className='mb-8 flex items-center justify-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='mr-4 h-12 w-12 text-blue-600'
              aria-label='IELTS CMS Logo'
              role='img'
            >
              <title>IELTS CMS Logo</title>
              <path d='M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3' />
            </svg>
            <h1 className='text-4xl font-bold text-gray-900 dark:text-white'>
              IELTS CMS
            </h1>
          </div>

          <p className='mx-auto mb-8 max-w-2xl text-xl text-gray-600 dark:text-gray-300'>
            A comprehensive content management system for IELTS test
            preparation. Manage exams, track progress, and deliver better
            learning experiences.
          </p>

          {/* GitHub Link */}
          <Link
            className='group mb-12 inline-flex items-center text-gray-600 hover:text-yellow-600 dark:text-gray-400 dark:hover:text-yellow-400'
            target='_blank'
            href='https://github.com/kiranism/next-shadcn-dashboard-starter'
          >
            <div className='flex items-center'>
              <GitHubLogoIcon className='size-5' />
              <span className='ml-2'>Star on GitHub</span>
            </div>
            <div className='ml-2 flex items-center gap-1'>
              <IconStar
                className='size-4 text-gray-500 transition-all duration-300 group-hover:text-yellow-400'
                fill='currentColor'
              />
              <span className='font-medium'>1.2k</span>
            </div>
          </Link>
        </div>

        {/* Features Grid */}
        <div className='mb-16 grid gap-8 md:grid-cols-3'>
          <div className='rounded-lg bg-white p-6 text-center shadow-sm dark:bg-slate-800'>
            <div className='mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900'>
              <svg
                className='h-6 w-6 text-blue-600 dark:text-blue-400'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                aria-label='Exam Management'
                role='img'
              >
                <title>Exam Management</title>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                />
              </svg>
            </div>
            <h3 className='mb-2 text-lg font-semibold text-gray-900 dark:text-white'>
              Exam Management
            </h3>
            <p className='text-gray-600 dark:text-gray-300'>
              Create and manage IELTS exams with multiple modules and question
              types.
            </p>
          </div>

          <div className='rounded-lg bg-white p-6 text-center shadow-sm dark:bg-slate-800'>
            <div className='mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900'>
              <svg
                className='h-6 w-6 text-green-600 dark:text-green-400'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                aria-label='Progress Tracking'
                role='img'
              >
                <title>Progress Tracking</title>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                />
              </svg>
            </div>
            <h3 className='mb-2 text-lg font-semibold text-gray-900 dark:text-white'>
              Progress Tracking
            </h3>
            <p className='text-gray-600 dark:text-gray-300'>
              Monitor student progress and performance analytics in real-time.
            </p>
          </div>

          <div className='rounded-lg bg-white p-6 text-center shadow-sm dark:bg-slate-800'>
            <div className='mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900'>
              <svg
                className='h-6 w-6 text-purple-600 dark:text-purple-400'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                aria-label='Band Scoring'
                role='img'
              >
                <title>Band Scoring</title>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253'
                />
              </svg>
            </div>
            <h3 className='mb-2 text-lg font-semibold text-gray-900 dark:text-white'>
              Band Scoring
            </h3>
            <p className='text-gray-600 dark:text-gray-300'>
              Automated IELTS band scoring with detailed feedback and criteria.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className='text-center'>
          {user ? (
            <>
              <h2 className='mb-6 text-3xl font-bold text-gray-900 dark:text-white'>
                Welcome back, {user.email}!
              </h2>
              <p className='mx-auto mb-8 max-w-xl text-lg text-gray-600 dark:text-gray-300'>
                Ready to continue managing your IELTS content? Access your
                dashboard to get started.
              </p>

              <div className='flex flex-col justify-center gap-4 sm:flex-row'>
                <Link href='/dashboard/overview'>
                  <Button
                    size='lg'
                    className='bg-blue-600 px-8 py-3 text-white hover:bg-blue-700'
                  >
                    Go to Dashboard
                  </Button>
                </Link>
              </div>
            </>
          ) : (
            <>
              <h2 className='mb-6 text-3xl font-bold text-gray-900 dark:text-white'>
                Get Started Today
              </h2>
              <p className='mx-auto mb-8 max-w-xl text-lg text-gray-600 dark:text-gray-300'>
                Join educators worldwide who are using IELTS CMS to create
                better learning experiences for their students.
              </p>

              <div className='flex flex-col justify-center gap-4 sm:flex-row'>
                <Button
                  size='lg'
                  onClick={() => openModal('signup')}
                  className='bg-blue-600 px-8 py-3 text-white hover:bg-blue-700'
                >
                  Create Account
                </Button>
                <Button
                  size='lg'
                  variant='outline'
                  onClick={() => openModal('signin')}
                  className='px-8 py-3'
                >
                  Sign In
                </Button>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className='mt-16 border-t border-gray-200 pt-8 text-center text-sm text-gray-500 dark:border-gray-700 dark:text-gray-400'>
          <p>
            Built with Next.js, Tailwind CSS, and Supabase.
            <Link href='/terms' className='ml-2 underline hover:text-blue-600'>
              Terms
            </Link>
            <Link
              href='/privacy'
              className='ml-2 underline hover:text-blue-600'
            >
              Privacy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
