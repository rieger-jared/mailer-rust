import { useState } from "react";
import reactLogo from '@/assets/react.svg';
import { invoke } from '@tauri-apps/api/core';
import { sayHello } from '@/utils/test';
import '@/App.css';
import { AppSidebar } from './components/app-sidebar';
import { Separator } from '@radix-ui/react-dropdown-menu';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from './components/ui/breadcrumb';
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from './components/ui/sidebar';

function App() {
  return (
    <main className='container'>
      <SidebarProvider
        style={
          {
            '--sidebar-width': '350px',
          } as React.CSSProperties
        }
      >
        <AppSidebar />
        <SidebarInset>
          <header className='sticky top-0 flex shrink-0 items-center gap-2 border-b bg-background p-4'>
            <SidebarTrigger className='-ml-1' />
            <Separator orientation='vertical' className='mr-2 h-4' />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className='hidden md:block'>
                  <BreadcrumbLink href='#'>All Inboxes</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className='hidden md:block' />
                <BreadcrumbItem>
                  <BreadcrumbPage>Inbox</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </header>
          <div className='flex flex-1 flex-col gap-4 p-4'>
            {Array.from({ length: 24 }).map((_, index) => (
              <div
                key={index}
                className='aspect-video h-12 w-full rounded-lg bg-muted/50'
              />
            ))}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </main>
  );
}

export default App;
