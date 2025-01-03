import { transporter } from "../../config/nodeMailer.js"
import { welcomeEmail } from "../../utils/email.js"

const sendMailPortfilio = async (req, res, next) => {
    await transporter.sendMail({
        from: '"Martin Vidan" <portfoliomartinvidan@gmail.com>', 
        to: req.body.email, 
        subject: "Thanks for contacting me!", 
        html: welcomeEmail(),
      })
    await transporter.sendMail({
        from: '"Portfolio" <portfoliomartinvidan@gmail.com>', 
        to: "marcarfe12@gmail.com", 
        subject: req.body.subject, 
        html: `
            <p>${req.body.message}</p>
            <p>este es el email: ${req.body.email}</p>
            `,
      })
    return res.status(200).json({succes: true})
}
export {sendMailPortfilio}