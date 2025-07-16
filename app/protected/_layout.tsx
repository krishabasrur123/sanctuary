import React, { useEffect, useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import { supabase } from '../../lib/createClient';

export default function ProtectedLayout() {
  const router = useRouter();
  const [checked, setChecked] = useState(false);
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    // On mount, check current session
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setChecked(true);
      if (!data.session) {
        router.replace("/login_screen");
      }
    });

    // Also subscribe to any auth changes
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        router.replace("/login_screen");
      } else {
        setSession(session);
      }
    });

    return () => {
      sub?.subscription.unsubscribe();
    };
  }, [router]);

  if (!checked) {
    // We haven't finished checking session => show nothing or a loader
    return null;
  }

  if (!session) {
    // We already redirected, but if not, show nothing
    return null;
  }

  return <Stack />;
}