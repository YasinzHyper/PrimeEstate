import jwt from 'jsonwebtoken'

export const shouldBeLoggedIn = async (req,res) => {
    // const token = req.cookies.token;

    // if (!token) return res.status(401).json({message: "Not Authenticated!"});

    // await jwt.verify(token,process.env.JWT_SECRET, async (err,payload) => {
    //     if (err) return res.status(403).json({message: "Invalid Token!"});
    // });

    console.log(req.userId);

    res.status(200).json({message: "Your are Authenticated!"});
}

export const shouldBeAdmin = async (req,res) => {
    const token = req.cookies.token;

    if (!token) return res.status(401).json({message: "Not Authenticated!"});

    await jwt.verify(token,process.env.JWT_SECRET, async (err,payload) => {
        if (err) return res.status(403).json({message: "Invalid Token!"});
        if (!payload.isAdmin) return res.status(403).json({message: "Not Authorized!"});
    });

    res.status(200).json({message: "Your are Authenticated!"});
}
