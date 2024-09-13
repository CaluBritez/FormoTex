import jwt from 'jsonwebtoken';

export const generateJWT = (uid: string, name: string) => {
    return new Promise((resolve, reject) => {

        const payload = { uid, name };

        jwt.sign(
            payload,
            process.env.SECRET_JWT_SEED || 'JWT_SECRET',
            {
                expiresIn: '2h'
            },
            (err, token) => {
                if (err) {
                    console.log(err);
                    reject('No se pudo generar el token');
                } else {
                    resolve(token);
                }
            }
        );
    });
};