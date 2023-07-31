'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { ReactNode, useState } from 'react';

interface Props {
  children: ReactNode;
}
const queryClient = new QueryClient();

export const Providers = ({ children }: {children : React.ReactNode}) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};