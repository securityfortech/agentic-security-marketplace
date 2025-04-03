import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { 
  Database, 
  KeyRound, 
  HardDrive, 
  Activity,
  ExternalLink,
  CheckCircle2,
  FileCode,  // Add this import
  ShieldAlert
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const Index = () => {
  const { user } = useAuth();

  const taskItems = [
    { id: 1, task: 'Create a project', status: 'complete' },
    { id: 2, task: 'Read documentation', status: 'complete' },
    { id: 3, task: 'Build application', status: 'in-progress' },
    { id: 4, task: 'Connect Supabase', status: 'in-progress' },
    { id: 5, task: 'Deploy project', status: 'not-started' },
    { id: 6, task: 'Get users', status: 'not-started' },
  ];

  const featureItems = [
    {
      icon: KeyRound,
      title: 'Authentication',
      description: 'A complete user management system that works without any additional tools.'
    },
    {
      icon: HardDrive,
      title: 'Storage',
      description: 'Store, organize, and serve any file types of any size from multiple buckets.'
    },
    {
      icon: Database,
      title: 'Edge Functions',
      description: 'Write custom code without deploying or scaling servers, with fast deploy times and low latency.'
    },
    {
      icon: Activity,
      title: 'Realtime',
      description: 'Listen to your PostgreSQL database in realtime via websockets.'
    }
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'complete':
        return 'bg-green-500/10 text-green-500';
      case 'in-progress':
        return 'bg-blue-500/10 text-blue-500';
      case 'not-started':
        return 'bg-zinc-500/10 text-zinc-500';
      default:
        return 'bg-zinc-500/10 text-zinc-500';
    }
  };

  return (
    <div className="space-y-12 py-6">
      <div className="flex flex-col items-start">
        <div className="mb-4 flex items-center space-x-2">
          <h1 className="text-3xl font-bold tracking-tight">agentic-security</h1>
          <Badge className="bg-zinc-800 text-white">BASIC</Badge>
        </div>
        
        <div className="flex space-x-4">
          <Badge className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">
            <ShieldAlert className="mr-1 h-3 w-3" /> Security Issues
          </Badge>
          <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
            <CheckCircle2 className="mr-1 h-3 w-3" /> Project Status
          </Badge>
        </div>
      </div>
      
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Welcome to your new project</h2>
        <p className="text-zinc-400">
          Your project has been deployed on its own instance, with its own API all set up and ready to use.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="md:col-span-2 space-y-6">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle>Get started by building out your database</CardTitle>
                <CardDescription className="text-zinc-400">
                  Start building your app by creating tables and inserting data. Our Table Editor makes Postgres as easy to use as a spreadsheet, but there's also our SQL Editor if you need something more.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" className="bg-zinc-800 border-zinc-700 hover:bg-zinc-700">
                    <Database className="mr-2 h-4 w-4" />
                    Table Editor
                  </Button>
                  <Button variant="outline" className="bg-zinc-800 border-zinc-700 hover:bg-zinc-700">
                    <FileCode className="mr-2 h-4 w-4" />
                    SQL Editor
                  </Button>
                  <Button variant="outline" className="bg-zinc-800 border-zinc-700 hover:bg-zinc-700">
                    <KeyRound className="mr-2 h-4 w-4" />
                    About Database
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle>Explore our other products</CardTitle>
                <CardDescription className="text-zinc-400">
                  Supabase provides all the backend features you need to build a product. You can use it completely, or just the features you need.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {featureItems.map((item, i) => (
                    <Card key={i} className="bg-zinc-800 border-zinc-700 hover:bg-zinc-700/50 transition-colors cursor-pointer">
                      <CardHeader className="p-4">
                        <div className="flex items-center space-x-2">
                          <item.icon className="h-5 w-5" />
                          <CardTitle className="text-base">{item.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-sm text-zinc-400">{item.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle>Getting started</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow className="hover:bg-transparent">
                      <TableHead className="w-12 text-xs text-zinc-500">id</TableHead>
                      <TableHead className="text-xs text-zinc-500">task</TableHead>
                      <TableHead className="text-xs text-zinc-500">status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {taskItems.map((item) => (
                      <TableRow key={item.id} className="hover:bg-zinc-800/50 border-zinc-800">
                        <TableCell className="text-sm text-zinc-500">{item.id}</TableCell>
                        <TableCell className="text-sm">{item.task}</TableCell>
                        <TableCell>
                          <Badge className={`${getStatusColor(item.status)} text-xs font-normal`}>
                            {item.status.replace('-', ' ')}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

// Missing ShieldAlert component import

export default Index;
