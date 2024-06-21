export const getUsers = async (req, res) => {
    try {
        console.log("Get users");
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Failed to get users!"});
    }
}

export const getUser = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Failed to get user!"});
    }
}

export const updateUser = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Failed to update user!"});
    }
}

export const deleteUser = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Failed to delete user!"});
    }
}