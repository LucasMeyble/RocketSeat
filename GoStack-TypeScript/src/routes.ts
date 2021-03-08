import {Request, Response} from 'express';
import createUser from './services/CreateUser';

export function helloWorld (req: Request, res: Response)  { 
  const user = createUser({
    email: 'lucas_meyble@hotmail.com',
    password: '123456',
    techs: [
      'Node.js',
      'React',
      'React Native',
      { title: 'JavaScript', experience: 100 },
    ],
  });

  return res.json({message: 'alo alo caruaru'}); 
}