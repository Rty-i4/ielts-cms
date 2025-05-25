import { Button } from '@/components/ui/button';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Verify Email | IELTS CMS',
  description: 'Please check your email to verify your account.'
};

export default function VerifyEmailPage() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900'>
      <div className='container mx-auto flex min-h-screen items-center justify-center px-4 py-16'>
        <div className='space-y-6 rounded-lg bg-white p-8 shadow-lg dark:bg-slate-800'>
          {/* Header with IELTS CMS branding */}
          <div className='text-center'>
            <div className='mb-4 flex items-center justify-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='mr-2 h-8 w-8 text-blue-600'
                aria-label='IELTS CMS Logo'
                role='img'
              >
                <title>IELTS CMS Logo</title>
                <path d='M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3' />
              </svg>
              <h2 className='text-xl font-bold text-gray-900 dark:text-white'>
                IELTS CMS
              </h2>
            </div>
          </div>

          {/* Email verification content */}
          <div className='space-y-4 text-center'>
            <div className='mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900'>
              <svg
                className='h-8 w-8 text-green-600 dark:text-green-400'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                aria-label='Email verification'
                role='img'
              >
                <title>Email verification</title>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                />
              </svg>
            </div>

            <h1 className='text-2xl font-semibold text-gray-900 dark:text-white'>
              Check your email
            </h1>

            <p className='text-gray-600 dark:text-gray-300'>
              We&apos;ve sent you a verification link. Please check your email
              and click the link to activate your account.
            </p>
          </div>

          {/* Actions */}
          <div className='space-y-4'>
            <p className='text-center text-sm text-gray-500 dark:text-gray-400'>
              Didn&apos;t receive the email? Check your spam folder or contact
              support.
            </p>

            <Link href='/' className='block'>
              <Button variant='default' className='w-full'>
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
