import { connectMongoDB } from "@/app/lib/mongodb";
import users from "@/app/(models)/Users";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { MongoClient } from "mongodb"

export const authOptions = {
    providers: [
      CredentialsProvider({
        name: "credentials",
        credentials: {},
        /*credentials : {
          email : {
            label: "Email",
            type: "text",
            placeholder: "Your Email",
          },
          password : {
            label: "Pasword",
            type: "password",
            placeholder: "Your Password",
          },
        },*/
        async authorize(credentials){
  
            try{
  
              //const foundUser = await User.findOne({ email: credentials.email});
              const client = await MongoClient.connect(process.env.MONGODB_URI);
              const usersCollection = client.db().collection('users');
      
              const foundUser = await usersCollection.findOne({
                email: credentials.email,
              });
  
              
              if(foundUser){
  
                console.log('User Exists');
                const match = await bcrypt.compare(
                  credentials.password,
                  foundUser.password
                );
                
                if(match){
                  console.log('Good Pass');
                  delete foundUser.password;
                  foundUser['role'] = 'Unveried Email';
                  client.close();
                  return foundUser;
                }
  
              }
            } catch (error){
              console.log(error);
            }
  
            client.close();
            return null;
        },
      }),
    ],
    callbacks : {
      async jwt({token, user}) {
          if(user) token.role = user.role;
          return token;
      },
      async session({session, token}) {
          if(session?.user) session.user.role = token.role;
          return session;
      }
    }
  };