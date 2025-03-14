import brevo from '@getbrevo/brevo'
import dotenv from 'dotenv'
dotenv.config({path: '.env'})

const apiInstance = new brevo.TransactionalEmailsApi()

apiInstance.setApiKey(
    brevo.TransactionalEmailsApiApiKeys.apiKey,
    process.env.BREVO_APIKEY
)

//Cofigurando el SMTP
const smtpEmail = new brevo.SendSmtpEmail()

export const sendEmail = async ({to,token}) => {
    const {email, name} = to;
    try {
        smtpEmail.subject = "Bienvenido a Moneta Flow"
        smtpEmail.to = [{email: email, name: name}]
        smtpEmail.htmlContent = `<html>
            <body>
                <h1>Bienvenido a Moneta Flow</h1>
                <p>Hola ${name}!</p>
                <p>Gracias por registrarte en Taski, por favor confirma tu correo electronico</p>
                <a href=${process.env.BACKEND_URL}/api/auth/confirm-account/${token}>confirmar tu cuenta</a>
                <p>Este correo es automatico, por favor no respondas</p>
            </body>
        </html>`
        smtpEmail.sender = { name: "Taski - Registro", email: "210373@utxicotepec.edu.mx" }

        await apiInstance.sendTransacEmail(smtpEmail)
        console.log('se envio el correo correctamente')
    } catch (error) {
        console.log(error)
    }
}

export const sendEmailPass = async ({token, to}) => {
    const {email, name} = to;
    try {
        smtpEmail.subject = "Moneta Flow - Recupera tu contraseña"
        smtpEmail.to = [{email: email, name: name}]
        smtpEmail.htmlContent = `<html>
            <body>
                <h1>Restablece tu contraseña</h1>
                <p>Hola ${name}!</p>
                <p>Reestablece tu contraseña para que puedas seguir disfrutando de Taski</p>
                <a href=${process.env.BACKEND_URL}/api/auth/recovery-password/${token}>Restablece tu contraseña</a>
                <p>Este correo es automatico, por favor no respondas</p>
            </body>
        </html>`
        smtpEmail.sender = { name: "Taski", email: "210373@utxicotepec.edu.mx" }

        await apiInstance.sendTransacEmail(smtpEmail)
        console.log('se envio el correo para restablecer la contraseña')
    } catch (error) {
        console.log(error)
    }
}

