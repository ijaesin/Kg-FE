'use client';

import { ReactNode, useState } from 'react';
import {
  QueryClient,
  QueryClientProvider as Provider,
} from '@tanstack/react-query';

export default function QueryClientProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      }),
  );

  return <Provider client={queryClient}>{children}</Provider>;
}
