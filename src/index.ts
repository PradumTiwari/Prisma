import { PrismaClient } from "@prisma/client";
import { log } from "console";
import { todo } from "node:test";

const prisma=new PrismaClient();

async function insertData(username:string,password:string,firstname:string,lastname:string){
    const res=await prisma.user.create({
        data:{
            username,
            password,
            firstname,
            lastname,
        }
    })
    console.log(res);
    
}

interface updataParams{
    firstname:string;
    lastname:string;
}

async function updateData(username:string,{  firstname, lastname}:updataParams){
   
 const res=await prisma.user.update({
    where:{username},
    data:{
        firstname,
        lastname,
    }
 });
 console.log(res);

}


// updateData("Pradum",{
//     firstname:"Pradum_28",
//     lastname:"Tiwari"
// })



async function insertToDo(userId:number,title:string,description:string){
    const res=await prisma.toDo.create({
        data:{
            title,
            description,
            userId,
        }
    })
    console.log(res);
    
}
insertToDo(1,'go To Gym','Go to gym at 5:00 AM');


// insertData("Pradum","Pradum@123","Pradum","Tiwari");