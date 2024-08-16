'use client'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'
import { ThemeProvider } from 'next-themes'
import React, { ReactNode } from 'react'
import ApolloProvider from './apollo-provider'

interface ProviderProps {
  children: ReactNode
}

const Provider: React.FC<ProviderProps> = ({ children }) => {
  return (
    <ApolloProvider>
      <ThemeProvider>
        {children}
        <ProgressBar height="4px" color="#DCAE55" options={{ showSpinner: false }} shallowRouting />
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default Provider
