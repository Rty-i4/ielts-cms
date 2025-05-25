'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useUser } from '@/lib/supabase/user-context';
import { UserAvatarProfile } from '@/components/user-avatar-profile';
import { useState } from 'react';
import { toast } from 'sonner';

export default function ProfileViewPage() {
  const { user, loading } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [displayName, setDisplayName] = useState('');

  if (loading) {
    return (
      <div className='flex w-full flex-col p-4'>
        <div className='space-y-6'>
          <div className='bg-muted h-8 w-48 animate-pulse rounded' />
          <div className='bg-muted h-32 w-full animate-pulse rounded' />
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className='flex w-full flex-col p-4'>
        <Card>
          <CardContent className='pt-6'>
            <p className='text-muted-foreground text-center'>
              Please sign in to view your profile.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Transform Supabase user to match the expected format
  const transformedUser = {
    imageUrl: user.user_metadata?.avatar_url || '',
    fullName:
      user.user_metadata?.full_name || user.email?.split('@')[0] || 'User',
    emailAddresses: [{ emailAddress: user.email || '' }]
  };

  const handleUpdateProfile = async () => {
    // This would typically update the user's profile in Supabase
    // For now, we'll just show a toast
    toast.success('Profile updated successfully!');
    setIsEditing(false);
  };

  return (
    <div className='flex w-full flex-col space-y-6 p-4'>
      <div>
        <h1 className='text-2xl font-bold'>Profile</h1>
        <p className='text-muted-foreground'>
          Manage your account settings and preferences.
        </p>
      </div>

      <div className='grid gap-6'>
        <Card>
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
            <CardDescription>
              Your personal information and account details.
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-6'>
            <div className='flex items-center space-x-4'>
              <UserAvatarProfile user={transformedUser} className='h-20 w-20' />
              <div>
                <h3 className='text-lg font-medium'>
                  {transformedUser.fullName}
                </h3>
                <p className='text-muted-foreground text-sm'>
                  {transformedUser.emailAddresses[0].emailAddress}
                </p>
              </div>
            </div>

            <div className='grid gap-4'>
              <div className='grid gap-2'>
                <Label htmlFor='email'>Email</Label>
                <Input
                  id='email'
                  type='email'
                  value={transformedUser.emailAddresses[0].emailAddress}
                  disabled
                />
              </div>

              <div className='grid gap-2'>
                <Label htmlFor='display-name'>Display Name</Label>
                <Input
                  id='display-name'
                  value={isEditing ? displayName : transformedUser.fullName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  disabled={!isEditing}
                />
              </div>

              <div className='grid gap-2'>
                <Label htmlFor='user-id'>User ID</Label>
                <Input id='user-id' value={user.id} disabled />
              </div>

              <div className='grid gap-2'>
                <Label htmlFor='created-at'>Member Since</Label>
                <Input
                  id='created-at'
                  value={new Date(user.created_at).toLocaleDateString()}
                  disabled
                />
              </div>
            </div>

            <div className='flex gap-2'>
              {isEditing ? (
                <>
                  <Button onClick={handleUpdateProfile}>Save Changes</Button>
                  <Button
                    variant='outline'
                    onClick={() => {
                      setIsEditing(false);
                      setDisplayName('');
                    }}
                  >
                    Cancel
                  </Button>
                </>
              ) : (
                <Button
                  onClick={() => {
                    setIsEditing(true);
                    setDisplayName(transformedUser.fullName);
                  }}
                >
                  Edit Profile
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Account Security</CardTitle>
            <CardDescription>
              Manage your password and security settings.
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            <Button variant='outline' className='w-full'>
              Change Password
            </Button>
            <Button variant='outline' className='w-full'>
              Enable Two-Factor Authentication
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
