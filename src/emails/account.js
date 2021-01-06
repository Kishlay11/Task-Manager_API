const sgMail=require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'kishlay1105@gmail.com',
        subject:'Thanks for joining in',
        text:`Welcome to the task manager app, ${name} .Let me know how you get along the app`,
        
    })
}
const sendCancelationEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'kishlay1105@gmail.com',
        subject:'Sorry to see you go',
        text:`GoodBye, ${name} .I hope to see you back sometime soon`,
        
    })
}

  

module.exports={
    sendWelcomeEmail,
    sendCancelationEmail
}