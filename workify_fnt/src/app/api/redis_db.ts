import exp from 'constants';
import { hostname } from 'os';
import { createClient } from 'redis';

const redisClient = createClient({
    password : yujDDOvHYYi56GT8KZR1z8iUsQ3Wpba2,
  socket:{
    
    host: "redis-15379.c330.asia-south1-1.gce.redns.redis-cloud.com",
    port : 15379
} 
});

redisClient.on('error', (err) => console.log('Redis Client Error', err));



export {redisClient}