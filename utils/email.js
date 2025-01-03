export const welcomeEmail = ()=>{
    return (`
        <!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bienvenida a Minga</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border: 1px solid #dddddd;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            background-color: #2563eb;
            color: #ffffff;
            text-align: center;
            padding: 20px;
            font-size: 24px;
        }
        .body {
            padding: 20px;
            text-align: center;
        }
        .button-container {
            text-align: center;
            margin: 20px 0;
        }
        .button {
            background-color: #2563eb;
            color: #ffffff;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
            font-size: 16px;
        }
        .button:hover {
            background-color: #1e3a8a ;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            Martin Vidan
        </div>
        <div class="body">
            <h1>Thanks for contacting me!!</h1>
            <p>Thank you very much for writing to me. I have received your message and I will get back to you as soon as possible.</p>
            <p>If you need something urgently, please feel free to reply to this email. In the meantime, I invite you to explore more about me and my projects in my portfolio.</p>
            <div class="button-container">
                <a href="https://martin-vidan.netlify.app/" class="button">Back to portfolio</a>
            </div>
        </div>
    </div>
</body>
</html>
 `)
}