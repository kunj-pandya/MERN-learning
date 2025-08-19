import mailgen from "mailgen";

const emailVerificationMailgenContent = (username, verificationUrl) => {
    return {
        body: {
            name: username,
            intro: "Welcome to our App! we'are excited to have you on board.",
            action: {
                instructions: "To verifiy your email please click on the following button",
                button: {
                    color: "#22BC66",
                    text: "Verfiy your email",
                    link: verificationUrl,
                },
            },
            outro: "Need help, or have questions? Just replay to this email , we'd love tp help."
        },
    };
}

const forgotPasswordMailgenContent = (username, passwordResetUrl) => {
    return {
        body: {
            name: username,
            intro: "We got a request to reset the password of your account",
            action: {
                instructions: "To reset your password please click on the following button or link",
                button: {
                    color: "#22BC66",
                    text: "Reset password",
                    link: passwordResetUrl,
                },
            },
            outro: "Need help, or have questions? Just replay to this email , we'd love tp help."
        },
    };
}

export {
    emailVerificationMailgenContent,
    forgotPasswordMailgenContent
}
